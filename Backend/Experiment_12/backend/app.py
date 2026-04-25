import os
from datetime import datetime
from flask import Flask, request
from flask_socketio import SocketIO, emit, join_room, leave_room

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'

# SOCKET INIT
socketio = SocketIO(
    app,
    cors_allowed_origins="*",
    async_mode="threading",
    logger=True,
    engineio_logger=True
)

# HEALTH CHECK ROUTE
@app.route("/")
def home():
    return "Backend is running"

# CONNECTION EVENTS 
@socketio.on('connect')
def handle_connect():
    print(f"Client connected: {request.sid}")

    emit("receive_message", {
        "text": "A user joined",
        "sender": "system",
        "time": get_time()
    }, broadcast=True)

@socketio.on('disconnect')
def handle_disconnect():
    print(f"❌ Client disconnected: {request.sid}")

    emit("receive_message", {
        "text": "A user left",
        "sender": "system",
        "time": get_time()
    }, broadcast=True)

# MESSAGE HANDLING 
@socketio.on('send_message')
def handle_message(data):
    print("Message received:", data)
    try:
        if not data or "text" not in data:
            print("Invalid message format")
            return

        message = {
            "text": data.get("text"),
            "sender": data.get("sender", request.sid),
            "time": data.get("time") or get_time()
        }
        emit('receive_message', message, broadcast=True)
    except Exception as e:
        print("Error handling message:", str(e))

# OPTIONAL: ROOM SUPPORT 
@socketio.on('join_room')
def handle_join(data):
    room = data.get("room")
    if room:
        join_room(room)
        print(f"{request.sid} joined {room}")

@socketio.on('leave_room')
def handle_leave(data):
    room = data.get("room")
    if room:
        leave_room(room)
        print(f"{request.sid} left {room}")

# HELPER
def get_time():
    return datetime.now().strftime("%H:%M")
 
# MAIN 
if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    socketio.run(
        app,
        host="0.0.0.0",
        port=port,
        debug=True
    )
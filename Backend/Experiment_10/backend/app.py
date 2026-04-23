from flask import Flask, request, jsonify
from flask_cors import CORS
import os

app = Flask(__name__)

# Allow all origins (for React frontend)
CORS(app, resources={r"/*": {"origins": "*"}})

# Dummy users
users = {
    "admin": {"password": "123", "role": "admin"},
    "user": {"password": "123", "role": "user"}
}

# Role permissions
permissions = {
    "admin": ["read", "write", "delete"],
    "user": ["read"]
}

# ---------------- LOGIN ----------------
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()

    if not data:
        return jsonify({"success": False, "msg": "No data"}), 400

    username = data.get("username")
    password = data.get("password")

    if username in users and users[username]["password"] == password:
        return jsonify({
            "success": True,
            "role": users[username]["role"]
        })

    return jsonify({"success": False, "msg": "Invalid credentials"}), 401


# ---------------- AUTH CHECK ----------------
def check_permission(role, action):
    if not role:
        return False
    return role in permissions and action in permissions[role]


# ---------------- ROUTES ----------------
@app.route('/')
def home():
    return "RBAC Backend Running 🚀"


@app.route('/read')
def read():
    role = request.headers.get("role")

    if check_permission(role, "read"):
        return jsonify({"msg": "Read success"})
    
    return jsonify({"msg": "Access Denied"}), 403


@app.route('/write')
def write():
    role = request.headers.get("role")

    if check_permission(role, "write"):
        return jsonify({"msg": "Write success"})
    
    return jsonify({"msg": "Access Denied"}), 403


@app.route('/delete')
def delete():
    role = request.headers.get("role")

    if check_permission(role, "delete"):
        return jsonify({"msg": "Delete success"})
    
    return jsonify({"msg": "Access Denied"}), 403


# ---------------- RUN (RENDER FIX) ----------------
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
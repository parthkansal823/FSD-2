# from flask import Flask, app, request, jsonify
# from auth_routes import app as auth_app

from flask import Flask, request, jsonify
from flask_jwt_extended import (
    JWTManager, create_access_token,
    jwt_required, get_jwt_identity
)
import base64

app = Flask(__name__)
app.config["JWT_SECRET_KEY"] = "super-secret-key"

jwt = JWTManager(app)

# ================================
# In-memory user store
# ================================
users = {
    "admin": {
        "password": "admin123",
        "role": "admin"
    },
    "john": {
        "password": "john123",
        "role": "user"
    }
}

# ================================
# 1. BASIC AUTHENTICATION
# ================================
@app.route("/basic-protected")
def basic_protected():
    auth = request.authorization

    if not auth:
        return jsonify({"error": "Missing Basic Auth"}), 401

    user = users.get(auth.username)

    if user and user["password"] == auth.password:
        return jsonify({"message": f"Basic Auth Success. Welcome {auth.username}!"})

    return jsonify({"error": "Invalid credentials"}), 401


# ================================
# 2. SIMPLE TOKEN AUTHENTICATION
# ================================

# Generate simple token (not JWT)
@app.route("/token-login", methods=["POST"])
def token_login():
    data = request.json
    username = data.get("username")
    password = data.get("password")

    user = users.get(username)

    if user and user["password"] == password:
        token = base64.b64encode(username.encode()).decode()
        return jsonify({"token": token})

    return jsonify({"error": "Invalid credentials"}), 401


@app.route("/token-protected")
def token_protected():
    token = request.headers.get("x-auth-token")

    if not token:
        return jsonify({"error": "Missing Token"}), 401

    try:
        username = base64.b64decode(token).decode()
        if username in users:
            return jsonify({"message": f"Token Auth Success. Welcome {username}!"})
    except:
        pass

    return jsonify({"error": "Invalid Token"}), 401


# ================================
# 3. JWT AUTHENTICATION
# ================================

@app.route("/jwt-login", methods=["POST"])
def jwt_login():
    data = request.json
    username = data.get("username")
    password = data.get("password")

    user = users.get(username)

    if user and user["password"] == password:
        token = create_access_token(identity=username)
        return jsonify({"access_token": token})

    return jsonify({"error": "Invalid credentials"}), 401


@app.route("/jwt-protected")
@jwt_required()
def jwt_protected():
    current_user = get_jwt_identity()
    return jsonify({"message": f"JWT Auth Success. Welcome {current_user}!"})

# ================================
# ROOT ROUTE
# ================================
@app.route("/")
def home():
    return jsonify({
        "message": "Authentication Experiment Running",
        "routes": [
            "/basic-protected (Basic Auth)",
            "/token-login (POST)",
            "/token-protected (x-auth-token header)",
            "/jwt-login (POST)",
            "/jwt-protected (Bearer Token)"
        ]
    })


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
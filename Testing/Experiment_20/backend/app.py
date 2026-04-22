from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import os, time
from sqlalchemy.exc import OperationalError

app = Flask(__name__)
CORS(app)

# DB config (works for both local + docker)
DB_HOST = os.getenv("DB_HOST", "localhost")
DB_USER = os.getenv("DB_USER", "user")
DB_PASSWORD = os.getenv("DB_PASSWORD", "password")
DB_NAME = os.getenv("DB_NAME", "authdb")

TESTING = os.getenv("TESTING", "").lower() in ("1", "true")

if TESTING:
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///:memory:"
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = \
        f"mysql+pymysql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}/{DB_NAME}"

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# Model
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(100), unique=True)
    password = db.Column(db.String(100))

# Wait for DB on real startup (Docker); skip during tests
if not TESTING:
    with app.app_context():
        for i in range(10):
            try:
                db.create_all()
                break
            except OperationalError:
                time.sleep(3)

@app.route('/')
def home():
    return "API Running"

@app.route('/register', methods=['POST'])
def register():
    data = request.json
    user = User(email=data['email'], password=data['password'])
    db.session.add(user)
    db.session.commit()
    return jsonify({"message": "Registered"})

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    user = User.query.filter_by(email=data['email'], password=data['password']).first()
    if user:
        return jsonify({"message": "Login successful"})
    return jsonify({"message": "Invalid"}), 401

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
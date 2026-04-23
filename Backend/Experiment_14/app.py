import os
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from dotenv import load_dotenv
from sqlalchemy import text

# Load env
load_dotenv()

app = Flask(__name__)

# Fix URL (important for Neon sometimes)
db_url = os.getenv("DATABASE_URL")
if db_url.startswith("postgres://"):
    db_url = db_url.replace("postgres://", "postgresql://", 1)

# Config
app.config['SQLALCHEMY_DATABASE_URI'] = db_url
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = os.getenv("SECRET_KEY")

db = SQLAlchemy(app)
bcrypt = Bcrypt(app)

# Model
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)

# Validation
def validate(data):
    if not data:
        return "No data provided"
    if not data.get("username") or not data.get("password"):
        return "Username and password required"
    if len(data["password"]) < 8:
        return "Password must be at least 8 characters"
    return None

# Routes -- Check DB connection
@app.route('/')
def home():
    try:
        db.session.execute(text("SELECT 1"))
        return "Neon DB Connected"
    except Exception as e:
        return str(e)

# Initialize DB
@app.route('/init')
def init_db():
    db.create_all()
    return "Tables created in Neon"

# Register
@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()

    error = validate(data)
    if error:
        return jsonify({"error": error}), 400

    existing = User.query.filter_by(username=data['username']).first()
    if existing:
        return jsonify({"error": "User already exists"}), 400

    # Hash password
    hash_pw = bcrypt.generate_password_hash(data['password']).decode('utf-8')

    user = User(username=data['username'], password=hash_pw)

    db.session.add(user)
    db.session.commit()

    return jsonify({"message": "User registered"})

# Login
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()

    user = User.query.filter_by(username=data['username']).first()

    if not user or not bcrypt.check_password_hash(user.password, data['password']):
        return jsonify({"error": "Invalid credentials"}), 401

    return jsonify({"message": "Login successful"})

if __name__ == '__main__':
    app.run(debug=True)
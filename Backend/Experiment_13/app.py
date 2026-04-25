from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from marshmallow import Schema, fields, validate, ValidationError
from sqlalchemy.exc import IntegrityError
import os

app = Flask(__name__)

# ===============================
# DATABASE CONFIG (Render PostgreSQL)
# ===============================
db_url = os.getenv("DATABASE_URL")

# Fix Render PostgreSQL URL issue
if db_url and db_url.startswith("postgres://"):
    db_url = db_url.replace("postgres://", "postgresql://")

# fallback for local testing
if not db_url:
    db_url = "sqlite:///students.db"

app.config['SQLALCHEMY_DATABASE_URI'] = db_url
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# ===============================
# MODEL
# ===============================
class Student(db.Model):
    __tablename__ = "students"

    id = db.Column(db.Integer, primary_key=True)
    uid = db.Column(db.String(20), unique=True, nullable=False)
    name = db.Column(db.String(100), nullable=False)
    age = db.Column(db.Integer, nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "uid": self.uid,
            "name": self.name,
            "age": self.age
        }

# ===============================
# SCHEMA
# ===============================
class StudentSchema(Schema):
    name = fields.Str(required=True, validate=validate.Length(min=2))
    age = fields.Int(required=True, validate=validate.Range(min=1, max=120))
    uid = fields.Str(required=True, validate=validate.Length(min=3))

student_schema = StudentSchema()
student_update_schema = StudentSchema(partial=True)

# ===============================
# ERROR HANDLERS
# ===============================
@app.errorhandler(ValidationError)
def handle_validation_error(e):
    return jsonify({
        "status": "error",
        "errors": e.messages
    }), 400

@app.errorhandler(404)
def not_found(e):
    return jsonify({"status": "error", "message": "Resource not found"}), 404

@app.errorhandler(500)
def server_error(e):
    return jsonify({"status": "error", "message": "Internal Server Error"}), 500

# ===============================
# ROUTES
# ===============================
@app.route('/')
def home():
    return jsonify({
        "status": "success",
        "message": "Student API Running 🚀"
    })

# Health check (important for Render)
@app.route('/health')
def health():
    return jsonify({"status": "OK"}), 200

# ===============================
# CREATE
# ===============================
@app.route('/students', methods=['POST'])
def create_student():
    try:
        data = request.get_json()
        validated_data = student_schema.load(data)

        student = Student(**validated_data)
        db.session.add(student)
        db.session.commit()

        return jsonify({
            "status": "success",
            "data": student.to_dict()
        }), 201

    except IntegrityError:
        db.session.rollback()
        return jsonify({
            "status": "error",
            "message": "UID already exists"
        }), 400

# ===============================
# READ ALL (Pagination)
# ===============================
@app.route('/students', methods=['GET'])
def get_students():
    page = request.args.get('page', 1, type=int)
    limit = request.args.get('limit', 5, type=int)

    students = Student.query.paginate(page=page, per_page=limit, error_out=False)

    return jsonify({
        "status": "success",
        "total": students.total,
        "page": page,
        "data": [s.to_dict() for s in students.items]
    })

# ===============================
# READ ONE
# ===============================
@app.route('/students/<int:id>', methods=['GET'])
def get_student(id):
    student = Student.query.get_or_404(id)
    return jsonify({
        "status": "success",
        "data": student.to_dict()
    })

# ===============================
# UPDATE
# ===============================
@app.route('/students/<int:id>', methods=['PUT'])
def update_student(id):
    try:
        student = Student.query.get_or_404(id)
        data = request.get_json()

        validated_data = student_update_schema.load(data)

        for key, value in validated_data.items():
            setattr(student, key, value)

        db.session.commit()

        return jsonify({
            "status": "success",
            "data": student.to_dict()
        })

    except IntegrityError:
        db.session.rollback()
        return jsonify({
            "status": "error",
            "message": "UID already exists"
        }), 400

# ===============================
# DELETE
# ===============================
@app.route('/students/<int:id>', methods=['DELETE'])
def delete_student(id):
    student = Student.query.get_or_404(id)

    db.session.delete(student)
    db.session.commit()

    return jsonify({
        "status": "success",
        "message": "Deleted successfully"
    })

# ===============================
# CREATE TABLES
# ===============================
with app.app_context():
    db.create_all()

# ===============================
# RUN (local only)
# ===============================
if __name__ == '__main__':
    app.run(debug=True)
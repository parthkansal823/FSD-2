from flask import Blueprint, request, jsonify

student_bp = Blueprint("students", __name__)

students = []
current_id = 1

# CREATE
@student_bp.route("/students", methods=["POST"])
def create_student():
    global current_id

    data = request.get_json()

    if not data or "name" not in data:
        return jsonify({"error": "Name required"}), 400

    student = {
        "id": current_id,
        "name": data["name"],
        "age": data.get("age")
    }

    students.append(student)
    current_id += 1

    return jsonify(student), 201


# READ ALL
@student_bp.route("/students", methods=["GET"])
def get_students():
    return jsonify(students)


# READ ONE
@student_bp.route("/students/<int:id>", methods=["GET"])
def get_student(id):
    for student in students:
        if student["id"] == id:
            return jsonify(student)

    return jsonify({"error": "Student not found"}), 404


# UPDATE
@student_bp.route("/students/<int:id>", methods=["PUT"])
def update_student(id):
    data = request.get_json()

    for student in students:
        if student["id"] == id:
            student["name"] = data.get("name", student["name"])
            student["age"] = data.get("age", student["age"])
            return jsonify(student)

    return jsonify({"error": "Student not found"}), 404


# DELETE
@student_bp.route("/students/<int:id>", methods=["DELETE"])
def delete_student(id):
    global studentst 

    for student in students:
        if student["id"] == id:
            students.remove(student)
            return jsonify({"message": "Deleted successfully"})

    return jsonify({"error": "Student not found"}), 404
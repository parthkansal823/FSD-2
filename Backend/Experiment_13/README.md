# 🧪 Experiment 13  
## Connect Backend with Database and Perform CRUD Operations with Validations  

## 📌 Objective
To develop a backend server using Flask, connect it with a database, and implement CRUD operations (Create, Read, Update, Delete) with proper validation and testing using Postman.


## Theory

### Flask Backend
Flask is a lightweight Python web framework used to build REST APIs. It allows defining routes (endpoints) that handle HTTP requests such as GET, POST, PUT, DELETE.

### Database Integration
SQLAlchemy ORM is used to connect Flask with a database (PostgreSQL on Render / SQLite locally). It maps Python classes to database tables.

### Model (Student Table)
- id → Primary Key  
- uid → Unique ID  
- name → Student Name  
- age → Student Age  

### Validation
Using Marshmallow:
- Name ≥ 2 characters  
- Age between 1–120  
- UID must be unique  

### CRUD Operations

| Operation | Method | Endpoint |
|----------|--------|----------|
| Create | POST | /students |
| Read All | GET | /students |
| Read One | GET | /students/<id> |
| Update | PUT | /students/<id> |
| Delete | DELETE | /students/<id> |



## API URL
https://two3bis70035-experiment-13.onrender.com


## 📸 Screenshots (Ordered)

### 1. Server Running
![Server](./screenshots/1.png)

### 2. POST Request (Create Student)
![POST](./screenshots/2.png)

### 3. Duplicate UID Validation
![Validation](./screenshots/2a.png)

### 4. Database After Insert
![DB Insert](./screenshots/2D.png)

### 5. GET All Students
![GET All](./screenshots/3.png)

### 6. GET Single Student
![GET One](./screenshots/4.png)

### 7. PUT Request (Update Student)
![PUT](./screenshots/5.png)

### 8. Database After Update
![DB Update](./screenshots/5D.png)

### 9. DELETE Request
![DELETE](./screenshots/6.png)

### 10. Database After Delete
![DB Delete](./screenshots/1D.png)

---

## 📂 Project Structure
FSD_2_Backend/
│── app.py
│── requirements.txt
│── Procfile
│── README.md
│── screenshots/

---

## ⚙️ Features
✔ CRUD APIs  
✔ Database Integration  
✔ Validation using Marshmallow  
✔ Error Handling  
✔ Pagination  
✔ Deployment  

---

## 🎯 Learning Outcomes
- Built REST APIs using Flask  
- Connected backend with database  
- Performed CRUD operations  
- Implemented validations  
- Tested APIs using Postman  
- Deployed backend on Render  

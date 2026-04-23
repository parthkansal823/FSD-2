# Experiment No. 10: Implement Role-Based Authorization (RBAC)

## Aim
To implement Role-Based Authorization (RBAC) in a web application using Flask (backend) and React (frontend), where access to resources is controlled based on user roles.

---

## Objective
- To understand the concept of RBAC  
- To assign roles to users  
- To restrict access based on roles  
- To implement authorization logic in backend APIs  
- To integrate frontend with backend  

---

## Tools and Technologies Used
- Python (Flask)  
- React.js (Vite)  
- Axios  
- Render (Backend Deployment)  
- Netlify (Frontend Deployment)  

## Project Structure
```
Experiment_10/
│
├── backend/
│ ├── app.py
│ └── requirements.txt
│
└── frontend/
│ └── app.jsx
├── src/
└── package.json
```


## Procedure

### Step 1: Backend Setup (Flask)

1. Created a Flask application.  
2. Defined users with roles:
   - admin → full access  
   - user → limited access  
3. Created a role-permission mapping:
   - admin → read, write, delete  
   - user → read  
4. Implemented login API (`/login`).  
5. Created protected routes:
   - `/read`  
   - `/write`  
   - `/delete`  
6. Implemented role-based authorization using request headers.  
7. Enabled CORS for frontend communication.  

### Step 2: Frontend Setup (React)

1. Created a React application using Vite.  
2. Installed Axios for API communication.  
3. Created login form for username and password.  
4. Stored user role after successful login.  
5. Created buttons to call APIs:
   - Read  
   - Write  
   - Delete  
6. Sent role in request headers.  
7. Displayed API responses dynamically.  


### Step 3: Integration

1. Connected React frontend with Flask backend using API calls.  
2. Used deployed backend URL:
   https://two3bis70035-experiment-10.onrender.com  
3. Verified role-based access:
   - Admin can access all endpoints  
   - User can access only read endpoint  

### Step 4: Deployment

- Backend deployed on Render  
- Frontend deployed on Netlify  

Frontend URL: https://23bis70035experiment10.netlify.app/

## RBAC Flow

User → Login → Role Assigned → API Request → Backend Validates Role → Access Granted or Denied

## Output

| Role  | Read | Write | Delete |
|-------|------|-------|--------|
| Admin | Yes  | Yes   | Yes    |
| User  | Yes  | No    | No     |


## Learning Outcome
- Understood the concept of Role-Based Access Control  
- Learned how to implement authorization in backend APIs  
- Gained experience in integrating frontend and backend  
- Learned deployment using cloud platforms  
- Understood limitations and improvements of basic RBAC systems  
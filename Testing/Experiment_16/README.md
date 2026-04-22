## Deployment (CI/CD using GitHub Actions)

This project uses **GitHub Actions** for automated testing and continuous integration of both backend and frontend.

### Workflow Overview

- Trigger: On every `push`
- Workflow file: `.github/workflows/ci.yml`
- Jobs:
  - Backend Tests (Python)
  - Frontend Tests (Node.js + Vitest)

---

### Successful CI Run

![CI Summary](./Screenshots/1.png)

---

### Backend Test Execution

![Backend Test](./Screenshots/2.png)

**Steps:**
- Setup Python environment
- Install dependencies
- Run backend tests
- All tests passed successfully ✅

---

### Frontend Test Execution

![Frontend Test](./Screenshots/3.png)

**Steps:**
- Setup Node.js
- Install dependencies
- Run frontend tests using Vitest
- All tests passed successfully ✅

---

### Test Report

- Total Test Files: 1
- Status: Passed
- Execution Time: ~20 seconds

---

## Learning Outcome
- Understood the concept and importance of Continuous Integration (CI) in software development.
- Learned how to configure and use GitHub Actions for automating workflows.
- Gained experience in running automated backend and frontend tests.
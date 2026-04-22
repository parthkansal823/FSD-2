import pytest
from app import app, db

## Dependencies:
# pytest: A testing framework for Python.
# pytest-cov: A plugin for pytest that provides coverage reports.

## To run the tests, use the following commands in the terminal:
# pytest -v                                              -- run all test_ files
# pytest test_app.py                                     -- run this file only
# pytest test_app.py::test_home                         -- run a single test

# To check code coverage:
# pytest --cov=app --cov-report=term-missing --cov-report=html


@pytest.fixture
def client():
    app.testing = True
    with app.app_context():
        db.create_all()
        yield app.test_client()
        db.drop_all()


def test_home(client):
    res = client.get('/')
    assert res.status_code == 200


def test_register(client):
    res = client.post('/register', json={
        "email": "test@test.com",
        "password": "123"
    })
    assert res.status_code == 200
    assert res.json["message"] == "Registered"


def test_login_valid(client):
    # Register first so the user exists
    client.post('/register', json={"email": "login@test.com", "password": "abc"})

    res = client.post('/login', json={"email": "login@test.com", "password": "abc"})
    assert res.status_code == 200
    assert res.json["message"] == "Login successful"


def test_login_invalid(client):
    res = client.post('/login', json={"email": "nobody@test.com", "password": "wrong"})
    assert res.status_code == 401
    assert res.json["message"] == "Invalid"


# Test Cases contain -- Input, Expected Output, Actual Output

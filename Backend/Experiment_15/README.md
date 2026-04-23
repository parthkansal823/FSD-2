# Experiment 15: Analyze Backend Performance and Scalability

## Aim
To evaluate and analyze the performance and scalability of a backend system by measuring response time, load handling capacity, and identifying bottlenecks using testing and monitoring tools.


## Tools Used

* Python (Flask Backend)
* Postman (API Testing)
* Locust (Load Testing)
* Gunicorn (Production Server)
* PostgreSQL (Database)
* htop (System Monitoring)

## Procedure

### Step 1: Run Backend Server

Start the Flask application:

```bash
python app.py
```

Or using Gunicorn (for production testing):

```bash
gunicorn app:app
```

### Step 2: Test API Response Time
* Open Postman
* Send GET request to:

```
https://your-api-url.com/
```

* Observe response time (in ms)
### Step 3: Perform Load Testing using Locust

Install Locust:
```bash
pip install locust
```

Create a file `locustfile.py`:
```python
from locust import HttpUser, task

class MyUser(HttpUser):

    @task
    def home(self):
        self.client.get("/")
```

Run Locust:
```bash
locust
```

Open in browser:
```
http://localhost:8089
```

* Set number of users
* Set spawn rate
* Start test

### Step 4: Analyze Performance Metrics

Observe:

* Response Time (ms)
* Requests per Second (RPS)
* Number of Concurrent Users
* Failure/Error Rate

### Step 5: Monitor System Resources
Use system monitoring:

```bash
htop
```

Check:

* CPU Usage
* Memory Usage
* Running Processes

### Step 6: Database Performance Analysis
Run query analysis:

```sql
EXPLAIN ANALYZE SELECT * FROM users;
```
Identify slow queries and optimize using indexing.

### Step 7: Identify Bottlenecks
Common bottlenecks:

* Slow database queries
* High memory usage
* Blocking synchronous code
* Network latency

### Step 8: Apply Optimization Techniques

* Use Gunicorn for better concurrency
* Add caching (Redis)
* Optimize database queries
* Scale using multiple instances (Load Balancing)

## Results
* Average Response Time: 100–300 ms
* Maximum Concurrent Users Handled: 100+
* Throughput: 200–500 requests/sec
* Error Rate: Less than 2%

## Screenshots
* Postman API response time
* Locust dashboard (users & RPS)
* htop system monitoring
* Terminal output during testing

## Learning Outcomes
1. Learned how to measure backend performance using real tools
2. Understood load testing and stress testing concepts
3. Gained knowledge of identifying system bottlenecks
4. Learned techniques to improve backend scalability
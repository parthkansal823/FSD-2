from flask import Flask, jsonify
import requests

app = Flask(__name__)

customers = {
    101: {"id": 101, "name": "Customer-1", "email": "customer-1@example.com"},
    102: {"id": 102, "name": "Customer-2", "email": "customer-2@example.com"}
}


@app.route("/customers/<int:user_id>/orders")
def get_account_details(user_id):
    customer = customers.get(user_id)

    if not customer:
        return jsonify({"error": "Customer not found"}), 404

    # Call Order Service
    try:
        response = requests.get(
            f"https://two3bis70035-experiment-11-order.onrender.com/orders/user/{user_id}",
            timeout=3
        )

        if response.status_code == 200:
            orders = response.json()
        else:
            orders = []
    except requests.exceptions.RequestException:
        orders = []
    
    account_data = {
        "customer": customer,
        "orders": orders
    }

    return jsonify(account_data)


@app.route("/")
def home():
    return jsonify({"service": "Customer Service Running"})


if __name__ == "__main__":
    app.run(port=5001, debug=True)
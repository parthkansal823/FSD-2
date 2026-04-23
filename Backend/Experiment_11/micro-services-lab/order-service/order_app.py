from flask import Flask, jsonify, request

app = Flask(__name__)

orders = [
    {
        "id": 1,
        "user_id": 101,
        "order_date": "2026-02-20",
        "order_amount": 2500,
        "order_status": "Shipped",
        "items": [
            {"name": "Laptop", "quantity": 1, "price": 2000},
            {"name": "Mouse", "quantity": 2, "price": 250}
        ]
    },
    {
        "id": 2,
        "user_id": 101,
        "order_date": "2026-02-22",
        "order_amount": 1200,
        "order_status": "Processing",
        "items": [
            {"name": "Keyboard", "quantity": 1, "price": 1200}
        ]
    },
    {
        "id": 3,
        "user_id": 102,
        "order_date": "2026-02-18",
        "order_amount": 800,
        "order_status": "Delivered",
        "items": [
            {"name": "Headphones", "quantity": 1, "price": 800}
        ]
    }
]


@app.route("/orders/user/<int:user_id>")
def get_orders_by_user(user_id):
    user_orders = [o for o in orders if o["user_id"] == user_id]
    return jsonify(user_orders)


@app.route("/orders/<int:order_id>/status", methods=["PUT"])
def update_order_status(order_id):
    data = request.get_json()

    new_status = data.get("order_status")

    if not new_status:
        return jsonify({"error": "order_status is required"}), 400

    # Find order
    for order in orders:
        if order["id"] == order_id:
            order["order_status"] = new_status
            return jsonify({
                "message": "Order status updated successfully",
                "order": order
            })

    return jsonify({"error": "Order not found"}), 404

@app.route("/")
def home():
    return jsonify({"service": "Order Service Running"})


if __name__ == "__main__":
    app.run(port=5002, debug=True)
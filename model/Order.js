const mongoose = require("mongoose")

const OrderSchema = mongoose.Schema({
    customer_id: String,
    payment_id: String,
    paymentStatus: String,
    status: String,
    items: [
        {
            productid: String,
            quantity: Number,
            Price: Number,
            discount: Number,
            tax: Number,
            totalPrice: Number
        }
    ],
})

const Order = mongoose.model('Order',OrderSchema);
module.exports = Order;

import mongoose from 'mongoose';

const OrderSchema = mongoose.Schema({
    customer_id: String,
    payment_id: String,
    paymentStatus: String,
    status: String,
    items: [
        {
            cartid: String   
        }    
    ],
})

const Order = mongoose.model('orders',OrderSchema);
export default Order;

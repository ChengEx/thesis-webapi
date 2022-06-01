import mongoose from 'mongoose';

const CartSchema = mongoose.Schema({
    productid: {
        type: mongoose.Types.ObjectId,
        ref: "inventories"
    },
    size: String,
    quantity: Number,
    totalprice: Number,
    customerid: String,
})

const Cart = mongoose.model('carts',CartSchema);
export default Cart;
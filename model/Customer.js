import mongoose from 'mongoose';

const CustomerSchema = mongoose.Schema({
    email: String,
    password: String,
    firstName: String,
    lastName: String,
    phone:Number,
    address:{
        city:String,
        street:String
    },
    shippingAddress:{
        city:String,
        street:String
    },
    // cartItem:{
    //     type: mongoose.Types.ObjectId,
    //     ref: "carts"
    // }
});

const Customer = mongoose.model('customers',CustomerSchema);

export default Customer;
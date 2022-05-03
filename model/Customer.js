const mongoose = require("mongoose")

const CustomerSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    phone:Number,
    address:{
        city:String,
        street:String
    },
    shippingAddress:{
        city:String,
        street:String
    }
});

const PostMessage = mongoose.model('customers',CustomerSchema);

export default PostMessage;
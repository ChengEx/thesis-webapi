const mongoose = require("mongoose")

const CustomerSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    address:{
        country:String,
        city:String,
        street:String
    },
    shippingAddress:{
        city:String,
        street:String
    }
});

const PostMessage = mongoose.model('Customer',CustomerSchema);

export default PostMessage;
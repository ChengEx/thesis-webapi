import mongoose from "mongoose"

const InventorySchema = new mongoose.Schema({
    name: String,
    identity: String,
    categories:[String],
    productDetail:{
        price:{
            base: Number,
            discount: Number
        },
        quantity: Number,
        options:{
            allsize:[
                {
                    size:String,
                    sizequantity:Number
                }   
            ],
            image:String,
            otherimage:[String]
        }
    }
    
});

const Inventory = mongoose.model('inventories',InventorySchema);

export default Inventory;
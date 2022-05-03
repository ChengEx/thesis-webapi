import mongoose from "mongoose"

const InventorySchema = new mongoose.Schema({
    name: String,
    categories:[String],
    productDetail:[
        {
            productid: String,
            price:{
                base:{Number},
                discount:{Number}
            },
            quantity: Number,
            options:{
                size:{
                    S: Number,
                    M: Number,
                    L: Number
                },
                image:String
            }
        }
    ]
});

const Inventory = mongoose.model('inventories',InventorySchema);

export default Inventory;
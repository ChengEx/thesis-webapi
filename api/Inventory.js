import mongoose  from 'mongoose';
import inventoryModel  from '../model/Inventory.js';


export const getInventories = async(req, res)=> {
    try{
        const InventoryData = await inventoryModel.find();
        // console.log(InventoryData);
        res.status(200).json(InventoryData);
    }catch(err){
        res.status(404).json({message: err.message });
    }
}
export const getInventoryById = async(req, res) => {
    try{
        const { id: _id } = req.params
        const InventoryDataById = await inventoryModel.findById(_id);
        //console.log(InventoryDataById);
        res.status(200).json(InventoryDataById);
    }catch(error){
        res.status(404).json({message: err.message });
    }
}


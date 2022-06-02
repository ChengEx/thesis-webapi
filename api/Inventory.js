import mongoose  from 'mongoose';
import inventoryModel  from '../model/Inventory.js';


export const getInventories = async(req, res)=> {
    try{
        const InventoryData = await inventoryModel.find();
        //console.log(InventoryData);
        const returnData = InventoryData.map(item => {
            return {
              _id: item._id,
              name: item.name,
              categories: item.categories,
              image: item.productDetail.options.image,
              price: item.productDetail.price.base
            };
        });
          //console.log(returnData);
        res.status(200).json(returnData);
    }catch(err){
        res.status(404).json({message: err.message });
    }
}

export const getInventoryById = async(req, res) => {
    try{
        //console.log(req);
        const { id: _id } = req.params
        const InventoryDataById = await inventoryModel.findById(_id);
        // if(InventoryData){
        //     const returnData = InventoryData.map(item => {
        //         return {
        //         _id: item._id,
        //         name: item.name,
        //         categories: item.categories,
        //         image: item.productDetail.options.image,
        //         price: item.productDetail.price.base
        //         };
        //     });
        //     res.status(200).json(returnData);
        // }
        //console.log(InventoryDataById);
        res.status(200).json(InventoryDataById);
    }catch(err){
        res.status(404).json({message: err.message });
    }
}

export const addInventories = async(req, res) => {
    try{
        const addInventoriesData = req.body;
        const addData = await inventoryModel.create({...addInventoriesData, categories: addInventoriesData.categories.split(",")});
        res.status(201).json(addData);
    }catch(err){
        res.status(404).json({message: err.message });
    }
}

export const getInventoriesByCategories = async(req, res)=> { 
    //console.log(req.params);
    const { category: identity, type: type } = req.params;

    if(type==='default'){
        // inventoryModel.find({'identity': identity}, function (err, docs) { 
        //     if (err){ 
        //         console.log(err); 
        //     }else{ 
        //         const returnData = docs.map(item => {
        //             return {
        //               _id: item._id,
        //               name: item.name,
        //               categories: item.categories,
        //               image: item.productDetail.options.image,
        //               price: item.productDetail.price.base
        //             };
        //           });
        //         res.status(201).json(returnData);
        //     } 
        // }); 
        await inventoryModel.find({'identity': identity}).then((docs) =>{
            const returnData = docs.map(item => {
                return {
                  _id: item._id,
                  name: item.name,
                  categories: item.categories,
                  image: item.productDetail.options.image,
                  price: item.productDetail.price.base
                };
              });
            res.status(201).json(returnData);
        });
    }else{
        // inventoryModel.find({'identity': identity,'categories': [type]}, function (err, docs) { 
        //     if (err){ 
        //         console.log(err); 
        //     }else{ 
        //         console.log(docs);
        //         const returnData = docs.map(item => {
        //             return {
        //               _id: item._id,
        //               name: item.name,
        //               categories: item.categories,
        //               image: item.productDetail.options.image,
        //               price: item.productDetail.price.base
        //             };
        //           });
        //         res.status(201).json(returnData);
        //     } 
        // }); 
        await inventoryModel.find({'identity': identity,'categories': [type]}).then((docs)=> {
            const returnData = docs.map(item => {
                return {
                  _id: item._id,
                  name: item.name,
                  categories: item.categories,
                  image: item.productDetail.options.image,
                  price: item.productDetail.price.base
                };
              });
            res.status(201).json(returnData);
        })
   }
    
}

//export const getNewestInventories = async(req, res)=> {}





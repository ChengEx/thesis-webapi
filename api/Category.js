import CategoryModel from "../model/Category.js";

export const getCategories = async(req, res) => {
    try{
        const Category = await CategoryModel.find();
        res.status(200).json(Category);
    }catch(err){
        res.status(400).json({message: err.message });
    }
    
    
}
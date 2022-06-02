import CategoryModel from "../model/Category.js";

export const getCategories = async(req, res) => {
    try{
        const CategoriesData = await CategoryModel.find();

        const set = new Set();
        const uniqueresult = CategoriesData.filter(item => !set.has(item.identity) ? set.add(item.identity) : false);
        const arr = uniqueresult.map(item => {
            return item.identity;
        })
        //console.log(arr); 
        
        var returnCategory = new Object();
        for(var i=0; i<arr.length; i++) {
            const newset = new Set();
            var categorySchema = arr[i];
            CategoriesData.filter(item => categorySchema===item.identity ? newset.add(item) : false);
            returnCategory[`${categorySchema}`] = Array.from(newset);
        }
        const returnData = {returnCategory};
        res.status(201).json(returnData);
        
    }catch(err){
        res.status(404).json({message: err.message });
    }
}

export const getCategoriseByIdentity = async(req, res) => {
    try {
        //console.log(req.params);
        const { identity: identity } = req.params;
        await CategoryModel.find({'identity':identity}).then((docs)=>{
            //console.log(docs);
            res.status(201).json(docs);
        })
    }catch(err){
        res.status(404).json({message: err.message});
    }
}
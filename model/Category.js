import mongoose from "mongoose";

const CategorySchema = mongoose.Schema({
    identity: String,
    categoryname: String,
    categorynameEN:String,
    subcategory: [
        {
            name: String,
            nameEN: String
        }
    ],
})


const Category = mongoose.model('categories',CategorySchema);

export default Category;
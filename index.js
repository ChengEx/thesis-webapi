import express from 'express';
import bodyParser  from 'body-parser';
import mongoose from'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'
import InventoryRoute from'./api_routes/Inventory.js'
import CustomerRoute from './api_routes/Customer.js'
import CategoryRoute from './api_routes/Category.js'
import CartRoute from './api_routes/Cart.js'

const app = express();
dotenv.config();


app.use(bodyParser.json({limit:"30mb",extended: true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended: true}));
app.use(cors());
app.use('/Inventory', InventoryRoute);
app.use('/Customer', CustomerRoute);
app.use('/Category', CategoryRoute);
app.use('/Cart', CartRoute);
// app.use('/user',userRoutes);


const PORT = process.env.PORT || 4000;

mongoose.connect("mongodb+srv://denoriaaa:SQ3No7zNIIwTmSBI@cluster0.hnuu7.mongodb.net/ThesisDatabase?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=> app.listen(PORT,()=>console.log(`Server runing on port: ${PORT}`)))
    .catch((error)=>console.log(error.message));


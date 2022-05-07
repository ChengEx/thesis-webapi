import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import CustomerModel from '../model/Customer.js'

const secret = 'test';

export const signin = async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body)
    try {
        const oldUser = await CustomerModel.findOne({ email });

        if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });

        const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

        if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

        const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, { expiresIn: "1h" });

        let newList = oldUser.toObject();
        newList.token = token;
        //console.log("hello",newList);
        if(typeof newList == "object"){
            console.log("Object");
        }
	
        //res.status(200).json({ result: oldUser, token });
        //res.header('auth-token',token).send(token);
        res.status(200).json(newList);
    } catch (err) {
        res.status(500).json({ message: err });
    }
};

export const signup = async (req, res) => {
    //console.log(req.body);
    const { email, password, firstName, lastName, phone, address } = req.body;

    try {
        const oldUser = await CustomerModel.findOne({ email });
        //console.log("old",oldUser);
        if (oldUser) return res.status(400).json({ message: "User already exists" });

        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await CustomerModel.create({ email, password: hashedPassword, firstName, lastName, phone, address });
        //console.log(result)

        const token = jwt.sign( { email: result.email, id: result._id }, secret, { expiresIn: "1h" } );

        res.status(201).json({ result, token });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
        
        console.log(error);
    }
};
import CartModel from '../model/Cart.js';

export const getCart = async(req,res)=> {
    try{
        const { id: customerid } = req.params
        //console.log("req",customerid);

        await CartModel.find({'customerid': customerid})
            .populate('productid')
            .then(docs=>{
                //console.log("docs", docs);
                res.status(201).json(docs);
        });
    }catch(err){
        res.status(404).json({message: err.message });
    }
} 

export const addCart = async(req, res) => {
    try{
        const addCartData = req.body;
        const addCart = await CartModel.create(addCartData);
        res.status(201).json(addCart);
    }catch(err){
        res.status(404).json({message: err.message });
    }
}

export const addCartQuantity = async(req, res) => {
    try {
        const { id: cartID } = req.params;
        var customerid = "";
        var beforeQuantity = 0;
        var unitprice = 0;

        //update cart's quantity
        await CartModel.findByIdAndUpdate(cartID,
            {$inc:{'quantity': 1}},{new: true}).then(docs=>{
                customerid = docs.customerid;
                beforeQuantity = docs.quantity-1;
                unitprice = docs.totalprice / beforeQuantity;
            }
        );
        //update cart's totalprice
        await CartModel.findByIdAndUpdate(cartID,
            {$inc:{'totalprice': unitprice}},{new: true}).then(docs=>{
                console.log(docs);
            }
        );
        await CartModel.find({'customerid': customerid})
            .populate('productid')
            .then(docs=>{
                res.status(201).json(docs);
        });
    }catch(err){
        res.status(404).json({message: err.message });
    }
}

export const minusCartQuantity = async(req, res) => {
    try {
        const { id: cartID } = req.params;
        var customerid = "";
        var beforeQuantity = 0;
        var unitprice = 0;
        await CartModel.findByIdAndUpdate(cartID,
            {$inc:{'quantity': -1}},{new: true}).then(docs=>{
                customerid = docs.customerid;
                beforeQuantity = docs.quantity+1;
                unitprice = docs.totalprice / beforeQuantity;
            }
        );
        await CartModel.findByIdAndUpdate(cartID,
            {$inc:{'totalprice': -unitprice}},{new: true}).then(docs=>{
                console.log(docs);
            }
        );
        await CartModel.find({'customerid': customerid})
            .populate('productid')
            .then(docs=>{
                res.status(201).json(docs);
        });
    }catch(err){
        res.status(404).json({message: err.message });
    }
}

export const deleteCart = async(req, res) => {
    try{
        const { id: cartID } = req.params;
        var customerid = "";
        await CartModel.findByIdAndDelete(cartID,{new: true}).then(docs=> {
            customerid = docs.customerid;
            console.log(docs);
        })
        await CartModel.find({'customerid':customerid})
            .populate('productid')
            .then(docs=>{
                res.status(201).json(docs);
            })
    }catch(err){
        res.status(404).json({message: err.message});
    }
}
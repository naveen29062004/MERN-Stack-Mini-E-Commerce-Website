const ordermodel = require("../model/order.model");

async function addorder(req,res,next)
{
  console.log(req.body);
    const cartitems=req.body;
    const amount=Number(cartitems.reduce((prev,curr)=>{
     return prev+(curr.val.price*curr.qty)
    },0)).toFixed(2);
    const status="pending";
    const ord=await ordermodel.create({cartitems,amount,status})


    res.json({
        message:"orderplaced",
        ord
       
    })

}
module.exports=addorder;
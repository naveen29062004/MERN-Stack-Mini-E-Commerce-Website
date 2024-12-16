const productmodel =require("../model/product.model");

 async function   getproduct(req,res,next)
{
    try{
        const ser=req.query.keyword?{name:{$regex:req.query.keyword,$options:'i'}}:{}
     const products=await productmodel.find(ser);
    res.json({
       success:true,
        products
    })
}catch(error)
{
    res.json({
        success:false,
        message:error.message
    })
}

}
async function  getsingleproduct(req,res,next)
{
    try{
    const singleproduct=await productmodel.findById(req.params.id);
    res.json({
        success:true,
        singleproduct
    })
}catch(error)
{
    res.status(404).json({
        success:false,
        message:error.message
    })
}
}
module.exports={getproduct,getsingleproduct};
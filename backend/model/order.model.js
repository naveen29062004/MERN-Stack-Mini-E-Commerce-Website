const mongoose=require("mongoose");
const orderschema=mongoose.Schema({
    cartitems:Array,
    amount:String,
    status:String,
    createdat:Date

})
const ordermodel=mongoose.model("orders",orderschema);
module.exports=ordermodel;
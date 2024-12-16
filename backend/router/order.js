const express=require("express");
const router=express.Router();
const addorder=require("../controle/order");
router.route("/order").post(addorder);
module.exports=router;
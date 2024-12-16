const express=require("express");
const router=express.Router();
const {getproduct,getsingleproduct}=require("../controle/product");
router.route("/products").get(getproduct);

router.route("/product/:id").get(getsingleproduct);
module.exports=router;
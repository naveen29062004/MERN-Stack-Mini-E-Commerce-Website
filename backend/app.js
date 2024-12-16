const express=require("express");
const app=express();
const path=require("path");
const dotenv=require("dotenv");
const routproduct=require("./router/product")
const order=require("./router/order")
const cors=require("cors")
const getconnection=require("./environment/dbconnection");
dotenv.config({path:path.join(__dirname,"environment","variable.env")})

getconnection();
 app.use(express.json());
 app.use(cors())
 app.use('/api/v1/',routproduct);
 app.use('/api/v1/',order);

 
app.listen(process.env.PORT,()=>{

   console.log(`WELCOME TO THE ${process.env.NODE_ENV}`);
    
}) 
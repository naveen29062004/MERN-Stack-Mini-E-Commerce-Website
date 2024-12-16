const mongoose=require("mongoose");
function getconnection()
{
    mongoose.connect(process.env.database_connect).then((con)=>{
        console.log("successfully connected"+con.connection.host);
    })}
    module.exports=getconnection;
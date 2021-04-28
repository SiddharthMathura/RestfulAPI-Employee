const mongoose = require("mongoose");

//creating the database connection
mongoose.connect("mongodb://localhost:27017/employees_api",{
    useCreateIndex:true, 
    useUnifiedTopology:true, 
    useNewUrlParser:true,
    useFindAndModify:false})
.then(()=>{
    console.log("connection successfull.")
}).catch((err)=> console.log(err));
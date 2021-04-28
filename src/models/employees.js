const mongoose = require("mongoose");
const validator = require("validator");


const empSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        unique:[true,"The Email is taken."],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email.");
            }
        }
    },
    phone:{
        type:Number,
        min:10,
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:true,
    }
})

//creating a collection
const Employee = new mongoose.model("Employee",empSchema);

module.exports = Employee;

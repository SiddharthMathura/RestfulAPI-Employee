const express = require("express");
const router = new express.Router();
const Employee = require("../models/employees");

//creating (POST) new employees
router.post("/employees", async(req,res)=> {

    try{
        const user = new Employee(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
    }catch(err){
        res.status(400).send(err);
    }

})


//reading (GET) the employees
router.get("/employees", async(req,res)=> {
    try{
        const employeesData = await Employee.find();
        res.status(201).send(employeesData);
    }catch(err){
        res.status(400).send(err);
    }
})

//reading (GET) single/individual employee data
router.get("/employees/:id", async(req,res)=> {
    try{
        const _id = req.params.id; 
        const employeeData = await Employee.findById({_id});
        if(!employeeData){
            return res.status(400).send()
        }else{
            res.send(employeeData);
        }
    }catch(err){
        res.status(400).send(err);
    }
})

//updating (PATCH) the employees data
router.patch("/employees/:id", async(req,res)=>{
    try{
        const _id = req.params.id;
        const updateEmployees = await Employee.findByIdAndUpdate(_id, req.body,{ new:true });
        if(!updateEmployees){
            return res.status(400).send();
        }else{
            res.send(updateEmployees);
        }
    }catch(err){
        res.status(400).send(err);
    }
})

//deleting (DELETE) the employee's data
router.delete("/employees/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        const deleteUser = await Employee.findByIdAndDelete(_id, req.body);
        
        if(!deleteUser){
            return res.status(400).send();
        }else{
            res.send(deleteUser);
        }
    }catch(err){
        res.status(400).send(err);
    }
})

module.exports = router;
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
require("./db/conn");
const Employee = require("./models/employees");
const employeeRouter = require("./routers/employeedata");


app.use(express.json());
app.use(employeeRouter);


app.listen(port, ()=> {
    console.log(`connected to ${port} successfully.`);
});




const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const db="mongodb+srv://bibekdas7932:Bibek%402204@cluster0.ti6kvng.mongodb.net/DispensaryManagementSystem?retryWrites=true&w=majority&appName=Cluster0"
const app=express();
app.use(cors())
app.use(express.json())
mongoose.connect(db,{})
.then(()=>{console.log("Database Connected")})
.catch((err)=>{console.log(err)})
const doctorsScema = require('./model/dctrModel.js')

// app.post('/addDoctor',async(req,res)=>{
//     try {
//         console.log(req.body)
//         const data = new doctorsScema(req.body);
//         await data.save()
//         res.send({
//             message:"added"
//         })
//     } catch (error) {
//         console.log("Error" + error)
//     }

// })
const userRoute = require("./route/userRoute.js")
const doctorRoute = require("./route/doctorRoute.js")
app.use("/user",userRoute)
app.use("/doctor",doctorRoute)

app.listen(5050,()=>{
    console.log("Server Started");
})
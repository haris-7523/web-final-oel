const express = require('express');
const mongoose= require('mongoose');
const cors= require('cors');
const app= express()

const CarModel= require("./models/Car");

app.use(express.json());
app.use(cors());
mongoose.connect('mongodb+srv://haris:haris123@cluster0.krlfb.mongodb.net/?retryWrites=true&w=majority',{
    useNewURLParser:true,
});

app.post("/insert",async (req, res)=> {
    const carName=req.body.carName;
    const carModel=req.body.carModel;

    
    const car= new CarModel({ carName:carName, carModel:carModel});

    try{
        await car.save();
        res.send("inserted data");
    }catch(err){
        console.log(err);
    }
})


app.get("/read",async (req, res)=> {
    CarModel.find({},(err,result)=>{
        if(err){
            res.send(err);
         }
         res.send(result);
        
    })
})


app.put("/update",async (req, res)=> {
    const newCarName=req.body.newCarName;
    const id=req.body.id;

    try{
        await CarModel.findById(id,(err,updatedCar)=>{
            updatedCar.carName= newCarName;
            updatedCar.save();
            res.send("update");
        })
    }catch(err){
        console.log(err);
    }
})



app.delete("/delete/:id",async (req, res)=> {
   const id= req.params.id;
   await CarModel.findByIdAndRemove(id).exec();
   res.send("deleted");
})




app.listen(3001, () => {
    console.log("Server running");
})
const mongoose= require('mongoose');

const CarSchema= new mongoose.Schema({
    carName:{
        type:String,
        required: true,
    },
    carModel:{
        type:Number,
        required:true,
    }
});

const Car = mongoose.model("Car",CarSchema)
module.exports=Car;
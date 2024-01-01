import mongoose from "mongoose";

const connectMongoDb= async ()=>{
    try{
        await mongoose.connect("mongodb://0.0.0.0:27017/projectdb3");
        console.log("Success");
    }catch(error){
        console.log("eeeee",error);
    }
}

export default connectMongoDb;
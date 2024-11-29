const mongoose=require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/dataAssoci');

const userSchema=mongoose.Schema({
    name:String,
    email:String,
    age:Number,
});

const userModel=mongoose.model("user",userSchema);

 async function userS(){

  await  userModel.create({
    name:"priya",
    email:"p@123",
    age:22,
    });
    console.log("created the user");
}
userS();
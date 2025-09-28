import express from "express"
import { user } from "./db.js";
const app=express()
app.use(express.json());
const PORT=3000;

app.get("/",(req,res)=>{
    res.send("Reacp the Docker  to the Networking section")
})
app.post("/signup",async(req,res)=>{
    const {email ,password,name}=req.body
      try{
          const isPresent=await user.findOne({email});
          if(isPresent){
              return res.status(411).json({
                  message:"user already exist !",
                  status:false
                })
            }
             const account =await  user.create({
                email,
                password,
                name
             })
             
            return  res.status(200).json({
                status:true,
                message:"user login !",
                account:account
                
            })
        }catch(error){
      console.log("Error at login",error)
        }
})

app.get("/users",async(req,res)=>{
     try{
   const alluser=await user.find();
    res.status(200).send(alluser)
     }catch(error){
        console.log(error)
     }
})
app.listen(PORT,()=>{
    console.log("Server is running at the PORT",PORT)
})
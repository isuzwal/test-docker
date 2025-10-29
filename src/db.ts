
import mongoose, {Schema ,model} from "mongoose";

 import dotenv from "dotenv"

dotenv.config();
const mongoUrl:string=process.env.DBURL || "";
 


mongoose.connect(mongoUrl)
.then(()=>console.log("Database is connected "))
.catch((error:any)=>console.log('Error at conenction ',error))


const  UserSheam:Schema =new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},

})
export const user=model('User',UserSheam)
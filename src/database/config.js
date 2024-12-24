import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({ path: './src/.env' });

const Connection = async () =>{
    try {
        // console.log("mongooseuri:" +process.env.MONGODB_URI);
      mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser: true});
      console.log("Database connected successfully");
    }catch (error){
        console.log(error)
    }
}

export default Connection;
import User from '@/models/user';
import bcryptjs from 'bcryptjs';
import Connection from '@/database/config'

Connection();

export const POST = async (NextRequest)=>{
    try{
    //   debugger;
        const body = await NextRequest.json();

       const {name, username, password } = body;

       if(!name || !username || !password){
        return new Respone("name , username and password is required",{status: 401})

       }

   const user =  await  User.findOne({username: username}); 
   if(user){
    return new Respone("username is already exist",{status: 401})
   }

   const salt = await bcryptjs.genSalt(12);
   const hashcodePass = await bcryptjs.hash(password, salt);

   const newUser = new User({
    name,
    username,
    password: hashcodePass
   })

   await newUser.save();

   return new Response("user saved succesfully",{status:200})

    }catch(error){
        console.log(error);
    }
}
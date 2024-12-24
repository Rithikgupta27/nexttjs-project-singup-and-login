import mongoose from 'mongoose';
// import { unique } from 'next/dist/build/utils';

const userSchema = new mongoose.Schema({
name: {
    type: String,
    required: true
},
username:{
    type: String,
    required: true,
    unique: true
},
password:{
    type:String,
    required:true
}

})

const User = mongoose.models.user || mongoose.model('user', userSchema);

export default User;
"use client"
import React, { useState } from 'react'
import Input from '../component/Input'
import Link from 'next/link'
import axios from 'axios'
import {useRouter} from 'next/navigation'

const page = () => {
    const defaultData= {username:"",password:""}
    const [data,setData] = useState(defaultData);
    const router = useRouter();
    const onValueChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value});
    }

    const onLogin=async(e)=>{
        e.preventDefault();

        if( !data.username || !data.password){
            alert("fill all mendotry field");
        }

        const user = await axios.post('api/user/login',data);

        setData(defaultData);
        if(response.status===200){
           router.push('/profile');
        }
        
    }
   return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
        <div  className='bg-white px-16 pt-8 pb-12 mb-4'>
         <h1 className='text-3xl mb-4 text-center font-bold'>Login</h1>
         <form >
           
             <Input
               label="Username"
               type="text"
               id="username"
               value={data.username}
               onChange={(e)=>onValueChange(e)}
             />
             <Input 
               label="password"
               type="password"
               id="password"
               value={data.password}
               onChange={(e)=>onValueChange(e)}
             />
             <button className='bg-blue-400 rounded-2xl px-24 py-2 text-white'
             onClick={(e)=>{onLogin(e)}}
             >
                Login
             </button>
             <p className='py-1'>If you don't have account? {""}
              <Link href='/register' className='text-blue-500 hover:underline'>Register</Link>
             </p>
         </form>
        </div>      
    </div>
  )
}

export default page

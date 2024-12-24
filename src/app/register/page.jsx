"use client"
import React, { useState } from 'react'
import Input from '../component/Input'
import Link from 'next/link'
import axios from 'axios'
import {useRouter,Router} from 'react'

const page = () => {
    const defaultData= {name:"",username:"",password:""}
    const [data,setData] = useState(defaultData);
    const onValueChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value});
    }

    const onRegister= async (e)=>{
        e.preventDefault();

        if(!data.name || !data.username || !data.password){
            alert("fill all mendotry field");
        }

        try {
            const response = await axios.post("api/user/register",data);
            setData(defaultData)
            if(response.status===200){
              Router.push('/login');
            }

        } catch (error) {
            console.log(error);
        }
    }
   return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
        <div  className='bg-white px-16 pt-8 pb-12 mb-4'>
         <h1 className='text-3xl mb-4 text-center font-bold'>Register</h1>
         <form >
             <Input 
               label="Name"
               type="text"
               id="name"
               value={data.name}
               onChange={(e)=>onValueChange(e)}
             />
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
             onClick={(e)=>{onRegister(e)}}
             >
                Submit
             </button>
             <p className='py-1'>Already have an account? {""}
              <Link href='/login' className='text-blue-500 hover:underline'>Login</Link>
             </p>
         </form>
        </div>      
    </div>
  )
}

export default page

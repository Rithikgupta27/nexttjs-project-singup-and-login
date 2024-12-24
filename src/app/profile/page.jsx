"use client"
import React, { useState } from 'react'
import Input from '../component/Input'
import Link from 'next/link'
const page = () => {
    // const defaultData= {name:"",username:"",password:""}
    // const [data,setData] = useState(defaultData);
    // const onValueChange=(e)=>{
    //     setData({...data,[e.target.name]:e.target.value});
    // }

    const onLogout=(e)=>{
        e.preventDefault();

      
    }
   return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
        <div  className='bg-white px-16 pt-8 pb-12 mb-4'>
         <h1 className='text-3xl mb-4 text-center font-bold'>Home Page</h1>
         <form >
             <p className='py-1'>
                Welcome to our home page
                 </p>
             <button className='bg-red-500 rounded-2xl px-24 py-2 text-white'
             onClick={(e)=>{onLogout(e)}}
             >
                Logout 
             </button>
             
         </form>
        </div>      
    </div>
  )
}

export default page

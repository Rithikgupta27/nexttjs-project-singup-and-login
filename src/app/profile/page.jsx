"use client"
// import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NextResponse } from 'next/server'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'


const page = () => {
    const router = useRouter();
    const [load,setLoad] = useState(true);
    useEffect(()=>{
        setLoad(false);
    },[]);
   
    
    const onLogout=async(e)=>{
        e.preventDefault();
      if(load) return;

       try{
        const response = await axios.get('api/user/logout');
           if(response.status===200 ){
            router.push('/login');
           }
       }catch(error){
         console.log("unable to logout ",error)
        //  return NextResponse.json({message: 'internal server error'},{status:500}) 
       }        
      
    }
   return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
        <div  className='bg-white px-16 pt-8 pb-12 mb-4'>
         <h1 className='text-3xl mb-4 text-center font-bold'>Home Page</h1>
        
             <p className='py-1'>
                Welcome to our home page
                 </p>
             <button className='bg-red-500 rounded-2xl px-24 py-2 text-white'
             onClick={(e)=>onLogout(e)}
             >
                Logout 
             </button>
             
        
        </div>      
    </div>
  )
}

export default page

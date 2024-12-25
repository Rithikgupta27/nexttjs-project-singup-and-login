"use client"
import React, { useState } from 'react'
import Input from '../component/Input'
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const page = () => {
  // Initialize state for form data
  const defaultData = { username: "", password: "" };
  const [data, setData] = useState(defaultData);
  const router = useRouter();

  // Handle input field changes
  const onValueChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const onLogin = async (e) => {
    e.preventDefault();

    // Validation for empty fields
    if (!data.username || !data.password) {
      alert("Fill all mandatory fields");
      return; // Prevent submission if fields are empty
    }

    try {
      // Send login request
      const response = await axios.post('api/user/login', data);

      // Check response status
      if (response.status === 200) {
        setData(defaultData); // Reset form data
        router.push('/profile'); // Redirect to profile page on success
      }
    } catch (error) {
      console.log(error);
      alert("Login failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className='bg-white px-16 pt-8 pb-12 mb-4'>
        <h1 className='text-3xl mb-4 text-center font-bold'>Login</h1>
        <form onSubmit={onLogin}>
          <Input
            label="Username"
            type="text"
            id="username"
            // name="username"  // Added 'name' attribute for proper handling
            value={data.username}
            onChange={onValueChange}
          />
          <Input
            label="Password"
            type="password"
            id="password"
            // name="password"  // Added 'name' attribute for proper handling
            value={data.password}
            onChange={onValueChange}
          />
          <button
            type="submit"
            className='bg-blue-400 rounded-2xl px-24 py-2 text-white'
          >
            Login
          </button>
          <p className='py-1'>
            If you don't have an account?{" "}
            <Link href='/register' className='text-blue-500 hover:underline'>
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default page;

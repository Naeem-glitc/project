"use client"
import React from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

const page = () => {
     const [username, setUsername] = useState('');
     const router = useRouter();      
           
             const handleChange = (e) => {
                setUsername(e.target.value);
             };
           
             const handleSubmit = (e) => {
               e.preventDefault();
               localStorage.setItem("name", JSON.stringify(username));
                router.push('/');
               };

  return (
    <>
        <div className='flex items-center justify-center h-screen '>
            <div className=' p-10 rounded-lg shadow-lg w-96 bg-gray-100'>
            <h1 className='text-3xl font-bold text-center mb-6'>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="username">User Name</label>
                <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' value={username}
              onChange={handleChange} type="text" id="username" placeholder='Enter your username' />
                </div>
                <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="password">Password</label>
                <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="password" id="password" placeholder='Enter your password' />
                </div>
               
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full' type="submit">Login</button>
            </form>
            </div>
        </div>
    </>
  )
}

export default page

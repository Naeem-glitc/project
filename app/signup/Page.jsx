"use client"
import React from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

const SignUp = () => {
        const [username, setUsername] = useState('');
        const router = useRouter();
      
        const handleChange = (e) => {
           setUsername(e.target.value);
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
          localStorage.setItem('name', JSON.stringify(username));
          console.log('Stored:', username);
          router.push('/');
        };
         
        useEffect(() => {
          const storedName = localStorage.getItem('name');
          if (storedName) {
            setUsername(JSON.parse(storedName));
          }
        }, []);
        

       



  return (
    <>
      <div className='flex items-center justify-center h-screen '>
        <div className=' p-10 rounded-lg shadow-lg w-96 bg-gray-100'>
          <h1 className='text-3xl font-bold text-center mb-6'>Sign Up</h1>
          <form onSubmit={handleSubmit}  className='space-y-4'>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="username">Username</label>
              <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'  required
              value={username}
              onChange={handleChange} type="text" id="username" placeholder='Enter your username' />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="email">Email</label>
              <input  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="email" id="email" placeholder='Enter your email' />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="password">Password</label>
              <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="password" id="password" placeholder='Enter your password' />
            
            </div>
          
            <button   className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer w-full'  type="submit"  >Sign Up</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignUp

"use client"
import React from 'react'
import { decrement, increment, initialvalue } from '/redux/counter/counterSlice'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const [username, setUsername] = useState('')
  const [query, setQuery] = useState('')
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const [input, setInput] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const pathname = `/${input.trim().toLowerCase().replace(/\s+/g, '-')}`;
    router.push(pathname);
  };


  useEffect(() => {
    const storedName = JSON.parse(localStorage.getItem("name"));
    if (storedName) {
      setUsername(storedName);
    }
  }, [])

  useEffect(() => {
    
    if (typeof window !== undefined) {
      let countervalue = JSON.parse(localStorage.getItem("counter"))
      if (countervalue) {
        dispatch(initialvalue(countervalue));
      }
    }
  }, [])
  

    
  
  const logout = () => {
    localStorage.removeItem("name")
    setUsername('')
  }

  


 

  return (
    <>
      <nav className='bg-gradient-to-r from-green-400 to-sky-400 flex items-center justify-between px-5 m-3 rounded-4xl p-3 sticky   top-3'>
        <div className="">
          <h1 className='text-white  max-sm:hidden text-4xl items-center justify-center font-bold'>BuyBit</h1>
        </div>
        <div className='flex items-center justify-center  border-transparent bg-white p-2 rounded-3xl  '>
          <form onSubmit={handleSubmit} className=' flex items-center justify-center' >
            <input className='bg-white  outline-0 w-16 sm:w-fit md:w-64 lg:100  p-1 border-transparent ' type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder='Search' />
            <button type='submit'><img className='bg-white p-1 hover:cursor-pointer  border-l-2 hover:bg-gray-200 rounded-lg' src="search.svg" alt="search" /></button></form>
          <Link href='/cart'>
            <div className='flex   '>

              <img className='rounded-4xl  border-r-2 bg-yellow-300 hover:bg-yellow-200   p-2' src="cart.svg" alt="cart" />
              <span className='bg-red-500 rounded-xl  text-xs px-1.5 fixed top-7 hover:opacity-0 '>{count}</span>
            </div>
          </Link>


        </div>
        {username ? (
          <div className='font-semibold text-3xl text-white cursor-pointer hover:text-gray-100' ><span onClick={logout}>{username}</span>

          </div>


        ) : (
          <ul className=" flex text-white gap-7">

            <li className='text-lg sm:text-xl md:text-2xl font-semibold hover:bg-sky-300 rounded-2xl p-2'><a href="/signup">SignUp</a></li>
            <li className='text-lg sm:text-xl md:text-2xl font-semibold hover:bg-sky-300 rounded-2xl p-2'><a href="/login">Login</a></li>

          </ul>
        )}


      </nav>
    </>
  )
}

export default Navbar

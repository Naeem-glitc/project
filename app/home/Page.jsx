"use client"
import React, { useEffect, useState } from 'react'
import Navbar from '@/Component/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, } from '/redux/counter/counterSlice'


const Page = ({ product }) => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  const addtocart = (e) => {
    
      // Step 1: Load current cart from localStorage
  let cart = [];
  try {
    cart = JSON.parse(localStorage.getItem("cart")) || [];
    dispatch(increment());
    if (!Array.isArray(cart)) {
      cart = [];
    }
  } catch (error) {
    cart = [];
  }

  // Step 2: Add the new product
  cart.push(e);

  // Step 3: Save updated cart back to localStorage
  localStorage.setItem("cart", JSON.stringify(cart));
  
  
  }


  return (

    <>
      <Navbar />
      <h1 className='text-2xl font-semibold m-5 '>Home essentials</h1>
      <div className='grid grid-cols-1 place-self-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-5  ml-5'>

        <div className='w-70  m-5 p-5 rounded bg-gray-100 shodow-lg  '>
          <img className='w-50 mx-4' src="tool2.webp" alt="" />
          <p className='font-semibold text-center'>O-Cedar EasyWring Microfiber Spin Mop, Bucket Floor Cleaning System, Red, Gray, Standard</p>
          <div className='flex justify-between items-center m-2'>
            <p  >$39.99</p>
            <button onClick={() =>
              addtocart({
                img: "tool2.webp",
                name: "O-Cedar EasyWring Microfiber Spin Mop...",
                price: "39.99",
              })
            } className='bg-gradient-to-r  text-black text-sm font-semibold cursor-pointer hover:bg-gradient-to-l from-sky-400 to-green-400 p-2  rounded-2xl'>Add to cart</button>
          </div>
        </div>

        <div className='w-70  m-5 p-5 rounded bg-gray-100 shodow-lg  '>
          <img className='w-50 mx-4' src="tool1.webp" alt="" />
          <p className='font-semibold text-center'>Electric Spin Scrubber, Cordless Shower Scrubber with Battery Level Display, 2 Speeds Electric Scrubber for Cleaning with 6 Replaceable Heads, Cleaning Brush for Bathroom/Sink/Window</p>
          <div className='flex justify-between items-center m-2'>
            <p>$30.99</p>
            <button onClick={()=> addtocart({img:"tool1.webp",name:"Electric Spin Scrubber, Cordless Shower Scrubber with Battery Level Display, 2 Speeds Electric Scrubber for Cleaning with 6 Replaceable Heads, Cleaning Brush for Bathroom/Sink/Window", price:"30.99",})} className='bg-gradient-to-r  text-black text-sm font-semibold cursor-pointer hover:bg-gradient-to-l from-sky-400 to-green-400 p-2  rounded-2xl'>Add to cart</button>
          </div>
        </div>

        <div className='w-70  m-5 p-5 rounded bg-gray-100 shodow-lg  '>
          <img className='w-50 mx-4' src="tool3.jpg" alt="" />
          <p className='font-semibold text-center'>Electric Spin Scrubber for Cleaning Bathroom, Shower Scrubber Cordless Cleaning Brush with IPX7 Waterproof & 2 Speed, 3 Brush Heads, Bathroom Cleaning Supplies for Shower Tub Kitchen Tile Toilet White</p>
          <div className='flex justify-between items-center m-2'>
            <p>$45.69</p>
            <button onClick={() =>
              addtocart({
                img: "tool3.jpg",
                name: "Electric Spin Scrubber for Cleaning Bathroom, Shower Scrubber Cordless Cleaning Brush with IPX7 Waterproof & 2 Speed, 3 Brush Heads, Bathroom Cleaning Supplies for Shower Tub Kitchen Tile Toilet White",
                price: "45.69",
              })
            } className='bg-gradient-to-r  text-black text-sm font-semibold cursor-pointer hover:bg-gradient-to-l from-sky-400 to-green-400 p-2  rounded-2xl'>Add to cart</button>
          </div>
        </div>
        <div className='w-70  m-5 p-5 rounded bg-gray-100 shodow-lg  '>
          <img className='w-50 mx-4' src="tool4.webp" alt="" />
          <p className='font-semibold text-center'>Crevice Cleaning Brush,8 Pcs Multifunctional Cleaning Brush Tools,Hard Bristle Crevice Cleaning Brush,Crevice Cleaning Brushes for Household Use Bathroom Tiles Kitchen Practical and Durable</p>
          <div className='flex justify-between items-center m-2'>
            <p>$43.89</p>
            <button onClick={() =>
              addtocart({
                img: "tool4.webp",
                name: "Crevice Cleaning Brush,8 Pcs Multifunctional Cleaning Brush Tools,Hard Bristle Crevice Cleaning Brush,Crevice Cleaning Brushes for Household Use Bathroom Tiles Kitchen Practical and Durable",
                price: "43.89",
              })
            } className='bg-gradient-to-r  text-black text-sm font-semibold cursor-pointer hover:bg-gradient-to-l from-sky-400 to-green-400 p-2  rounded-2xl'>Add to cart</button>
          </div>
        </div>
        <div className='w-70  m-5 p-5 rounded bg-gray-100 shodow-lg  '>
          <img className='w-50 mx-4' src="tool5.webp" alt="" />
          <p className='font-semibold text-center'>Candle Warmer Lamp with Timer Dimmable, Birthday Gifts for Women Mom, House Warming Gifts New Home Decor, Wax Warmer Lamp for Jar Candles with 2 Bulbs</p>
          <div className='flex justify-between items-center m-2'>
            <p>$55.89</p>
            <button onClick={() =>
              addtocart({
                img: "tool5.webp",
                name: "Candle Warmer Lamp with Timer Dimmable, Birthday Gifts for Women Mom, House Warming Gifts New Home Decor, Wax Warmer Lamp for Jar Candles with 2 Bulbs",
                price: "55.89",
              })
            } className='bg-gradient-to-r  text-black text-sm font-semibold cursor-pointer hover:bg-gradient-to-l from-sky-400 to-green-400 p-2  rounded-2xl'>Add to cart</button>
          </div>
        </div>
        <div className='w-70  m-5 p-5 rounded bg-gray-100 shodow-lg  '>
          <img className='w-50 mx-4' src="tool6.jpg" alt="" />
          <p className='font-semibold text-center'>Homedics Tabletop Water Fountain, Home Décor Soothing Sound Machine - Automatic Pump, Deep Basin & Natural River Rocks. Indoor Zen Relaxation for Office, Living Room, or Bedroom, 8.25” Tall</p>
          <div className='flex justify-between items-center m-2'>
            <p>$88.89</p>
            <button onClick={() =>
              addtocart({
                img: "tool6.jpg",
                name: "Homedics Tabletop Water Fountain, Home Décor Soothing Sound Machine - Automatic Pump, Deep Basin & Natural River Rocks. Indoor Zen Relaxation for Office, Living Room, or Bedroom, 8.25” Tall",
                price: "88.89",
              })
            }  className='bg-gradient-to-r  text-black text-sm font-semibold cursor-pointer hover:bg-gradient-to-l from-sky-400 to-green-400 p-2  rounded-2xl'>Add to cart</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default Page
"use client"
import React from 'react'
import Link from 'next/link'

import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, } from '/app/redux/counter/counterSlice'


const Body = () => {
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
            {/* home essentials */}
            <h1 className='text-2xl font-semibold mx-5  '>Categories</h1>



            <div className=' mx-5 p-4 flex   '>

                <div className='  w-90 bg-gray-100 mx-3 p-4 rounded shadow-lg '>
                    <h1 className='text-xl font-semibold'>Shop for Home essentiala</h1>
                    <div className='flex px-2 gap-3 mt-2 '>
                        <div>
                            <img className='w-40' src="home1.jpg" alt="cleaing tools" />
                            <Link href="/homeessentials">Cleaning Tools</Link></div>
                        <div>
                            <img className='w-40' src="home2.jpg" alt="beading" />
                            <Link href="/homeessentials">Bedding</Link>
                        </div>

                    </div>
                    <div className='mt-3'>
                        <img src="home3.jpg" alt="Home Decor" />
                        <Link href="/homeessentials">Home Decor</Link>
                    </div>
                </div>

                <div className='  w-90 bg-gray-100 mx-3 p-4 rounded shadow-lg '>
                    <h1 className='text-xl font-semibold'>Level up your beauty routine</h1>
                    <div className='flex px-2 gap-3 mt-2 '>
                        <div>
                            <img className='w-40' src="makeup1.jpg" alt="Makeup" />
                            <Link href="/beauty">Makeup</Link></div>
                        <div>
                            <img className='w-40' src="makeup2.jpg" alt="Mirror" />
                            <Link href="/beauty">Mirrors</Link>
                        </div>

                    </div>
                    <div className='mt-3'>
                        <img src="makeup3.jpg" alt="Brushes" />
                        <Link href="/beauty">Brushes</Link>
                    </div>
                </div>

                <div className='  w-90 bg-gray-100 mx-3 p-4 rounded shadow-lg '>
                    <h1 className='text-xl font-semibold'>Score the top PCs & Accessories</h1>
                    <div className='flex px-2 gap-3 mt-2 '>
                        <div>
                            <img className='w-40' src="pc1.jpg" alt="Laptops" />
                            <Link href="/pcandlaptop">Laptops</Link></div>
                        <div>
                            <img className='w-40' src="pc2.jpg" alt="Disktop" />
                            <Link href="/pcandlaptop">Disktop</Link>
                        </div>

                    </div>
                    <div className='mt-3'>
                        <img src="pc3.jpg" alt="PC Accessories" />
                        <Link href="/pcandlaptop">PC Accessories</Link>
                    </div>
                </div>


            </div>


            <h1 className='text-2xl font-semibold mx-5 '>For You</h1>

            <div className='grid grid-cols-1 place-self-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  mx-5 p-4  '>
                <div className='w-70  m-5 p-5 rounded bg-gray-100 shodow-lg  '>
                    <img className='w-50 mx-4' src="laptop3.webp" alt="" />
                    <p className='font-semibold text-center'>2025 Laptop, Laptop with AMD Ryzen 7 5700U (8C/16T, Up to 4.3GHz), 16GB RAM 512GB NVMe SSD Laptop Computer, Radeon RX Vega 8 Graphics, 16.1-inch FHD Display, WiFi 6, 53Wh Battery, Backlit KB</p>
                    <div className='flex justify-between items-center m-2'>
                        <p>$450.00</p>
                        <button onClick={() =>
                            addtocart({
                                img: "laptop3.webp",
                                name: "2025 Laptop, Laptop with AMD Ryzen 7 5700U...",
                                price: "450.00",
                            })
                        } className='bg-gradient-to-r  text-black text-sm font-semibold cursor-pointer hover:bg-gradient-to-l from-sky-400 to-green-400 p-2  rounded-2xl'>Add to cart</button>
                    </div>
                </div>
                <div className='w-70  m-5 p-5 rounded bg-gray-100 shodow-lg  '>
                    <img className='w-50 mx-4' src="laptop4.webp" alt="" />
                    <p className='font-semibold text-center'>All-in-One Desktop Computer 23.8 Inch FHD Curved Display Celeron N100 (Up to 3.4GHz) All-in-One PC 8GB RAM 512GB SSD Win 11 Pro WiFi 5 Bluetooth 5.1 HDMI Desktop Computer with Wired Keyboard & Mouse</p>
                    <div className='flex justify-between items-center m-2'>
                        <p>$550.00</p>
                        <button onClick={() =>
                            addtocart({
                                img: "laptop4.webp",
                                name: "All-in-One Desktop Computer 23.8 Inch FHD Curved Display...",
                                price: "550.00",
                            })
                        } className='bg-gradient-to-r  text-black text-sm font-semibold cursor-pointer hover:bg-gradient-to-l from-sky-400 to-green-400 p-2  rounded-2xl'>Add to cart</button>
                    </div>
                </div>

                <div className='w-70  m-5 p-5 rounded bg-gray-100 shodow-lg  '>
                    <img className='w-50 mx-4' src="tool1.webp" alt="" />
                    <p className='font-semibold text-center'>Electric Spin Scrubber, Cordless Shower Scrubber with Battery Level Display, 2 Speeds Electric Scrubber for Cleaning with 6 Replaceable Heads, Cleaning Brush for Bathroom/Sink/Window</p>
                    <div className='flex justify-between items-center m-2'>
                        <p>$30.99</p>
                        <button onClick={() => addtocart({ img: "tool1.webp", name: "Electric Spin Scrubber, Cordless Shower Scrubber with Battery Level Display, 2 Speeds Electric Scrubber for Cleaning with 6 Replaceable Heads, Cleaning Brush for Bathroom/Sink/Window", price: "30.99", })} className='bg-gradient-to-r  text-black text-sm font-semibold cursor-pointer hover:bg-gradient-to-l from-sky-400 to-green-400 p-2  rounded-2xl'>Add to cart</button>
                    </div>
                </div>

                <div className='w-70  m-5 p-5 rounded bg-gray-100 shodow-lg  '>
                    <img className='w-50 mx-4' src="make2.webp" alt="" />
                    <p className='font-semibold text-center'>Electric Makeup Brush Cleaner - Quick Efficient Makeup Brush，Automatic Cosmetic Brush Cleaner Makeup Brush with Brush Clean Mat,Portable Compact Design for Travel</p>
                    <div className='flex justify-between items-center m-2'>
                        <p>$12.99</p>
                        <button onClick={() =>
                            addtocart({
                                img: "make2.webp",
                                name: "Electric Makeup Brush Cleaner - Quick Efficient Makeup Brush，Automatic Cosmetic Brush Cleaner Makeup Brush with Brush Clean Mat,Portable Compact Design for Travel",
                                price: "12.99",
                            })
                        } className='bg-gradient-to-r  text-black text-sm font-semibold cursor-pointer hover:bg-gradient-to-l from-sky-400 to-green-400 p-2  rounded-2xl'>Add to cart</button>
                    </div>
                </div>





            </div>


        </>
    )
}

export default Body

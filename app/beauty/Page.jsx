"use client"
import React from 'react'
import Navbar from '@/Component/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '/redux/counter/counterSlice'

const Page = () => {
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
            <h1 className='text-2xl font-semibold m-5 '>Level Up your beauty routine</h1>
            <div className='grid grid-cols-1 place-self-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-5 ml-5'>

                <div className='w-70  m-5 p-5 rounded bg-gray-100 shodow-lg  '>
                    <img className='w-50 mx-4' src="make1.webp" alt="" />
                    <p className='font-semibold text-center'>BS-MALL Makeup Brush Set 18 Pcs Premium Synthetic Foundation Powder Concealers Eye shadows Blush Makeup Brushes with black case</p>
                    <div className='flex justify-between items-center m-2'>
                        <p>$39.99</p>
                        <button onClick={() =>
                            addtocart({
                                img: "make1.webp",
                                name: "BS-MALL Makeup Brush Set 18 Pcs Premium Synthetic Foundation Powder Concealers Eye shadows Blush Makeup Brushes with black case",
                                price: "39.99",
                            })
                        } className='bg-gradient-to-r  text-black text-sm font-semibold cursor-pointer hover:bg-gradient-to-l from-sky-400 to-green-400 p-2  rounded-2xl'>Add to cart</button>
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
                <div className='w-70  m-5 p-5 rounded bg-gray-100 shodow-lg  '>
                    <img className='w-35 mx-10' src="make3.webp" alt="" />
                    <p className='font-semibold text-center'>Daubigny Makeup Brushes Dual-ended Foundation Brush Concealer Brush Perfect for Any Look Premium Luxe Hair Rounded Taperd Flawless Brush Ideal for Liquid, Cream, Powder,Blending,Concealer</p>
                    <div className='flex justify-between items-center m-2'>
                        <p>$9.00</p>
                        <button onClick={() =>
                            addtocart({
                                img: "make3.webp",
                                name: "Daubigny Makeup Brushes Dual-ended Foundation Brush Concealer Brush Perfect for Any Look Premium Luxe Hair Rounded Taperd Flawless Brush Ideal for Liquid, Cream, Powder,Blending,Concealer",
                                price: "9.09",
                            })
                         } className='bg-gradient-to-r  text-black text-sm font-semibold cursor-pointer hover:bg-gradient-to-l from-sky-400 to-green-400 p-2  rounded-2xl'>Add to cart</button>
                    </div>
                </div>
                <div className='w-70  m-5 p-5 rounded bg-gray-100 shodow-lg  '>
                    <img className='w-20 mx-16' src="make4.webp" alt="" />
                    <p className='font-semibold text-center'>L'Oreal Paris Makeup True Match Lumi Glotion, Natural Glow Enhancer, Illuminator Highlighter, Bronzing Drops For a Sun-Kissed Glow, 902 Light</p>
                    <div className='flex justify-between items-center m-2'>
                        <p>$30.00</p>
                        <button onClick={() =>
                            addtocart({
                                img: "make4.webp",
                                name: "L'Oreal Paris Makeup True Match Lumi Glotion, Natural Glow Enhancer, Illuminator Highlighter, Bronzing Drops For a Sun-Kissed Glow, 902 Light",
                                price: "30.00",
                            })
                         } className='bg-gradient-to-r  text-black text-sm font-semibold cursor-pointer hover:bg-gradient-to-l from-sky-400 to-green-400 p-2  rounded-2xl'>Add to cart</button>
                    </div>
                </div>
                <div className='w-70  m-5 p-5 rounded bg-gray-100 shodow-lg  '>
                    <img className='w-50 mx-4' src="make5.webp" alt="" />
                    <p className='font-semibold text-center'>e.l.f. Glow Reviver Lip Oil, Nourishing Tinted Lip Oil For A High-shine Finish, Infused With Jojoba Oil, Vegan & Cruelty-free, Rose Envy</p>
                    <div className='flex justify-between items-center m-2'>
                        <p>$40.00</p>
                        <button onClick={() =>
                            addtocart({
                                img: "make5.webp",
                                name: "e.l.f. Glow Reviver Lip Oil, Nourishing Tinted Lip Oil For A High-shine Finish, Infused With Jojoba Oil, Vegan & Cruelty-free, Rose Envy",
                                price: "40.00",
                            })
                         } className='bg-gradient-to-r  text-black text-sm font-semibold cursor-pointer hover:bg-gradient-to-l from-sky-400 to-green-400 p-2  rounded-2xl'>Add to cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page

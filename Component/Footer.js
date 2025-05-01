"use client"
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className=' mx-5 p-4 bg-gray-100 rounded-md  md:stickyx bottom-2 right-0 left-0'>
                <div className='flex justify-between items-center px-2 '>
                    <div>
                        <h1 className='text-xs font-semibold  '>BuyBit</h1>
                        <ul className='text-gray-500 font-semibold list-none '>
                            <li className=' text-xs cursor-pointer hover:underline rounded'> <Link href="/contactUs">Contact Us</Link></li>
                            <li className=' text-xs cursor-pointer  hover:underline  rounded '> <Link href="/about">About</Link></li>
                            <li className=' text-xs cursor-pointer hover:underline  rounded '> <Link href="/privacypolicy">Privacy Policy</Link></li>
                        </ul>
            
                    </div>
                            
                    <p className='text-xs font-semibold'>&copy; 2025 Naeem Abbas. All rights reserved.</p>

                    <div>
                        <ul className='flex gap-4'>
                            <li className='hover:bg-gray-300 p-1 rounded-2xl' ><a href="https://www.linkedin.com/in/naeemabbastarar/" target='_blank' ><img src="linkedin.svg" alt="Linkedin" /></a></li>
                            <li className='hover:bg-gray-300 p-1 rounded-2xl'><a href="https://github.com/Naeem-glitc" target='_blank'><img src="github.svg" alt="github" /></a></li>
                        </ul>
                    </div>


                </div>

            </footer>
        </>
    )
}

export default Footer

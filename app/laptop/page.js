"use client"
import Navbar from '@/Component/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '/app/redux/counter/counterSlice'




const page = () => {
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
            <h1 className='text-2xl font-semibold m-5 '>Score the top PCs & Accessories</h1>
            <div className='grid grid-cols-1 place-self-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-5 ml-5'>

                <div className='w-70  m-5 p-5 rounded bg-gray-100 shodow-lg  '>
                    <img className='w-50 mx-4' src="laptop1.webp" alt="" />
                    <p className='font-semibold text-center'>HP Flagship 14" Laptop with 1 Year Office 365 | 16GB RAM | 1.22TB Storage(64GB eMMC & 160GB Docking Station & 1TB Cloud Storage) | Intel 4-Core Processor| Webcam | Wi-Fi | Windows 11 | Pink</p>
                    <div className='flex justify-between items-center m-2'>
                        <p>$999.99</p>
                        <button onClick={() =>
                            addtocart({
                                img: "laptop1.webp",
                                name: "HP Flagship 14\" Laptop with 1 Year Office 365...",
                                price: "999.99",
                            })
                        }
                            className='bg-gradient-to-r  text-black text-sm font-semibold cursor-pointer hover:bg-gradient-to-l from-sky-400 to-green-400 p-2  rounded-2xl'>Add to cart</button>
                    </div>



                </div>
                <div className='w-70  m-5 p-5 rounded bg-gray-100 shodow-lg  '>
                    <img className='w-50 mx-4' src="laptop2.webp" alt="" />
                    <p className='font-semibold text-center'>Acer Aspire 3 A315-24P-R7VH Slim Laptop | 15.6" Full HD IPS Display | AMD Ryzen 3 7320U Quad-Core Processor | AMD Radeon Graphics | 8GB LPDDR5 | 128GB NVMe SSD | Wi-Fi 6 | Windows 11 Home in S Mode</p>
                    <div className='flex justify-between items-center m-2'>
                        <p>$350.99</p>
                        <button onClick={() =>
                            addtocart({
                                img: "laptop2.webp",
                                name: "Acer Aspire 3 A315-24P-R7VH Slim Laptop...",
                                price: "350.99",
                            })
                        } className='bg-gradient-to-r  text-black text-sm font-semibold cursor-pointer hover:bg-gradient-to-l from-sky-400 to-green-400 p-2  rounded-2xl'>Add to cart</button>
                    </div>
                </div>
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
                    <img className='w-50 mx-4' src="laptop5.webp" alt="" />
                    <p className='font-semibold text-center'>MXZ Gaming PC Computer R5 3500X, RX6600, 16G（8G*2） DDR4, NVME 500G, A520,6RGB Fans,Windows 11 Pro Ready to use, Gamer Desktop Computer(R5 3500X| RX6600)</p>
                    <div className='flex justify-between items-center m-2'>
                        <p>$650.00</p>
                        <button onClick={() =>
                            addtocart({
                                img: "laptop5.webp",
                                name: "MXZ Gaming PC Computer R5 3500X...",
                                price: "650.99",
                            })
                        } className='bg-gradient-to-r  text-black text-sm font-semibold cursor-pointer hover:bg-gradient-to-l from-sky-400 to-green-400 p-2  rounded-2xl'>Add to cart</button>
                    </div>
                </div>
                <div className='w-70  m-5 p-5 rounded bg-gray-100 shodow-lg  '>
                    <img className='w-50 mx-4' src="laptop6.webp" alt="" />
                    <p className='font-semibold text-center'>AutoFull C3 Gaming Chair, Racing Style Gaming Chair with Ergonomic Lumbar Support,Adjustable High Back PU Leather PC Chair with Footrest,Brown</p>
                    <div className='flex justify-between items-center m-2'>
                        <p>$150.00</p>
                        <button onClick={() =>
                            addtocart({
                                img: "laptop6.webp",
                                name: "AutoFull C3 Gaming Chair, Racing Style Gaming Chair with Ergonomic Lumbar Support,Adjustable High Back PU Leather PC Chair with Footrest,Brown",
                                price: "150.00",
                            })
                        } className='bg-gradient-to-r  text-black text-sm font-semibold cursor-pointer hover:bg-gradient-to-l from-sky-400 to-green-400 p-2  rounded-2xl'>Add to cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page

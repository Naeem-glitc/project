"use client"
import React, { use } from 'react'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, initialvalue } from '/app/redux/counter/counterSlice'
import Link from 'next/link'
const page = () => {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  const [cartitems, setCartitems] = useState([])
  const [price, setPrice] = useState(0)

  useEffect(() => {

    let storeitem;
    try {

      storeitem = JSON.parse(localStorage.getItem("cart")) || []
    } catch (error) {
      console.log("data not stored ", error)
    }

    if (!Array.isArray(storeitem)) {
      storeitem = []
    }
    setCartitems(storeitem)

    totalprice(storeitem);

  }, [])

  useEffect(() => {
      let countervalue = JSON.parse(localStorage.getItem("counter"))
    if(typeof window !== undefined){
       let  countervalue = JSON.parse(localStorage.getItem("counter"))
        if(countervalue){
          dispatch(initialvalue(countervalue));
        }
    }


  }, [dispatch])



  useEffect(() => {

    if (typeof window !== "undefined") {
      localStorage.setItem("counter", JSON.stringify(count));
    }
  }, [count]);


  const removeitem = (index) => {
    const updatedcart = cartitems.filter((item, i) => i !== index)
    setCartitems(updatedcart)
    localStorage.setItem("cart", JSON.stringify(updatedcart))
    dispatch(decrement())
    totalprice(updatedcart)

  }

  const totalprice = (cart) => {

    let getprice = cart.map(item => parseFloat(item.price));

    console.log(getprice)
    let total = getprice.reduce((acc, item) => acc + item, 0);
    let fixed = total.toFixed(2);
  
    setPrice(fixed);

  }

  const handleClearcart = () => {
    setCartitems([])
    localStorage.setItem("cart", JSON.stringify([]))
    dispatch(initialvalue(0))
    setPrice(0)
  }


  return (

    <>
      <div>


        <section className=' m-1 flex items-center justify-between p-1 bg-gray-100 overflow-y-auto h-auto  '>
          <div className='h-96 w-full '>

            <ul className=' m-1 w-full '>
              {cartitems.map((item, index) => (
                <li key={index} className=' m-3 flex items-center gap-5  overflow-x-auto p-1 w-auto rounded bg-gray-50 shadow-lg'>
                  <img className='w-10' src={item.img} alt="item" />
                  <p className='font-semibold text-wrap overflow-y-clip h-12 w-full'>{item.name}</p>
                  <p className='font-semibold'>${item.price}</p>
                  <button className='bg-gradient-to-r from-sky-400 to-green-400 px-2 rounded-2xl font-semibold cursor-pointer hover:bg-gradient-to-l  ' onClick={() => removeitem(index)}  >Delete</button>
                </li>

              ))

              }
            </ul>
          </div>

        </section>
        <aside className='rounded p-5  m-3 sm:p-8 md:p-10 md:w-100  bg-gray-50  shadow-lg sm:fixed right-5 bottom-72   '>
          <div className='flex items-center  justify-between md:gap-5'>
            <h1 className='text-lg md:text-2xl font-semibold '>Total Items</h1>
            <span>{count}</span>
          </div>
          <div className='flex items-center justify-between md:mt-5 '>
            <h1 className='text-lg md:text-2xl font-semibold '>Total Price</h1>
            <span>${price}</span>
          </div>
          <div className='flex items-center justify-between '>

            <button onClick={handleClearcart} className='bg-gradient-to-r  text-black text-sm font-semibold mt-5  cursor-pointer hover:bg-gradient-to-l from-sky-400 to-green-400 p-2  rounded-2xl'>Clear Cart</button>

            <Link href="/"> <button onClick={handleClearcart} className='bg-gradient-to-r  text-black text-sm font-semibold mt-5  cursor-pointer hover:bg-gradient-to-l from-sky-400 to-green-400 p-2  rounded-2xl'>Checkout</button></Link>



          </div>


        </aside>
      </div>
    </>

  )
}

export default page

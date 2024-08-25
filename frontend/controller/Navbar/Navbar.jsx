import React from 'react'
// import ShopIQ from "./images/ShopIQ.png"


const Navbar = () => {
  return (
    <div className='bg-primary h-[60px] text-white grid grid-flow-col'>
      <div className='w-[60px] ml-10'><img src="../images/ShopIQ-logo.png" alt=""/></div>
      <div className='w-[150px] mt-2'><img src="../images/ShopIQ-text-logo.png" alt=""/></div>
    </div>
  )
}

export default Navbar
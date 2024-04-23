import React from 'react'

export const CartHeader = () => {
  return (
      <div className='relative w-[40px] h-[40px] inline-block  bg-[#2f3033] rounded-full  leading-[40px]  text-center  '>
          <i class="fa-solid fa-cart-shopping"></i>
          <p className='absolute bottom-[6px] left-[7px] z-[1] bg-red-700 text-center text-white rounded-full w-[14px] h-[14px] text-[10px] leading-[14px] '>1</p>
    </div>
  )
}

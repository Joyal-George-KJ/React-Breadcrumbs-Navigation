import React from 'react'

function Logo({img}) {
  return (
    <div className='w-14 aspect-square sticky rounded-md bottom-12 left-[85%] shadow-lg border-2 border-black shadow-neutral-200 cursor-pointer' id='logo'>
        <img src={img} alt="" />
    </div>
  )
}

export default Logo
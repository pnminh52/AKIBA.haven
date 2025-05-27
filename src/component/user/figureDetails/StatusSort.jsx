import React from 'react'

const StatusSort = () => {
  return (
    <div>
      <div className='flex gap-0 items-center border border-gray-300 rounded-xl'>
       <button className='w-full py-2 bg-gradient-to-b from-[#ee9ca7] to-[#FFDCDC] text-black rounded-l-xl hover:bg-[#ffb6c1] transition-colors duration-300'>
       Order 
       </button>

        <button className='w-full py-2 bg-gray-100 text-gray-500 rounded-r-xl '>
           Pre-Order
        </button>
      
      </div>
    </div>
  )
}

export default StatusSort

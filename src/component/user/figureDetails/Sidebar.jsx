import React from 'react'
import FilterFigure from './FilterFigure';

const Sidebar = () => {
  return (
   <div className=' py-4'>
     <div className=' px-4 '>
      <p className='text-lg font-semibold'>Bộ lọc sản phẩm</p>
      <p className='text-sm'>Lọc nhanh sản phẩm bạn cần tìm!</p>
     
    </div>
   <div className='px-4 '>
   <FilterFigure />
   </div>
   </div>
  )
}

export default Sidebar

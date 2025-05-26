import React, { useState } from 'react';
import useFigure from '../../../hook/useFigure';
const TopBar = () => {
  const {figures}=useFigure()
  const [sortBy, setSortBy] = useState('');

  return (
    <div className="py-4 px-4">
   <div className='flex justify-between items-center'>
   <p className="text-lg mb-2 font-semibold">Tất cả sản phẩm ({figures?.length || 0})</p>
 <div className='block md:hidden'>
 <div className='flex gap-1 items-center'>
  <p className="text-xs font-semibold">Sắp xếp</p>
  <svg className='w-5 h-5' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 5L10 5M10 5C10 6.10457 10.8954 7 12 7C13.1046 7 14 6.10457 14 5M10 5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5M14 5L20 5M4 12H16M16 12C16 13.1046 16.8954 14 18 14C19.1046 14 20 13.1046 20 12C20 10.8954 19.1046 10 18 10C16.8954 10 16 10.8954 16 12ZM8 19H20M8 19C8 17.8954 7.10457 17 6 17C4.89543 17 4 17.8954 4 19C4 20.1046 4.89543 21 6 21C7.10457 21 8 20.1046 8 19Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
  </div>
 </div>
   </div>
      <div className="border-t border-b border-gray-300 py-4 hidden md:block">
       
        <div className="flex gap-6 items-center ">
        <p className="font-medium ">Sắp xếp theo:</p>
          {/* Giá tăng dần */}
          <label className="flex items-center gap-1 ">
            
            <input
              type="radio"
              name="sort-price"
              value="price-asc"
              checked={sortBy === 'price-asc'}
              onChange={() => setSortBy('price-asc')}
              className="accent-pink-500"
            />
            Giá: Thấp đến Cao
          </label>

          {/* Giá giảm dần */}
          <label className="flex items-center gap-1 ">
            <input
              type="radio"
              name="sort-price"
              value="price-desc"
              checked={sortBy === 'price-desc'}
              onChange={() => setSortBy('price-desc')}
              className="accent-pink-500"
            />
            Giá: Cao đến Thấp
          </label>

          {/* Mới nhất */}
          <label className="flex items-center gap-1 ">
            <input
              type="radio"
              name="sort-date"
              value="newest"
              checked={sortBy === 'newest'}
              onChange={() => setSortBy('newest')}
              className="accent-pink-500"
            />
            Mới nhất
          </label>

          {/* Cũ nhất */}
          <label className="flex items-center gap-1 ">
            <input
              type="radio"
              name="sort-date"
              value="oldest"
              checked={sortBy === 'oldest'}
              onChange={() => setSortBy('oldest')}
              className="accent-pink-500"
            />
            Cũ nhất
          </label>

          {/* A → Z */}
          <label className="flex items-center gap-1 ">
            <input
              type="radio"
              name="sort-name"
              value="az"
              checked={sortBy === 'az'}
              onChange={() => setSortBy('az')}
              className="accent-pink-500"
            />
            Tên: A → Z
          </label>

          {/* Z → A */}
          <label className="flex items-center gap-1 ">
            <input
              type="radio"
              name="sort-name"
              value="za"
              checked={sortBy === 'za'}
              onChange={() => setSortBy('za')}
              className="accent-pink-500"
            />
            Tên: Z → A
          </label>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

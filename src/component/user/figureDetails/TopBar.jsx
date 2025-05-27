import React from 'react';
import BrandSort from './BrandSort';
import StatusSort from './StatusSort';

const TopBar = ({ figures, sortBy, setSortBy }) => {
  return (
   
      <div className="py-4 px-4">
      <div className='flex justify-between items-center'>
        <p className="text-lg mb-2 font-semibold">Tất cả sản phẩm ({figures?.length || 0})</p>
        <div className='block md:hidden'>
          <div className='flex gap-2 items-center'>
            <p className=" font-semibold">Bộ lọc</p>
            <svg className='w-5 h-5' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 5L10 5M10 5C10 6.10457 10.8954 7 12 7C13.1046 7 14 6.10457 14 5M10 5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5M14 5L20 5M4 12H16M16 12C16 13.1046 16.8954 14 18 14C19.1046 14 20 13.1046 20 12C20 10.8954 19.1046 10 18 10C16.8954 10 16 10.8954 16 12ZM8 19H20M8 19C8 17.8954 7.10457 17 6 17C4.89543 17 4 17.8954 4 19C4 20.1046 4.89543 21 6 21C7.10457 21 8 20.1046 8 19Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className='pt-2 block sm:hidden'>
        <StatusSort />
      </div>
      <div className='block sm:hidden'>
        <BrandSort/>
      </div>
      <div className="border-t border-b border-gray-300 custom-scrollbar py-4 overflow-x-auto">
  <div className="flex gap-6 items-center flex-nowrap w-max">
    <p className="font-medium whitespace-nowrap">Sắp xếp theo:</p>

    {/* Giá tăng dần */}
    <label className="flex items-center gap-1 min-w-max">
      <input
        type="radio"
        name="sort"
        value="price-asc"
        checked={sortBy === 'price-asc'}
        onChange={() => setSortBy('price-asc')}
        className="accent-[#ee9ca7]"
      />
      Giá: Thấp đến Cao
    </label>

    {/* Giá giảm dần */}
    <label className="flex items-center gap-1 min-w-max">
      <input
        type="radio"
        name="sort"
        value="price-desc"
        checked={sortBy === 'price-desc'}
        onChange={() => setSortBy('price-desc')}
        className="accent-[#ee9ca7]"
      />
      Giá: Cao đến Thấp
    </label>

    {/* Mới nhất */}
    <label className="flex items-center gap-1 min-w-max">
      <input
        type="radio"
        name="sort"
        value="newest"
        checked={sortBy === 'newest'}
        onChange={() => setSortBy('newest')}
        className="accent-[#ee9ca7]"
      />
      Mới nhất
    </label>

    {/* Cũ nhất */}
    <label className="flex items-center gap-1 min-w-max">
      <input
        type="radio"
        name="sort"
        value="oldest"
        checked={sortBy === 'oldest'}
        onChange={() => setSortBy('oldest')}
        className="accent-[#ee9ca7]"
      />
      Cũ nhất
    </label>

    {/* A → Z */}
    <label className="flex items-center gap-1 min-w-max">
      <input
        type="radio"
        name="sort"
        value="az"
        checked={sortBy === 'az'}
        onChange={() => setSortBy('az')}
        className="accent-[#ee9ca7]"
      />
      Tên: A → Z
    </label>

    {/* Z → A */}
    <label className="flex items-center gap-1 min-w-max">
      <input
        type="radio"
        name="sort"
        value="za"
        checked={sortBy === 'za'}
        onChange={() => setSortBy('za')}
        className="accent-[#ee9ca7]"
      />
      Tên: Z → A
    </label>
  </div>
</div>

   
    </div>
   
  
  );
};

export default TopBar;

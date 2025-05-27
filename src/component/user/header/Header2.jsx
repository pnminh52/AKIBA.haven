import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header2 = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Trang chủ', path: '/' },
    { name: 'Mô hình', path: '/list' },
    { name: 'Sản phẩm khác', path: '/sanpham-khac' },
    { name: 'Khuyến mãi', path: '/khuyenmai' },
    { name: 'Chính sách', path: '/chinhsach' },
    { name: 'Hướng dẫn', path: '/huongdan' },
    { name: 'Tin tức', path: '/tintuc' },
    { name: 'Liên hệ', path: '/lienhe' },
    { name: 'Khác', path: '/khac' },
  ];

  return (
    <div className='hidden md:block'>
      <div className='bg-black flex'>
        <div className='max-w-screen-xl  w-full text-white justify-between mx-auto px-8 flex items-center gap-8 h-10'>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`cursor-pointer transition duration-300 ease-in-out hover:text-[#FFAEAE] ${
                location.pathname === item.path ? 'text-[#FFAEAE]' : ''
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header2;

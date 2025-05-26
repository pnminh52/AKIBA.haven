import React from 'react';
import { Outlet } from 'react-router-dom';
import Header1 from './../component/user/header/Header1';
import Header2 from './../component/user/header/Header2';
import Footer from './../component/footer/Footer';
import Header3 from './../component/user/header/Header3';

const UserLayout = () => {
  return (
    <div className='bg-gray-100 space-y-4'>
     <div>
      {/* <Header3 /> */}
     <Header1 />
     <Header2 />
     </div>
      <Outlet />
   <div>
    <Footer />
   </div>
    </div>
  );
};

export default UserLayout;

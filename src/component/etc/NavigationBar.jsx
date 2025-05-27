import React from 'react';

const NavigationBar = () => {
  return (
    <div className="sm:hidden fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-md h-16 bg-gradient-to-b from-[#ee9ca7] to-[#FFDCDC] z-50 shadow-md flex items-center rounded-2xl px-8">
      <div className="flex justify-between items-center w-full text-black">
      <div className='flex flex-col items-center space-y-1 hover:cursor-pointer'>
     <svg focusable="false" width="18" height="18" class="icon icon--header-search   " viewBox="0 0 18 18">
        <path d="M12.336 12.336c2.634-2.635 2.682-6.859.106-9.435-2.576-2.576-6.8-2.528-9.435.106C.373 5.642.325 9.866 2.901 12.442c2.576 2.576 6.8 2.528 9.435-.106zm0 0L17 17" fill="none" stroke="currentColor" stroke-width="1.2"></path>
      </svg>
      <p className='text-xs'>Tìm kiếm</p>
     </div>
     <div className='flex flex-col items-center space-y-1 hover:cursor-pointer'>
     <svg focusable="false" width="18" height="17" class="icon icon--header-customer   " viewBox="0 0 18 17">
        <circle cx="9" cy="5" r="4" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"></circle>
        <path d="M1 17v0a4 4 0 014-4h8a4 4 0 014 4v0" fill="none" stroke="currentColor" stroke-width="1.2"></path>
      </svg>
        <p className='text-xs'>Tài khoản</p>
     </div>
     <div className='flex flex-col items-center space-y-1 hover:cursor-pointer'>
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 36 36" class="icon icon--heart   ">
       
       <path fill="currentColor" d="M18 32.43a1 1 0 0 1-.61-.21C11.83 27.9 8 24.18 5.32 20.51C1.9 15.82 1.12 11.49 3 7.64c1.34-2.75 5.19-5 9.69-3.69A9.87 9.87 0 0 1 18 7.72a9.87 9.87 0 0 1 5.31-3.77c4.49-1.29 8.35.94 9.69 3.69c1.88 3.85 1.1 8.18-2.32 12.87c-2.68 3.67-6.51 7.39-12.07 11.71a1 1 0 0 1-.61.21M10.13 5.58A5.9 5.9 0 0 0 4.8 8.51c-1.55 3.18-.85 6.72 2.14 10.81A57 57 0 0 0 18 30.16a57 57 0 0 0 11.06-10.83c3-4.1 3.69-7.64 2.14-10.81c-1-2-4-3.59-7.34-2.65a8 8 0 0 0-4.94 4.2a1 1 0 0 1-1.85 0a7.93 7.93 0 0 0-4.94-4.2a7.3 7.3 0 0 0-2-.29" class="clr-i-outline clr-i-outline-path-1"></path>
             
       <path fill="none" d="M0 0h36v36H0z"></path>
         
   </svg>
        <p className='text-xs'>Yêu thích</p>
     </div>
    <div className='flex flex-col items-center space-y-1 hover:cursor-pointer'>
    <svg focusable="false" width="20" height="18" class="icon icon--header-cart   " viewBox="0 0 20 18">
        <path d="M3 1h14l1 16H2L3 1z" fill="none" stroke="currentColor" stroke-width="1.2"></path>
        <path d="M7 4v0a3 3 0 003 3v0a3 3 0 003-3v0" fill="none" stroke="currentColor" stroke-width="1.2"></path>
      </svg>
        <p className='text-xs'>Giỏ hàng</p>
    </div>
      </div>
    </div>
  );
};

export default NavigationBar;

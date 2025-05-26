import React from 'react';

const FigureGrid = ({ figures }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 px-4 pb-4 ">
      {figures.map(figure => (
        <div key={figure.id} className="    ">
    <div className="w-full aspect-square relative border-2 border-white hover:border-[#FFAAAA] rounded-xl overflow-hidden mb-2 cursor-pointer">
  <img
    src={figure.image}
    alt={figure.name}
    className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out hover:scale-110"
  />


<div className="absolute top-2 right-2 flex flex-col items-end space-y-1">
<p
  className={`px-2 py-1 text-white text-[10px] rounded-full font-bold ${
    figure.type === "Còn hàng"
      ? "bg-green-600"
      : figure.type === "Đặt hàng"
      ? "bg-yellow-400"
      : "bg-[#FFAAAA]"
  }`}
>
  {figure.type}
</p>


  {figure.stock < 20 && (
    <p className="px-2 py-1 bg-red-500 text-white hidden sm:block text-[10px] rounded-full font-bold">
      Sắp hết
    </p>
  )}
</div>


</div>

          <h3 className="font-semibold  truncate">{figure.name}</h3>
          {figure.price_sale ? (
  <>
  <div className='flex gap-2'>
  <p className="font-semibold text-green-600">
      {figure.price_sale} <span className="text-sm">đ</span>
    </p>
    <p className="font-semibold text-gray-300 line-through">
      {figure.price} <span className="text-sm">đ</span>
    </p>
  </div>
  
  </>
) : (
  <p className="font-semibold text-green-600">
    {figure.price} <span className="text-sm">đ</span>
  </p>
)}

<div className='flex gap-2'>
<p className='text-sm'>{figure.brand} </p>

</div>
         
        </div>
      ))}
    </div>
  );
};

export default FigureGrid;

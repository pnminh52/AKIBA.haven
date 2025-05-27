import React from 'react';
import { Link } from 'react-router-dom';

const FigureGrid = ({ figures }) => {
  const formatVND = (value) => {
    if (!value && value !== 0) return '';
    return value.toLocaleString('vi-VN') + 'đ';
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 px-4 pb-4 ">

      {figures.map(figure => (
        <div key={figure.id} className="    ">
<Link to={`/details/${figure.id}`}>
<div className="w-full aspect-square relative border-2 border-white hover:border-[#FFAAAA] rounded-xl overflow-hidden mb-2 cursor-pointer">
            {figure.stock === 0 && (
              <div className="absolute inset-0 bg-gray-400/50 z-10" />
            )}
            <img
              src={figure.image}
              alt={figure.name}
              className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out hover:scale-110"
            />


            <div className="absolute top-2 right-2 flex flex-col items-end space-y-1">

              {figure.trending && (
                <div className=' top-2 right-2 flex flex-col items-end space-y-1'>
                  <span className=" bg-[#E60000] font-bold text-white rounded-full py-0.5 px-1  text-[10px]  text-center  ">
                    #{figure.trending} Doanh thu
                  </span>
                </div>
              )}
              {(figure.stock === 0 || figure.stock > 70) && (
                <p
                  className={`px-1 py-0.5 text-white text-[10px] rounded-full font-bold ${figure.stock > 70 ? "bg-green-600" : "bg-[#E60000] z-20"
                    }`}
                >
                  {figure.stock > 70 ? "Còn hàng" : "Hết hàng"}
                </p>
              )}






            </div>




          </div>

          <h3 className={`font-semibold truncate ${figure.stock === 0 ? "text-gray-400" : ""}`}>
            {figure.name}
          </h3>

          {figure.price_sale ? (
            <div className="flex gap-2">
              <p className={`font-semibold ${figure.stock === 0 ? "text-green-700" : "text-green-600"}`}>
                {formatVND(figure.price_sale)}
              </p>
              <p className={`font-semibold line-through ${figure.stock === 0 ? "text-gray-400" : "text-gray-500"}`}>
                {formatVND(figure.price)}
              </p>
            </div>
          ) : (
            <p className={`font-semibold ${figure.stock === 0 ? "text-gray-400" : "text-green-600"}`}>
              {formatVND(figure.price)}
            </p>
          )}


          <div className="flex gap-2">
            <p className={`text-sm font-semibold ${figure.stock === 0 ? "text-gray-400" : ""}`}>
              {figure.brand}
            </p>
          </div>
</Link>
        


        </div>
      ))}
    </div>
  );
};

export default FigureGrid;

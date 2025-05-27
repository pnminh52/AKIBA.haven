import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FigureDetails = () => {
  const { id } = useParams();
  const [figure, setFigure] = useState(null);
  const [loading, setLoading] = useState(true);

  const formatVND = (value) => {
    if (!value && value !== 0) return '';
    return value.toLocaleString('vi-VN') + 'đ';
  };

  useEffect(() => {
    const fetchFigure = async () => {
      try {
        const res = await fetch(`http://localhost:3000/figure/${id}`);
        const data = await res.json();
        setFigure(data);
      } catch (error) {
        console.error("Failed to fetch figure", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFigure();
  }, [id]);

  if (loading) return <p className="p-4">Đang tải...</p>;
  if (!figure) return <p className="p-4 text-red-600">Không tìm thấy sản phẩm.</p>;

  return (
    <div className="max-w-5xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Hình ảnh */}
      <div className="relative w-full aspect-square border rounded-xl overflow-hidden">
        {figure.stock === 0 && <div className="absolute inset-0 bg-gray-400/50 z-10" />}
        <img
          src={figure.image}
          alt={figure.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Thông tin chi tiết */}
      <div>
        <h1 className="text-2xl font-bold mb-2">{figure.name}</h1>

        <p className="mb-2 text-sm text-gray-600">{figure.brand}</p>

        {figure.price_sale ? (
          <div className="flex gap-4 items-center mb-4">
            <p className="text-green-600 font-semibold text-xl">
              {formatVND(figure.price_sale)}
            </p>
            <p className="text-gray-500 line-through text-lg">
              {formatVND(figure.price)}
            </p>
          </div>
        ) : (
          <p className="text-green-600 font-semibold text-xl mb-4">
            {formatVND(figure.price)}
          </p>
        )}

        <p className={`text-sm font-bold ${figure.stock === 0 ? "text-red-600" : "text-green-600"}`}>
          {figure.stock === 0 ? "Hết hàng" : `Còn ${figure.stock} sản phẩm`}
        </p>

        {/* Mô tả giả định */}
        <div className="mt-6">
          <h3 className="font-semibold mb-2">Mô tả sản phẩm</h3>
          <p className="text-sm text-gray-700">
            Đây là sản phẩm figure chất lượng cao, chi tiết tinh xảo, phù hợp với người sưu tầm và người yêu thích mô hình.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FigureDetails;

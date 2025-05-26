import React, { useState } from 'react';

const brands = [
  "Msgm Project", "Hobbilic", "Jiang Hun Ji Studio", "Mi Yin Studio", "VKEND",
  "Dongguan Technology Co.,Ltd.", "HerLove", "Bfull FOTS JAPANS", "SUNDROPS",
  "LANGBOWANG", "PoiArt", "HOWLING STAR", "beBOX", "craft egg",
  "QINGCANG", "MENGXIANG TOYS", "NEONMAX", "Orca Toys"
];

const priceRanges = [
  { label: "Giá dưới 500.000đ", value: "under-500" },
  { label: "500.000đ - 1.000.000đ", value: "500-1000" },
  { label: "1.000.000đ - 2.000.000đ", value: "1000-2000" },
  { label: "2.000.000đ - 5.000.000đ", value: "2000-5000" },
  { label: "5.000.000đ - 10.000.000đ", value: "5000-10000" },
];

const FilterFigure = () => {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);

  const handleBrandToggle = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand)
        ? prev.filter((b) => b !== brand)
        : [...prev, brand]
    );
  };

  const handlePriceToggle = (priceValue) => {
    setSelectedPrices((prev) =>
      prev.includes(priceValue)
        ? prev.filter((p) => p !== priceValue)
        : [...prev, priceValue]
    );
  };

  return (
    <div className="max-w-md space-y-6">
      {/* Thương hiệu */}
      <div>
        <h2 className="text-lg font-semibold">Thương hiệu</h2>
        <div className="max-h-52 overflow-y-auto  rounded p-2 space-y-1">
          {brands.map((brand) => (
            <label key={brand} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => handleBrandToggle(brand)}
                className="accent-pink-500"
              />
              <span className="text-sm">{brand}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Lọc giá */}
      <div>
        <h2 className="text-lg font-semibold">Lọc giá</h2>
        <div className="space-y-1">
          {priceRanges.map((range) => (
            <label key={range.value} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={selectedPrices.includes(range.value)}
                onChange={() => handlePriceToggle(range.value)}
                className="accent-pink-500"
              />
              <span className="text-sm">{range.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterFigure;

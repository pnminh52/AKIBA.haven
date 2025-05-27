import React, { useState, useMemo } from 'react';
import useFigure from '../../hook/useFigure';
import FigureGrid from './../../component/user/figureDetails/FigureGrid';
import Sidebar from '../../component/user/figureDetails/Sidebar';
import TopBar from './../../component/user/figureDetails/TopBar';
import LinkBar from './../../component/user/figureDetails/LinkBar';

const FigureList = () => {
  const { figures, loading, error } = useFigure();
  const [sortBy, setSortBy] = useState('');

  // Sắp xếp figures theo sortBy
  const sortedFigures = useMemo(() => {
    const sorted = [...figures]; // clone để tránh mutate
    switch (sortBy) {
        case 'price-asc':
            return sorted.sort((a, b) => {
              const priceA = a.price_sale ?? a.price;
              const priceB = b.price_sale ?? b.price;
              return priceA - priceB;
            });
          
          case 'price-desc':
            return sorted.sort((a, b) => {
              const priceA = a.price_sale ?? a.price;
              const priceB = b.price_sale ?? b.price;
              return priceB - priceA;
            });
          
      case 'newest':
        return sorted.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      case 'oldest':
        return sorted.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
      case 'az':
        return sorted.sort((a, b) => a.name.localeCompare(b.name));
      case 'za':
        return sorted.sort((a, b) => b.name.localeCompare(a.name));
      default:
        return figures;
    }
  }, [figures, sortBy]);
  

  if (loading) return <p>Đang tải figure...</p>;
  if (error) return <p>Lỗi: {error}</p>;

  return (
    <div className='space-y-4'>
      <div className='max-w-screen-xl mx-auto px-4'>
        <LinkBar />
      </div>
      <div className="flex max-w-screen-xl mx-auto px-4">
        <div className="w-1/5 hidden md:block bg-white rounded-l-lg">
          <Sidebar />
        </div>
        <div className="w-full sm:w-4/5 bg-white rounded-r-lg rounded-l-lg sm:rounded-l-none">
          <TopBar figures={figures} sortBy={sortBy} setSortBy={setSortBy} />
          <FigureGrid figures={sortedFigures} />
        </div>
      </div>
    </div>
  );
};

export default FigureList;

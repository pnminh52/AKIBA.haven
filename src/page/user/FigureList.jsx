import React from 'react';
import useFigure from '../../hook/useFigure';
import FigureGrid from './../../component/user/figureDetails/FigureGrid';
import Sidebar from '../../component/user/figureDetails/Sidebar';
import TopBar from './../../component/user/figureDetails/TopBar';
import LinkBar from './../../component/user/figureDetails/LinkBar';

const FigureList = () => {
  const { figures, loading, error } = useFigure();

  if (loading) return <p>Đang tải figure...</p>;
  if (error) return <p>Lỗi: {error}</p>;

  return (
  <div className='space-y-4'>
     <div className='max-w-screen-xl mx-auto px-4 '>
     <LinkBar />
     </div>
    <div className="flex max-w-screen-xl mx-auto px-4 ">
      
  <div className="w-1/5 hidden md:block bg-white rounded-l-lg">
    <Sidebar />
  </div>
  <div className="w-full sm:w-4/5 bg-white rounded-r-lg">
    <TopBar figures={figures}/>
    <FigureGrid figures={figures} />
  </div>
</div>
  </div>

  );
};

export default FigureList;

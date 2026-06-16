import React from 'react';
import Marquee from 'react-fast-marquee';

const news = [
  {
    id: "1",
    title: "Breaking News: Major Event Unfolds in the City",
  },
  {
    id: "2",
    title: "Breaking News: New Policy Announced by the Government",
  },
  {
    id: "3",
    title: "Breaking News: Sports Team Wins Championship",
  },
];

const BreakingNews = () => {
    return (
      <div className='container mx-auto flex justify-between gap-4 items-center bg-gray-200 px-2 py-4'> 
          <button className='btn bg-red-500 text-white'>Latest News</button>
            <Marquee pauseOnHover={true} speed={100}>
                 {news.map(n=>
                   <span key={n._id}>{n.title}</span>
                 )}
            </Marquee>
        </div>
    );
};

export default BreakingNews; 
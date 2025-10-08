import React from 'react';

import iconImg from '../../assets/icon-downloads.png'
import ratingImg from '../../assets/icon-ratings.png'

const TopApp = ({appData}) => {
  // console.log(appData)

  const {image, title,downloads, ratingAvg}= appData
   
  return (
    <div className="card bg-base-100 w-full shadow-sm p-4  h-full flex flex-col space-y-4">
    <figure >
    <img className="w-full h-48 object-cover rounded-xl"
      src={image}
      alt="" />
  </figure>
  <div >
    <h2 className="card-title">{title}</h2>
  </div>

   <div className='flex justify-between items-center'>
    <div className='flex items-center gap-2 py-1.5 px-2.5 rounded-sm bg-[#f1f5e8]'>
       <img className='w-4 h-4' src={iconImg} alt="" />
       <span>{downloads}</span>
    </div>
    <div className='flex items-center gap-2 py-1.5 px-2.5 rounded-sm bg-[#f1f5e8]'>
         <img className='w-4 h-4' src={ratingImg} alt="" />
         <span>{ratingAvg}</span>
    </div>
   </div>
</div>
  );
};

export default TopApp;
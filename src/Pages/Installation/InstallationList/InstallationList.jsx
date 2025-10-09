import React from 'react';
import iconImg from '../../../assets/icon-downloads.png'
import ratingImg from '../../../assets/icon-ratings.png'
const InstallationList = ({app}) => {
  const {image, title, downloads, ratingAvg,size

     } = app
   
  
    
  return (
    <div className='flex justify-between items-center p-5 mb-3 bg-white rounded-xl'>
      <div className='flex items-center gap-2'>
        <img className='w-[60px] h-[60px] rounded-xl' src={image} alt="" />
        <div>
          <h3 className='card-title'>{title}</h3>
        <div className='flex gap-2 mt-2'>
          <div className='flex  items-center gap-1'> 
             <img className='w-3 h-3' src={iconImg} alt="" />
               <span className='font-medium text-base text-[#00d390]'>{downloads}</span>
            </div>
          
          <div className='flex  items-center gap-1'> 
             <img className='w-3 h-3' src={ratingImg} alt="" />
               <span className='font-medium text-base text-[#ff8811]'>{ratingAvg}</span>
            </div>
             
             <span className='text-gray-400 text-base font-medium'>{size} MB</span>
          
          </div>

        </div>
      </div>
       <button className='btn bg-[#00d390] text-white'>Uninstall</button>
    </div>
  );
};

export default InstallationList;
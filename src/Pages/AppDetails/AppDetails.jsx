import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import iconImg from '../../assets/icon-downloads.png'
import ratingImg from '../../assets/icon-ratings.png'
 import reviewImg from '../../assets/icon-review.png'
const AppDetails = () => {
   const {id} = useParams();
  //  undefined ar jonno parseInt kora
   const singleAppId = parseInt(id)
   const data = useLoaderData()

   const singleApp = data.find(app => app.id === singleAppId)
  //  console.log(singleApp)
  //  console.log(id)

   const {image, title, downloads, reviews, companyName, ratingAvg,ratings,description,size

     } = singleApp
  return (
    <div className='max-w-[1200px] mx-auto p-20'>
      <div className='flex flex-col md:flex-row  items-center gap-5 mt-5  p-2 '>
      <div className='w-full md:w-2/5'>
        <img className='w-[350px] h-[350px] my-auto rounded-2xl' src={image} alt="" />
      </div>
      <div className=' w-full md:w-3/5 h-[350px] flex-1'>
        <h1 className='font-bold text-4xl mb-2'>{title}</h1>
        <p className='text-xl text-[#627382] font-bold mt-2 '>Developed By: <span className='text-[#632ee3]'>{companyName}</span></p>

        <div className='mt-5 border-t-1 border-gray-300 '></div>

         <div className='flex  gap-5 mt-5'>
           <div>
            <img className='w-4 h-4' src={iconImg} alt="" />
            <h3 className='text-[#627382]'>Downloads</h3>
            <span className='font-bold text-4xl'>{downloads}</span>
           </div>
           <div>
            <img className='w-4 h-4' src={ratingImg} alt="" />
            <h3 className='text-[#627382]'>Average Ratings</h3>
            <span className='font-bold text-4xl'>{ratingAvg}</span>
           </div>
           <div>
            <img className='w-4 h-4' src={reviewImg} alt="" />
            <h3 className='text-[#627382]'>Total Reviews</h3>
            <span className='font-bold text-4xl'>{reviews}</span>
           </div>
         </div>
         {/* installed button */}
         <button className='btn mt-5 text-white bg-[#00d390]'>Install Now <span>({size} MB)</span></button>
      </div>
      </div>
    </div>
  );
};

export default AppDetails;
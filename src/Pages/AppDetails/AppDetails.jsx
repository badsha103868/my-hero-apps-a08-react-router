import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import iconImg from '../../assets/icon-downloads.png'
import ratingImg from '../../assets/icon-ratings.png'
 import reviewImg from '../../assets/icon-review.png'
import AppDetailsChart from '../AppDetailsChart/AppDetailsChart';
import { toast } from 'react-toastify';
import { addToAppDB, getStoredApp } from '../../Utilities/addToInstall';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)
 


const AppDetails = () => {
   const {id} = useParams();
  //  undefined ar jonno parseInt kora
   const singleAppId = parseInt(id)
   const data = useLoaderData()

   const singleApp = data.find(app => app.id === singleAppId)
  //  console.log(singleApp)
  //  console.log(id)

    //  installed button functionality

  const [installed, setInstalled] = useState(() => {
  const installedApps = getStoredApp();
  return installedApps.includes(singleAppId);
  });
        
    const handleInstalled =(id)=>{
    
      addToAppDB(id)
      setInstalled(true)

       MySwal.fire({
      title: "Installed Successful!",
      text: "You Install the App!",
      icon: "success"
       })

    }



   const {image, title, downloads, reviews, companyName, ratingAvg,ratings,description,size

     } = singleApp
     
  return (
    <div className='max-w-[1200px] mx-auto p-3 md:p-12 lg:p-20'>
      <div className='flex flex-col md:flex-row  items-center gap-5 mt-5 mb-10  p-2 '>

        {/* left part  */}
      <div className='w-full md:w-2/5 flex justify-center items-center p-3 mx-auto rounded-xl bg-white'>
        <img className='w-[300px] md:w-[350px] h-[300px] md:h-[350px]  rounded-2xl' src={image} alt="" />
      </div>
      
       {/* right part */}
      <div className=' w-full md:w-3/5 my-auto  flex-1'>

        <h1 className='font-bold text-3xl md:text-4xl mb-2'>{title}</h1>

        <p className='text-xl text-[#627382] font-bold mt-2 '>Developed By: <span className='text-[#632ee3]'>{companyName}</span></p>
         
         {/* border */}
        <div className='mt-5 border-t-1 border-gray-300 '></div>

           {/* download rating part */}
         <div className='flex items-center mb-4 gap-5 mt-5'>

           <div  className='space-y-2 flex flex-col items-center justify-center '>
            <img className='w-6 h-6' src={iconImg} alt="" />
            <h3 className='text-[#627382]'>Downloads</h3>
            <span className='font-bold text-xl md:text-2xl lg:text-4xl'>{downloads}</span>
           </div>
       
           <div className='space-y-2 flex flex-col items-center justify-center'>
            <img className='w-6 h-6' src={ratingImg} alt="" />
            <h3 className='text-[#627382]'>Average Ratings</h3>
            <span className='font-bold text-xl md:text-2xl lg:text-4xl'>{ratingAvg}</span>
           </div>

           <div className='space-y-2 flex flex-col items-center justify-center'>
            <img className='w-6 h-6' src={reviewImg} alt="" />
            <h3 className='text-[#627382]'>Total Reviews</h3>
            <span className='font-bold text-xl md:text-2xl lg:text-4xl'>{reviews}</span>
           </div>
         </div>
         {/* installed button */}
         <button onClick={()=>handleInstalled(id)} disabled={installed} className={`btn mt-5 text-white ${installed ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#00d390]'}`}>
             {installed?"Installed": `Install Now (${size} MB)`}
         </button>
      </div>
      </div>


      {/* 2nd part top border */}
       <div className='mt-5 border-t-1 border-gray-300 mb-10 '></div>
     
       {/* rating chart */} 
        
        <AppDetailsChart ratings={ratings}></AppDetailsChart>

       {/* 3rd part top border */}
        <div className='mt-20 border-t-1 border-gray-300 '></div>

        {/* Description part */}
        <div className='my-5'>
             <h3 className='text-2xl font-semibold mb-2'>Description</h3>
             <p className='text-[#627382] text-base md:text-xl'>{description}</p>
        </div>
      
    </div>
  );
};

export default AppDetails;
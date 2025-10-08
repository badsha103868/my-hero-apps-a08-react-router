import React from 'react';
 import bannerImg from '../../assets/hero.png'
const Banner = () => {
  return (
  <div className=' '>
      <div className='flex flex-col items-center justify-center mt-20 max-w-[1000px] mx-auto'>
      <h1 className='text-7xl font-bold text-center '>We Build <br /> <span className='text-[#632ee3]'>Productive</span> Apps</h1>

      <p className='text-center text-[#627382] mt-4 w-'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.  Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
      <div className='mt-10 flex gap-2'>
        <button className='btn '>Google Play</button>
        <button className='btn'>App Store</button>
      </div>
    
    <div className='mt-7'>
      <img className='' src={bannerImg} alt="" />
    </div> 
    </div>
    {/* state section */} 

     <div  className='flex flex-col items-center p-10 md:p-15 lg:p-20 bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)]'>
       <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold text-white text-center'>Trusted by Millions, Built for You</h1>

      <div className='flex justify-between items-center mt-10'>
         <div className='flex flex-col items-center  space-y-4 py-4 px-10'>
            <h3 className='text-base text-center text-white '>Total Downloads</h3>
            <p className='text-3xl md:text-4xl lg:text-6xl text-white font-semibold md:font-bold lg:font-extrabold'>29.6M</p> 
            <p className='text-white text-center'>21% more than last month</p>
         </div>
         <div className='flex flex-col items-center space-y-4 py-4 px-10'>
            <h3 className='text-base text-center text-white '>Total Reviews</h3>
            <p className='text-3xl md:text-4xl lg:text-6xl text-white font-semibold md:font-bold lg:font-extrabold'>906K</p> 
            <p className='text-white text-center'>46% more than last month</p>
         </div>
         <div className='flex flex-col items-center space-y-4  py-4 px-10'>
             <h3 className='text-base text-center text-white '>Active Apps</h3>
            <p className='text-3xl md:text-4xl lg:text-6xl text-white font-semibold md:font-bold lg:font-extrabold'>132+</p> 
            <p className='text-white text-center'>31 more will Launch</p>
        </div>
      </div>


     </div>

  

   

  </div>
  );
};

export default Banner;
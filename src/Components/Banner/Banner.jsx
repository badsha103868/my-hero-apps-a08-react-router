import React from 'react';
 import bannerImg from '../../assets/hero.png'
 import playImg from '../../assets/playStore.png'
 import appStoreImg from '../../assets/appStore.png'
 



const Banner = () => {
  // go to app store on click app store button
  const goToAppStore =() =>{
    window.open("https://www.apple.com/store")
  }
  // go to Play store
  const goToPlayStore =() =>{
    window.open("https://play.google.com/store/games?hl=en")
  }
  return (
  <div className=' '>
      <div className='flex flex-col items-center justify-center mt-5 md:mt-10 lg:mt-20 max-w-[1000px] mx-auto px-1'>
      <h1 className='text-3xl md:text-5xl  lg:text-7xl font-bold text-center '>We Build <br /> <span className='text-[#632ee3]'>Productive</span> Apps</h1>

      <p className='text-center  text-[#627382] mt-4 '>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.  Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
      <div className='mt-10 flex gap-2'>
        <button onClick={goToPlayStore} className='btn'> <img className='w-5 h-5' src={playImg} alt="" />Google Play</button>
        <button onClick={goToAppStore} className='btn'> <img className='w-5 h-5' src={appStoreImg} alt="" /> App Store</button>
      </div>
    
    <div className='mt-7'>
      <img className='' src={bannerImg} alt="" />
    </div> 
    </div>

    {/* state section */} 

     <div className='flex flex-col items-center p-10 md:p-15 lg:p-20 bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)]'>
        <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold text-white text-center'>
          Trusted by Millions, Built for You
        </h1>

        <div className='flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10 mt-10 w-full'>
          <div className='flex flex-col items-center bg-blue-400/30 space-y-4 py-4 px-6 md:px-10 rounded-lg w-full md:w-auto'>
            <h3 className='text-base text-center text-white'>Total Downloads</h3>
            <p className='text-3xl md:text-4xl lg:text-6xl text-white font-semibold md:font-bold lg:font-extrabold'>29.6M</p>
            <p className='text-white text-center'>21% more than last month</p>
          </div>

          <div className='flex flex-col items-center bg-green-400/30 space-y-4 py-4 px-6 md:px-10 rounded-lg w-full md:w-auto'>
            <h3 className='text-base text-center text-white'>Total Reviews</h3>
            <p className='text-3xl md:text-4xl lg:text-6xl text-white font-semibold md:font-bold lg:font-extrabold'>906K</p>
            <p className='text-white text-center'>46% more than last month</p>
          </div>

          <div className='flex flex-col items-center bg-yellow-400/30 space-y-4 py-4 px-6 md:px-10 rounded-lg w-full md:w-auto'>
            <h3 className='text-base text-center text-white'>Active Apps</h3>
            <p className='text-3xl md:text-4xl lg:text-6xl text-white font-semibold md:font-bold lg:font-extrabold'>132+</p>
            <p className='text-white text-center'>31 more will Launch</p>
          </div>
        </div>

  
     </div>
   

  </div>
  );
};

export default Banner;
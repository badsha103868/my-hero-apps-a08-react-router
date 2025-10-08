import React, { Suspense } from 'react';
import TopApp from '../TopApp/TopApp';

const TopApps = ({ homeData}) => {
  return (
    <div className='mt-15 max-w-[1200px] mx-auto'>
      <h1 className='text-4xl text-center font-bold mb-2 '>Trending Apps</h1>
      <p className='text-xl text-center font-normal text-[#627382] mb-5'>Explore All Trending Apps on the Market developed by us</p>

      <Suspense fallback={<span>Loading....</span>}>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8 mb-20   ' >
           {
         homeData.map(appData=> <TopApp key={appData.id} appData={appData}></TopApp>)
            }
            </div>
      </Suspense>

    </div>
  );
};

export default TopApps;
import React, { Suspense, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import AllApps from '../AllApps/AllApps';
import { MdErrorOutline } from "react-icons/md";

const AllApp = () => {
  const data = useLoaderData()
  // console.log(data)
  
  // search state 
  const  [searchValue, setSearchValue] = useState('');
  
  // filter data
  const filteredData = data.filter(appData => appData.title.toLowerCase().includes(searchValue.toLocaleLowerCase()))



  
  return (
    <div className='mt-15 max-w-[1200px] mx-auto'>
      <div className='flex flex-col items-center justify-center mt-20 max-w-[1000px] mx-auto'>
        <h2 className='text-5xl font-bold text-center'>Our All Applications</h2>
       <p className='text-center text-[#627382] mt-4 '>Explore All Apps on the Market developed by us. We code for Millions</p>
      </div>

    <div className='flex justify-between items-center mt-10  mb-5'>
        <span className='font-semibold text-2xl '>({data.length}) Apps Found</span>

    {/* search field */}
      <label className="input input-sm w-64 max-w-xs flex items-center gap-2">
      <svg
       className="h-4 w-4 opacity-50"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
       >
     <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
      >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
     </svg>
   <input
    type="search"
    required
    placeholder="Search Apps" 
    value={searchValue}
    onChange={(e)=> setSearchValue(e.target.value)}
    className="text-sm py-1 px-2 w-full"
     />
   </label>


      </div>
    
        <Suspense fallback={<span>Loading....</span>}>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8 mb-10'>
          {filteredData.length > 0 ? (
            filteredData.map(appData => <AllApps key={appData.id} appData={appData} />)
          ) : 
            (<div className='flex flex-col col-span-full mt-10  justify-center  items-center'> 

               <MdErrorOutline className='text-6xl text-red-500 mb-4' />

            <p className="text-center col-span-full text-red-500 text-5xl">App Not Found</p>
           <Link to='/'>
            <button className='btn bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] text-white py-3 px-5 font-semibold mt-6'>Show All</button>
             </Link>
            </div>)
          }
        </div>
      </Suspense>
        

    </div>
  );
};

export default AllApp;
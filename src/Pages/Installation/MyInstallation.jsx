import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredApp } from '../../Utilities/addToInstall';
import InstallationList from './InstallationList/InstallationList';
 

const MyInstallation = () => {

  const [installList, setInstallList] =useState([])




  const data = useLoaderData()
  console.log(data)

   useEffect(()=>{
         const storedAppData = getStoredApp()
         const convertedAppData = storedAppData.map(id=> parseInt(id))
         console.log(convertedAppData)

         
         const myInstallationList = data.filter(appData=> convertedAppData.includes(appData.id))
         setInstallList(myInstallationList)
   },[])



  return (
  <div className='mt-15 max-w-[1200px] mx-auto'>
    {/* title  */}
    <div className='flex flex-col items-center justify-center mt-20 max-w-[1000px] mx-auto'>
        <h2 className='text-4xl font-bold text-center'>Your Installed Apps</h2>
       <p className='text-center text-[#627382] mt-4 '>Explore All Apps on the Market developed by us.</p>
      </div>
      {/* sort and app fount */}
    <div className='flex justify-between items-center mt-10  mb-5'>
        <span className='font-semibold text-2xl '>{installList.length} Apps Found</span>
      <div className=' flex justify-center'>
       <details className="dropdown ">
       <summary className="btn m-1 text-green-500">Sort By Size: </summary>
        <ul className="menu dropdown-content   bg-base-100 rounded-box z-1 w-52 p-2   shadow-sm text-green-500">
        <li><a >High-Low</a></li>
        <li><a >Low-High</a></li>
         </ul>
        </details>
        </div>
      </div>

      {/* installion list */}
      {
        installList.map(app=> <InstallationList key={app.id} app={app}></InstallationList>)
      }
    </div>
  );
};

export default MyInstallation;
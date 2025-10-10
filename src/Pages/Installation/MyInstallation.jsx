import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredApp } from '../../Utilities/addToInstall';
import InstallationList from './InstallationList/InstallationList';

const MyInstallation = () => {
  const [installList, setInstallList] = useState([]);
  const [sort, setSort] = useState('');
  const data = useLoaderData();

  // Function to convert "5B+" → 5000000000, "5M+" → 5000000, "200K+" → 200000, etc.
const parseDownloads = (value) => {
  if (typeof value === 'number') return value;
  if (!value) return 0;

  const str = value.toString().toLowerCase().replace('+', '').trim();

  if (str.includes('b')) {
    return parseFloat(str) * 1_000_000_000;
  } else if (str.includes('m')) {
    return parseFloat(str) * 1_000_000;
  } else if (str.includes('k')) {
    return parseFloat(str) * 1_000;
  } else {
    return parseInt(str) || 0;
  }
};

  useEffect(() => {
    const storedAppData = getStoredApp();
    const convertedAppData = storedAppData.map(id => parseInt(id));
    const myInstallationList = data.filter(appData =>
      convertedAppData.includes(appData.id)
    );
    setInstallList(myInstallationList);
  }, [data]);

  const handleSort = (type) => {
    setSort(type);
    let sortedList = [];

    if (type === 'high-low') {
      sortedList = [...installList].sort(
        (a, b) => parseDownloads(b.downloads) - parseDownloads(a.downloads)
      );
    } else if (type === 'low-high') {
      sortedList = [...installList].sort(
        (a, b) => parseDownloads(a.downloads) - parseDownloads(b.downloads)
      );
    }

    setInstallList(sortedList);
  };

  return (
    <div className='mt-5 md:mt-15 max-w-[1200px] mx-auto p-2'>
      {/* title */}
      <div className='flex flex-col items-center justify-center mt-20 max-w-[1000px] mx-auto'>
        <h2 className='text-3xl  md:text-4xl font-bold text-center'>Your Installed Apps</h2>
        <p className='text-center  text-[#627382] mt-4'>
          Explore All Apps on the Market developed by us.
        </p>
      </div>

      {/* sort and app found */}
      <div className='flex justify-between items-center mt-10 mb-5'>
        <span className='font-medium   md:font-semibold text-xl md:text-2xl'>
          {installList.length} Apps Found
        </span>
        <div className='flex justify-center'>
          <details className='dropdown'>
            <summary className='btn m-1 text-xs md:text-xl text-green-500'>
              Sort By Downloads: {sort ? sort.toUpperCase() : 'NONE'}
            </summary>
            <ul className='menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm text-green-500'>
              <li>
                <a onClick={() => handleSort('high-low')}>High → Low</a>
              </li>
              <li>
                <a onClick={() => handleSort('low-high')}>Low → High</a>
              </li>
            </ul>
          </details>
        </div>
      </div>

      {/* installation list */}
      {installList.map((app) => (
        <InstallationList
          key={app.id}
          app={app}
          setInstallList={setInstallList}
          installList={installList}
        />
      ))}
    </div>
  );
};

export default MyInstallation;

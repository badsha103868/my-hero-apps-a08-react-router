import React from 'react';
import Banner from '../../Components/Banner/Banner';
import TopApps from '../TopApps/TopApps';
import { useLoaderData } from 'react-router';

const Home = () => {
  
  // fetch data received
   const data = useLoaderData();
   console.log(data)
   const homeData = data.slice(0, 8)
  //  console.log(data)

  return (
    <div>
      <Banner></Banner>
      <TopApps  homeData={ homeData}></TopApps>
    </div>
  );
};

export default Home;
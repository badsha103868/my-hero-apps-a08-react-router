import React from 'react';
import Navbar from '../../Components/Header/Navbar';
import Footer from '../../Components/Footer/Footer';
import { Outlet, useNavigation } from 'react-router';
import { ToastContainer } from 'react-toastify';
import logoImg from '../../assets/logo.png'
import ScrollTop from '../../Components/ScrollTop/ScrollTop';

  

const Root = () => {
   
  // use Navigation

  const navigation = useNavigation()
  const isNavigating = Boolean(navigation.location)

   
  return (
    <div className='mx-w-[1200px] mx-auto'>
      <Navbar></Navbar>
        
        {/* Loading spinner */}
        {
          isNavigating&& (<div className="fixed inset-0 flex justify-center items-center bg-white bg-opacity-50 z-50 ">
             <span className='text-4xl font-bold'>L</span>
             <img src={logoImg} alt="Loading..."  className="w-10 h-10 animate-spin m-2" /> 
             <span className='text-4xl font-bold'>A D I N G</span>
        </div>)
        }
         <ScrollTop></ScrollTop>
         <Outlet></Outlet>

       <Footer></Footer>

        {/* ToastContainer */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Root;
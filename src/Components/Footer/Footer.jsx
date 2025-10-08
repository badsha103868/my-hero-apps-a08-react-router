import React from 'react';
import fbImg from '../../assets/fb.png'
import twitterImg from '../../assets/twitter.png'
import linkedinImg from '../../assets/linkedIn.png'
import logoImg from '../../assets/logo.png'

const Footer = () => {
  return (
  <footer className="footer flex flex-col sm:flex-row sm:flex-wrap md:justify-between lg:justify-evenly bg-[#001931] text-base-content p-10">
  {/* Hero Apps Section */}
  <nav className="mb-6 sm:mb-0 max-w-xs">
    <div  className='flex items-center gap-1'>
      <img className='w-[30px] h-[30px]' src={logoImg} alt="" />
    <h6 className="footer-title text-lg font-semibold text-white">Hero Apps</h6>
    </div>
    <p className="text-sm leading-relaxed text-white">
      Hero Apps empowers creators and businesses to build powerful, modern web
      experiences with speed and simplicity. Deliver innovation — faster and smarter.
    </p>
  </nav>

  {/*Services  */}
  <nav className="mb-6 sm:mb-0 text-white">
    <h6 className="text-white footer-title text-lg font-semibold">Services</h6>
    <a className="link link-hover">Custom Web App Development</a>
    <a className="link link-hover">UI/UX Design Solutions</a>
    <a className="link link-hover">Cloud Integration</a>
    <a className="link link-hover">AI & Automation Tools</a>
    
  </nav>

  {/* Company */}
  <nav className="mb-6 sm:mb-0 text-white">
    <h6 className="footer-title text-lg font-semibold">Company</h6>
   <a className="link link-hover">About Hero Apps</a>
    <a className="link link-hover">Our Mission</a>
    <a className="link link-hover">Careers</a>
    <a className="link link-hover">Partnerships</a>
  </nav>

  {/* Social */}
  <nav className='text-white'> <h6 className="footer-title">Social</h6>
   <div className="grid grid-flow-col gap-4"> 
  
       <a> <img src={fbImg} alt="" /></a>
       <a> <img src={twitterImg} alt="" /></a>
       <a> <img src={linkedinImg} alt="" /></a>


    </div> </nav>
   {/* 🔸 Copyright Bar */}
 <div className="w-full text-center flex items-center justify-center mt-8 border-t border-gray-700 pt-4 text-white">
        © 2025 Hero Apps. All Rights Reserved.
      </div>
</footer>
  );
};

export default Footer;
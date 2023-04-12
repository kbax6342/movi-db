import React from 'react';
import large from '../../assets/Movi-large.png';

const Footer = () => {
  return (
    <div className='flex flex-wrap justify-between px-5 bg-[#1a1b4b] items-start text-white'>
     
      <div className='hidden md:block pb-10'>
        <img src={large} alt='' className='max-w-xs' />
        <div className='bg-white p-5 text-blue-950 font-bold rounded-xl w-fit uppercase ml-auto'>Hi kbax6342</div>
      </div>
      <div className='mt-[100px]'>
        <div className='text-bold text-2xl uppercase'>The basics</div>
        <div className='text-base'>About Movi DB</div>
        <div  className='text-base'>Contact Us</div>
        <div  className='text-base'>Support Forums</div>
        <div  className='text-base'>API</div>
        <div  className='text-base'>System Status</div>
      </div>
      <div  className='mt-[100px]'>
        <div className='text-bold text-2xl uppercase'>Get Inovolveed</div>
        <div  className='text-base'>Contribution Bible</div>
        <div  className='text-base'>Add New Movie</div>
        <div  className='text-base'>Add New TV Show</div>
      </div>
      <div  className='mt-[100px]'>
        <div className='text-bold text-2xl uppercase'>Community</div>
        <div  className='text-base'>Guidelines</div>
        <div  className='text-base'>Discussions</div>
        <div className='text-base'>Leaderboard</div>
        <div className='text-base'>Twitter</div>
      </div>
      <div  className='mt-[100px]'>
        <div className='text-bold text-2xl uppercase'>Legal</div>
        <div className='text-base'>Terms of Use</div>
        <div className='text-base'>API Terms of Use</div>
        <div className='text-base'>Privacy Policy</div>
       
      </div>
    </div>
  );
};

export default Footer;

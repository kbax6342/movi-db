import React, { useState } from 'react';
import small from '../../assets/Movi.png';
import { FaPlus, FaSearch, FaUser, FaVirusSlash } from 'react-icons/fa';
import Login from "../../pages/Login/Login"

import { Link } from 'react-router-dom';
import User from '../User/User';

const Navbar = ({props}) => {
  const [visible, setvisible] = useState(false);
  const handleClick = (e) => {
    setvisible(!visible ? true : false);

  };
  const [name, setname] = useState("")
  return (
    <div className='flex bg-[#1a1b4b] text-white justify-between px-3'>
      <div className='flex gap-10 items-center font-semibold'>
        <Link to='/'>
          <img src={small} className='max-w-[150px]' />
        </Link>
        <div className='text-base'>Movies</div>
        <div className='text-base'>TV Shows</div>
        <div className='text-base'>People</div>
        <div className='text-base'>More</div>
      </div>
      <div className='flex gap-8 items-center font-semibold'>
        <div className='flex items-center' onClick={handleClick}>
          <FaPlus />
          <FaUser />
          <span>This is {name}</span>
        </div>
        <button className='border p-1 text-lg'>EN</button>
        <div className='text-base'>Login</div>
        <div className='text-base'>Join TMDB</div>
        <FaSearch className='text-2xl' />
        {/* {visible && (
          <div id='user' className='absolute top-[20%] left-[30%] rounded-lg bg-white p-5 w-5/12 z-10'>
            <User visible={visible} />
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Navbar;

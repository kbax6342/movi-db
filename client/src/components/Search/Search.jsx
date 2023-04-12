import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Search = () => {
  const [search, setsearch] = useState('');
  const [value, setvalue] = useState('');
  const [location, setlocation] = useState({});

  const handleChange = (e) => {
    setsearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const location = {
      pathname: `/search/${search}`,
      state: { fromDashboard: true }
    }
    return location;
  }


  return (
    <div className="bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0),rgba(41,42,115,0.9)),url('https://images.pexels.com/photos/3945317/pexels-photo-3945317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] h-[400px] bg-no-repeat  bg-cover  bg-center  text-left px-[150px] flex  flex-col justify-center ">
      <p className='text-[5rem] font-bold text-white leading-[4rem] '>
        Welcome.
      </p>
      <p className='text-4xl font-medium text-white'>
        Millions of movies, TV Shows and people to discover. Explore now.
      </p>
      <div className='mt-5 flex items-center '>
        <input
          type='search'
          onChange={handleChange}
          onSubmit={handleSubmit}
          name='search'
          className='rounded-lg w-8/12 h-12 mr-3'
        />
        <label for='search' />
        <Link to={`/search/${search}`}>
          <div className='bg-white text-base w-fit px-3 py-2'>Submit</div>
        </Link>
     
      </div>
    </div>
  );
};

export default Search;

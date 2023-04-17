import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Navigate } from "react-router-dom";

const Genre = () => {
  const [genre, setgenre] = useState([]);
  const [loading, setloading] = useState(true)
  useEffect(() => {
    const getGenre = async () => {
      try {
        const res = await axios.get(
          'https://api.themoviedb.org/3/genre/movie/list?api_key=6e3994632ccdca23fd457df2468b20c0&language=en-US'
        );
        setgenre(res.data.genres);
        setloading(false)
        console.log(genre);
      } catch (err) {
        console.log(err);
      }
    };

    getGenre();
  }, [genre]);

  const handleClick = () => {};

  return (
    <>
      <div className='flex overflow-auto w-11/12 mx-auto my-5'>
      
        {genre && genre.map((item) => (
            <a href={`/genre/${item.id}`}>
           <div className='bg-[#5153ba] h-[300px] min-w-[200px] justify-between mr-5 rounded-lg items-center text-center cursor-pointer'>
            <p className='text-white flex-col  text-2xl font-bold   mt-[50%]'>
               {item.name}
             </p>
           </div>

            </a>
         ))}
      </div>
    </>
  );
};

export default Genre;

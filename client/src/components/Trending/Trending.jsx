import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Trending.scss';
import Card from '../Card/Card';

export const Trending = ({ type }) => {
  const [movies, setmovies] = useState([]);
  const [weekMovies, setweekMovies] = useState([]);
  const [view, setview] = useState(true);
  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await axios.get(
          'https://api.themoviedb.org/3/trending/movie/day?api_key=' +
            process.env.REACT_APP_API_KEY
        );
        setmovies(res.data.results);
      } catch (err) {
        console.log(err);
      }
    };

    getMovies();
  }, []);

  const handleClick = async () => {
    setview(false);
    
    try {
      const res = await axios.get(
        'https://api.themoviedb.org/3/trending/movie/week?api_key=' +
          process.env.REACT_APP_API_KEY
      );
     
      setweekMovies(res.data.results);
    } catch (err) {
      console.log(err);
    }
  };



  const handleClickToday = () => {
    setview(true);
    
  };


  return (
    <div className='px-5'>
      <div className='mt-5'>
        <p className='text-3xl font-semibold'>{type}:</p>
        <div
          id='info'
          className='flex items-center w-fit info border rounded-full my-3 p-0'
        >
          <button

            className='' 
            onClick={handleClickToday}
          >
            Today
          </button>

          <button className='other' onClick={handleClick}>
            This Week
          </button>
        </div>
        <div className='flex overflow-x-scroll gap-3 mx-5'>
          {view
            ? movies?.map((item) => (
                <div key={item.id} className='min-w-fit'>
                  <Link to={`/details/${item.id}`}>
                    {/* <img
                  src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                  alt=''
                  className='rounded-lg drop-shadow-xl'
                />
                <p className='text-base mt-5  font-medium'>{item.title}</p>
                <div className='flex justify-between'>
                  <p className='text-base'>{item.release_date}</p>
                  <p className='mr-5'>{Math.floor(item.vote_average)} of 10</p>
                </div> */}
                    <Card
                      title={item.title}
                      url={item.poster_path}
                      release={item.release_date}
                      average={item.vote_average}
                    />
                  </Link>
                </div>
              ))
            : weekMovies?.map((item) => (
                <div key={item.id} className='min-w-fit'>
                  <Link to={`/details/${item.id}`}>
                    {/* <img
                  src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                  alt=''
                  className='rounded-lg drop-shadow-xl'
                />
                <p className='text-base mt-5  font-medium'>{item.title}</p>
                <div className='flex justify-between'>
                  <p className='text-base'>{item.release_date}</p>
                  <p className='mr-5'>{Math.floor(item.vote_average)} of 10</p>
                </div> */}
                    <Card
                      title={item.title}
                      url={item.poster_path}
                      release={item.release_date}
                      average={item.vote_average}
                    />
                  </Link>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

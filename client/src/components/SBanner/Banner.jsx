import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { RxDotFilled } from 'react-icons/rx';
import axios from 'axios';
import './Banner.scss';

const Banner = () => {
  var number = Math.floor(Math.random(15));
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await axios.get(
          'https://api.themoviedb.org/3/trending/movie/day?api_key=' +
            '6e3994632ccdca23fd457df2468b20c0'
        );
        setmovies(res.data.results);
        console.log(movies);
      } catch (err) {
        console.log(err);
      }
    };

    getMovies();
  }, []);

  //const answer = `https://image.tmdb.org/t/p/w500${movies[1].poster_path}`

  return (
    <div
      className='px-5 flex bg-purple-400 justify-between gap-5 py-5 bg-cover  background-overlay object-center'
      //style={{ backgroundImage: `url(${answer})` }}
    >
      <div className='flex flex-col w-1/2'>
        <p className='text-1xl font-bold'>Join Today</p>
        <p>
          Get access to maintain your own custom personal lists, track what
          you've seen and search and filter for what to watch next—regardless if
          it's in theatres, on TV or available on popular streaming services
          like Netflix, Amazon Prime Video, Disney Plus, Apple TV Plus, and
          fuboTV.
        </p>
        <button>Sign Up</button>
      </div>
      <div className='text-left w-1/2 '>
        <ul className='w-4/5 mx-auto'>
          <li className='flex items-center'>
            <RxDotFilled />
            Enjoy TMDB ad free
          </li>
          <li className='flex items-center'>
            <RxDotFilled />
            Maintain a personal watchlist
          </li>
          <li className='flex items-center'>
            <RxDotFilled />
            Filter by your subscribed streaming services and find something to
            watch
          </li>
          <li className='flex items-center'>
            <RxDotFilled />
            Log the movies and TV shows you've seen
          </li>
          <li className='flex items-center'>
            <RxDotFilled />
            Build custom lists
          </li>
          <li className='flex items-center'>
            <RxDotFilled />
            Contribute to and improve our database
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Banner;

import React, { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Player from '../../components/Player/Player';
import { FaPlayCircle } from 'react-icons/fa';
import { FaHeart, FaList, FaBookmark, FaStar } from 'react-icons/fa';

const Details = () => {
  const [movies, setmovies] = useState([]);
  const [you, setyou] = useState([]);
  const [videos, setvideos] = useState([]);
  const [loading, setloading] = useState(true);
  const { id } = useParams();

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get(
          'https://api.themoviedb.org/3/movie/' +
            id +
            '?api_key=' +
            process.env.REACT_APP_API_KEY
        );

        const resYou = await axios.get(
          'https://api.themoviedb.org/3/movie/' +
            id +
            '/videos?api_key=6e3994632ccdca23fd457df2468b20c0&language=en-US'
        );

        setvideos(resYou.data.results);
        console.log(videos);
        videos.map((item) =>
          item.type === 'Trailer'
            ? setyou(resYou.data.results[0].key) + setloading(true)
            : setloading(false)
        );
        console.log(loading);
        console.log(you);
        setmovies(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, []);
  return (
    <div>
      <div className='flex p-5'>
        <div className='mr-5'>
          <img
            src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
            alt=''
            className='w-[300px] rounded-lg'
          />
        </div>
        <div className='flex flex-col justify-center'>
          <p className='text-3xl'> {movies.title}</p>
          <div>
            <p className='text-base'>NR</p>
            <span className='text-base'>10/06/2022</span>
            <span className='text-base'>Horror</span>
            <span className='text-base'>2h 18m</span>
          </div>
          <section className='flex'>
            <div>70%</div>
            <span>User Score</span>
            <FaHeart />
            <FaBookmark />
            <FaList />
            <FaStar />
            <Button
              variant='primary'
              onClick={handleShow}
              className='flex items-center'
            >
              <FaPlayCircle /> Player Trailer
            </Button>
            {loading ? (
              <Player you={you} show={show} handleClose={handleClose} />
            ) : (
              'There is no trailer'
            )}
          </section>
        </div>
      </div>
    </div>
  );
};
export default Details;

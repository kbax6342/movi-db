import React, { useState, createContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from '../../LoginValidation';
import axios from 'axios';


const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [movies, setmovies] = useState([]);
  const [email, setEmail] = useState('');
  const Name = createContext();
  const headers = {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
  };

  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await axios.get(
          'https://api.themoviedb.org/3/trending/movie/day?api_key=' +
            process.env.REACT_APP_API_KEY
        );
        setmovies(res.data.results[2]);
      } catch (err) {
        console.log(err);
      }
    };

    getMovies();
  }, []);

  const navigation = useNavigate();
  const videoURL = [
    'https://www.10wallpaper.com/wallpaper/1366x768/2212/Avatar_2_The_Way_of_Water_James_Cameron_5K_Poster_1366x768.jpg',
    'https://www.10wallpaper.com/wallpaper/1366x768/2212/Thor_Love_and_Thunder_Viking_Marvel_Films_5K_1366x768.jpg',
    'https://www.10wallpaper.com/wallpaper/1366x768/1512/2015_The_Peanuts-Movie_posters_HD_Wallpaper_1366x768.jpg',
    'https://www.10wallpaper.com/wallpaper/1366x768/1512/Harry_Potter_And_The_Deathly_Hallows-Movie_posters_HD_Wallpaper_1366x768.jpg',
  ];

  var value = Math.floor(Math.random(4));
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
    setErrors(Validation(values));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (errors.name === '' && errors.email === '' && errors.password === '') {
      axios
        .post('http://localhost:3002/api/login', values)
        .then((res) => {
          if (res.status === 200) {
            navigation('/home');
            setEmail(res.data.name);
          } else {
            alert('No record exists');
          }
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className='w-full bg-black'>
      <div
        className='flex justify-center  bg-no-repeat bg-cover bg-center rounded-lg h-screen  mx-auto'
        style={{ backgroundImage: `url(${videoURL[value]})` }}
      >
      
      
        <div className='bg-white rounded-lg p-5 h-fit flex justify-center mt-[10%]'>
          <form action='' className='flex flex-col' onSubmit={handleSubmit}>
            <div className='mb-3 flex flex-col'>
              <label htmlFor='emial'>Email</label>
              <input
                type='email'
                onChange={handleChange}
                name='email'
                placeholder='Enter email'
              />
            </div>
            <span className='text-red-500'>{errors.email}</span>
            <div className='mb-3 flex flex-col'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                onChange={handleChange}
                name='password'
                placeholder='Enter Password'
              />
            </div>
            <span className='text-red-500'>{errors.password}</span>
            <button
              type='submit'
              class='focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
            >
              Log in
            </button>
            <div className='flex items-center'>
              <input type='checkbox' className='mr-2' />
              <p>Agree to our terms and policies</p>
            </div>
            <Link
              to='/signup'
              type='button'
              class='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 mt-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
            >
              Sign Up
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

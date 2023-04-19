import React, { useState } from 'react';
import Validation from '../../LoginValidation';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [phone, setphone] = useState('');
  const [password, setPassword] = useState('');
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const value = 'The user was added';
  const headers = {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
  };

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
    console.log(values);
    setErrors(Validation(values));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   if(errors.name === "" && errors.email === "" && errors.password === ""){

     axios
       .post('http://localhost:3002/api/create', values, {
         headers: headers,
       })
       .then((response) => {
         console.log(response)
         
         navigate("/")
       })
       .catch((error) => console.log(error));
   }
    
  };
  return (
    <div className='flex justify-center'>
      <div>
        <form action='' className='flex flex-col' onSubmit={handleSubmit}>
          <div className='mb-3 flex flex-col'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              onChange={handleChange}
              name='name'
              placeholder='Enter name'
            />
          </div>
          <div className='mb-3 flex flex-col'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              onChange={handleChange}
              name='email'
              placeholder='Enter email'
            />
          </div>
          <span className='text-red-500'>{errors.email}</span>
          <div className='mb-1 flex flex-col'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              onChange={handleChange}
              name='password'
              placeholder='Enter Password'
            />
          </div>
          <span className='text-red-500'>{errors.password}</span>
          <span className='text-sm mb-3 text-gray-400'>Please add two  of the same numbers at the end of password.</span>
          <button
            type='submit'
            class='focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
          >
            Register
          </button>
          <div className='flex items-center'>
            <input type='checkbox' className='mr-2' />
            {value}
            <p>Agree to our terms and policies</p>
          </div>
          <Link
            to='/'
            type='button'
            class='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 mt-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
          >
            Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;

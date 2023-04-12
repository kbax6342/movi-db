import React, { useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import axios from 'axios';

const User = ({ visible }) => {
  const [people, setpeople] = useState([]);
  const [first, setfirst] = useState('');
  const [last, setlast] = useState('');
  const [email, setemail] = useState('');
  const [phone, setphone] = useState('');

  const headers = {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
  };

  const addPerson = (e) => {
    const userData = {
      first: first,
      last: last,
      email: email,
      phone: phone,
    };

    axios
      .post('http://localhost:3002/api/create', userData, {
        headers: headers,
      })
      .then((response) => {
        console.log(response);
        console.log(response.status);
      })
      .catch((error) => console.log(error));
  };

  const handleClick = (e) => {
    visible = false;
    return visible;
  };

  return (
    <>
      <div
        className='text-black text-2xl  flex justify-end'
        onClick={handleClick}
      >
        <IoMdClose />
      </div>
      <form
        className='flex flex-col  text-black text-base w-12/12'
        onSubmit={addPerson}
      >
        <label for='first'>First Name:</label>
        <input
          type='text'
          name='first'
          className='border w-full'
          onChange={(e) => setfirst(e.target.value)}
        />

        <label for='last'>Last Name:</label>
        <input
          type='text'
          name='last'
          className='border'
          onChange={(e) => setlast(e.target.value)}
        />

        <label for='email'>Email:</label>
        <input
          type='text'
          name='email'
          className='border'
          onChange={(e) => setemail(e.target.value)}
        />

        <label for='phone'>Phone:</label>
        <input
          type='text'
          name='phone'
          className='border'
          onChange={(e) => setphone(e.target.value)}
        />

        <button className='bg-black text-white p-2 w-5/12 mt-5'>Submit</button>
      </form>
    </>
  );
};

export default User;

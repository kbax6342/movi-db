import React from 'react';

const Card = ({title, release, average,url}) => {
  return (
    <div className='h-[500px]'>
      <img
        src={`https://image.tmdb.org/t/p/w500${url}`}
        alt=''
        className='rounded-lg drop-shadow-xl h-[400px]'
      />
      <p className='text-base mt-5  font-medium truncate title flex flex-wrap'>{title.substring(0,25)}</p>
      <div className='flex justify-between'>
        <p className='text-base'>{release}</p>
        <p className='mr-5'>{Math.floor(average)} of 10</p>
      </div>
    </div>
  );
};

export default Card;

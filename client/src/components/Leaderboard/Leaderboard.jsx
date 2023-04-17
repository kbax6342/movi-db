import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import profile from '../../assets/images.jpg';
import './Leaderboard.scss';

export const Leaderboard = () => {
  var value1 = 443596;
  var ano = 18062;
  var value2 = 800000;
  var min = 20000;

  var value3 = 722620;

  var value4 = 14845;

  var value5 = 56728;
  var value6 = 6202;

  var value7 = 545691;
  var value8 = 4964;

  var value9 = 6761;
  var value10 = 4137;

  function calclation(value, value2) {
    return Math.floor((value / value2) * 100);
  }

  return (
    <div className='px-5 my-5'>
      <p className='text-3xl font-bold'>Leaderboard:</p>
      <div className='flex flex-col md:flex-row mr-5 flex-wrap'>
        <div className='md:w-1/2 p-2 flex items-center'>
          <img src={profile} alt='' className='rounded-full h-28 mr-5' />
          <div className='flex flex-col justify-center w-full'>
            <p className='text-2xl'>Ruizafon</p>
            <div className=' h-14 flex flex-col  justify-between '>
              <div className='flex'>
                <ProgressBar
                  striped
                  now={calclation(value1, value2)}
                  label={`${calclation(value1, value2)}%`}
                  className='h-6 w-4/5  mr-2'
                />
                <span>{value1}</span>
              </div>

              <div className='flex'>
                <ProgressBar
                  striped
                  now={calclation(ano, min)}
                  label={`${calclation(ano, min)}%`}
                  className='h-6 w-4/5 mr-2'
                />
                <span>{ano}</span>
              </div>
            </div>
          </div>
        </div>
        <div className='md:w-1/2 p-2 flex items-center'>
          <img src={profile} alt='' className='rounded-full h-28 mr-5' />
          <div className='flex flex-col justify-center w-full'>
            <p className='text-2xl'>Smile587</p>
            <div className='h-14 flex flex-col  justify-between'>
              <div className='flex'>
                <ProgressBar
                  striped
                  now={calclation(value3, value2)}
                  label={`${calclation(value3, value2)}%`}
                  className='h-6 w-4/5 mr-2'
                />
                <span>{value3}</span>
              </div>

              <div className='flex'>
                <ProgressBar
                  striped
                  now={calclation(value4, min)}
                  label={`${calclation(value4, min)}%`}
                  className='h-6 w-4/5 mr-2'
                />
                <span>{value4}</span>
              </div>
            </div>
          </div>
        </div>
        <div className='md:w-1/2 p-2 flex items-center'>
          <img src={profile} alt='' className='rounded-full h-28 mr-5' />
          <div className='flex flex-col justify-center w-full'>
            <p className='text-2xl'>Smile587</p>
            <div className='h-14 flex flex-col  justify-between'>
              <div className='flex'>
                <div id='progress-1' className='w-full flex'>
                  <ProgressBar
                    striped
                    now={calclation(value3, value2)}
                    label={`${calclation(value3, value2)}%`}
                    className='h-6 w-4/5 mr-2'
                  />
                <span>{value3}</span>
                </div>

              </div>
             
              <div className='flex'>
                <ProgressBar
                  striped
                  now={calclation(value4, min)}
                  label={`${calclation(value4, min)}%`}
                  className='h-6 w-4/5 mr-2'
                />
                <span>{value4}</span>
              </div>
            </div>
          </div>
        </div>
        <div className='md:w-1/2 p-2 flex items-center'>
          <img src={profile} alt='' className='rounded-full h-28 mr-5' />
          <div className='flex flex-col justify-center w-full'>
            <p className='text-2xl'>heli5m</p>
            <div className='h-14 flex flex-col  justify-between'>
              <div className='flex'>
                <div id='progress-1' className='w-full flex'>
                  <ProgressBar
                    striped
                    now={calclation(value7, value2)}
                    label={`${calclation(value7, value2)}%`}
                    className='h-6 w-4/5 mr-2'
                  />
                  <span>{value7}</span>
                </div>
              </div>
             
              <div className='flex'>
                <ProgressBar
                  striped
                  now={calclation(value8, min)}
                  label={`${calclation(value8, min)}%`}
                  className='h-6 w-4/5 mr-2'
                />
                <span>{value8}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

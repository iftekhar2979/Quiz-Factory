import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';

import { topicsContext } from '../Root/Root';

const Statistics = () => {
  const questionStatistics = useContext(topicsContext);
  const data = questionStatistics.data;
  return (
    <>
      <section className='bg-gray-800 text-gray-100'>
        <div className='container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between'>
          <div className='flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128'>
            <div className=''>
              <LineChart
                width={500}
                height={300}
                data={data}
                margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
              >
                <Line
                  type='monotone'
                  dataKey='total'
                  stroke='#8884d8'
                  fill='#8884d8'
                />
                <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
                <XAxis dataKey='name' />
                <YAxis fill='#8884d8' />
                <Tooltip fill='#8884d8'/>
              </LineChart>
            </div>
          </div>
          <div className='flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left'>
            <h1 className='text-5xl font-bold leading-none sm:text-6xl'>
              This is Our 
              <span className='text-violet-400'> Statistics </span>
              <span className='text-violet-400'> of Topics </span>Questions
            </h1>
            <p className='mt-6 mb-8 text-lg sm:mb-12'>
            Play Quiz and Get Satisfaction
            </p>
            <div className='flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start'>
              <Link
                rel='noopener noreferrer'
                to='/'
                className='px-8 py-3 text-lg font-semibold rounded border hover:bg-sky-600 text-gray-200'
              >
                Topics
              </Link>
              <Link
                rel='noopener noreferrer'
                to='/blog'
                className='px-8 py-3 text-lg font-semibold  rounded border hover:bg-sky-600 text-gray-200'
              >
                Blogs
              </Link>
            </div>
          </div>
        </div>
        <div className='flex justify-center'>
            <img src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?w=996&t=st=1669037926~exp=1669038526~hmac=a0998579dd6c3c9d16e0d7be6d0f3fcb70df5034fcc2d8ce3a3b6750aedb4fab" alt="" srcset="" />
        </div>
      </section>
    </>
  );
};

export default Statistics;

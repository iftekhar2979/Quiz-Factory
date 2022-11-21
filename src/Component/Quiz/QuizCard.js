import React from 'react';
import { Link } from 'react-router-dom';
const QuizCard = ({ data }) => {
  const { id, logo, name, total } = data;
  
  return (
    <div>
      <div className='card card-compact md:m-2 w-auto bg-sky-100 shadow-xl'>
        <figure>
          <img src={logo} alt='Shoes' />
        </figure>
        <div className='card-body'>
          <h2 className='card-title text-2xl font-bold'>{name}</h2>
          <p className='text-lg'>Total Quiz : {total}</p>
          <div className='card-actions justify-end'>
          <Link to={`/${id}`}> <button className='btn btn-primary' >
           
              Go to Quiz
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75'
                />
              </svg>
              
            </button></Link>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizCard;

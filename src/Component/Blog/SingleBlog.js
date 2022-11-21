import React, { useState } from 'react';
import './SingleBlog.css';
const SingleBlog = ({ data }) => {
  const [readMore,setreadMore]=useState(false)
  const {img,question,answer}=data
  return (
    <div className='flex justify-center items-center my-4 border shadow-sm '>
      <div className='w-1/3 my-4 '>
        <img src={img} className='' alt='' />
      </div>
      <div className='mx-4  w-1/2 my-4'>
        <h2 className='text-3xl font-bold'>{question}</h2>
        <h4 className='text-xl '> {readMore ? answer : `${answer.substring(0, 150)}...`}</h4>
        <button className='text-blue-700 text-xl' onClick={() => setreadMore(!readMore)}>
            {readMore ? 'show less' : '  read more'}
          </button>
      </div>
      <hr />
    </div>
  );
};

export default SingleBlog;

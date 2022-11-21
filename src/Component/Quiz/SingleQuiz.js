import React, { useState } from 'react';
import AnswerToggle from './AnswerToggle';
import Option from './Option';
import './quiz.css';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleQuiz = ({ data, setState ,state}) => {
  const [isAnswer, setisAnswer] = useState(false);
  const [answer, setAnswer] = useState('');
  const [isActive,setIsActive]=useState(false)
  const { question, id, correctAnswer, options } = data;
  const handleClick = (option) => {
    const dataArr = Object.values(data);
    const findingAnswer = dataArr.includes(option);
    if (findingAnswer) {
      setIsActive(true)
      toast.success('You Are Right!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      // console.log(findingAnswer);
      setState((old) => [...old, Object.assign({}, dataArr)]);
    } else {
      toast.error('You are Wrong!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
    
    
  };
  const handletoggle = (id) => {
    if (id === data.id) {
      setAnswer(data.correctAnswer);
    }
    setisAnswer(!isAnswer);
  };

  return (
    <>
      <div className='flex justify-between items-center'>
        <h2 className='headings w-11/12'>{question}</h2>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-12  h-12 p-2  text-white'
          onClick={() => handletoggle(id)}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z'
          />
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
          />
        </svg>
      </div>
      <div className=''>
        <ul className='text-xl pl-4'>
          <ToastContainer
            position='top-center'
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme='light'
          />
          {options.map((option, index) => (
            <Option
              key={index}
              handleClick={handleClick}
              option={option}
              answer={answer}
              active={isActive}
            ></Option>
          ))}
          {}
        </ul>
        {answer ? <AnswerToggle answer={answer} /> : ''}
      </div>
    </>
  );
};

export default SingleQuiz;

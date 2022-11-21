import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './quiz.css';
import SingleQuiz from './SingleQuiz';
const Quiz = () => {
  const quizes = useLoaderData();
  //   console.log(quizes);
  const [mystate, setMystate] = useState([]);
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const { id, total, name, logo, questions } = quizes.data;
  // console.log(mystate);
  const handleReset = () => {
    setMystate([]);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <section>
      <div className='flex justify-center my-6'>
        <div>
          <h2 className='text-2xl font-bold my-2'>Total Quiz : {total}</h2>
          <img src={logo} alt={name} className='w-36 my-2 bg-cyan-900' />
          <h2 className='text-2xl my-2 font-bold'>
            <span className='text-indigo-500'>{name}</span> Quiz
          </h2>
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='w-10/12 my-6 bg-custom'>
          {questions.map((question, index) => (
            <SingleQuiz
              key={index}
              setState={setMystate}
              index={index}
              data={question}
            ></SingleQuiz>
          ))}
          <div className='text-center'>
            <a
              className='btn border-sky-400 my-6 bg-transparent hover:bg-sky-400'
              href='#my-modal-2'
            >
              Result
            </a>

            <div className='modal' id='my-modal-2'>
              <div className='modal-box w-11/12 max-w-5xl'>
                <h3 className='font-bold text-md'>Congratulations</h3>
                <p className='text-md'>
                  {mystate.length <= 5
                    ? `Your ${name} Mark  is ${mystate.length} Your have to practice more`
                    : `Your Mark ${name} is ${mystate.length} `}
                </p>
                <div className='modal-action'>
                  <a
                    href='#'
                    className='btn border-red-400 bg-transparent hover:bg-red-400  text-black'
                    onClick={handleReset}
                  >
                    Restart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <h2>Your Total answer is {mystate.length}</h2> */}
    </section>
  );
};

export default Quiz;

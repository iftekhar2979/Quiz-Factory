import React from 'react';

const TopicsHero = () => {
  return (
    <div>
      <section>
        <div className='dark:bg-violet-400'>
          <div className='container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900'>
            <h1 className='text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-900'>
              If Your Journey for Web Development
            </h1>
            <p className='mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-900'>
              A great Quizz platform is ready for you to craking the Job .
            </p>
            <div className='flex flex-wrap justify-center'>
              <button
                type='button'
                className='px-8 py-3 m-2 text-lg font-semibold rounded bg-sky-100 text-gray-900'
              >
                Get started with Our Quiz
              </button>
              <button
                type='button'
                className='px-8 py-3 m-2 text-lg border rounded hover:bg-sky-100 hover:transition hover:ease-in border-gray-700 text-gray-900'
              >
                Learn more
              </button>
            </div>
          </div>
        </div>
        <img
          src='https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
          alt=''
          className='w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 bg-gray-500'
        />
      </section>
    </div>
  );
};

export default TopicsHero;

import React from 'react';

const AnswerToggle = ({answer}) => {
   
    return (
        <div>
            <h2 className=' text-2xl ml-8 my-4 bg-green-600 text-yellow-200 p-4 w-1/2'>Correct Answer : {answer}</h2>
        </div>
    );
};

export default AnswerToggle;
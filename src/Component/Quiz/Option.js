import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import './quiz.css';

const Option = ({option,handleClick}) => {
  
    return (
        <>
        <li onClick={()=>handleClick(option)} className='options'>{option}</li>
       
        
        </>
    );
};

export default Option;
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import './quiz.css';

const Option = ({option,handleClick,active}) => {
    return (
        <>
        <li onClick={()=>handleClick(option)} className={`options ${active?'bg-green-600':''}`} >{option}</li>  
        </>
    );
};

export default Option;
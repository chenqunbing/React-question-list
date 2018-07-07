import React from 'react';
import './problem.css';

const problem = props=>{
    const { question } =props;
    return (
        <div>
            <label htmlFor='problem'>问题</label>
            <input className='problem' id='problem' type='text' placeholder={question}  />
        </div>
    )
}

export default problem;
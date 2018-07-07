import React from 'react';
import Problem from './Problem';
import Option from './Option';
import './box.css';



const box = props=>{
    const { dataSource } =props;
    return (
        <div>
            {
                dataSource.map((item,index)=>{
                    return(
                        <div key={index} className='box'>
                            <Problem question={ item.question } />
                            <Option listIndex={index}  list={ item.list } deleteOption={props.deleteOption}/>
                            <a className='addOption'  onClick={()=>props.addOption(index)} >+</a>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default box;
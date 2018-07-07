import React from 'react';
import './option.css';


 const option = props=>{
     const { list,listIndex } = props;
     return(
         <div>
             {
                 list.map((item,index)=>{
                     {
                         var letter='ABCDEFGHIJKLMNOPQRSTUVWXYZ'.charAt(index%36);
                     }
                     return (
                         <div key={index}  className='options'>
                            <label htmlFor='optionA' >选项{letter}</label>
                            <input className='option' id='optionA' type='text' placeholder={item.title} />
                            <input type='checkbox' defaultChecked={item.isTrue} />
                            <span>正确答案</span>
                            <button className='delete'  onClick={()=>props.deleteOption(index,listIndex)} >Delete</button>
                         </div>
                     )
                 })
             }
         </div>
     )
 }

 export default option;
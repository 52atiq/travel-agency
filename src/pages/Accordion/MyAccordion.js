import React, { useState } from 'react';

const MyAccordion = ({question, answer}) => {
    const [show, setShow] = useState(false);
    return (
        <div className='bg-green-500 w-[500px] rounded-lg p-9'>

        <div className='main-heading flex justify-between '>
        
        <h3> {question}</h3>
        <p onClick={ ()=> setShow(!show)}> {show?'—':'+'} </p>
         
        </div>
       <div className='flex justify-center'>
       {
        show &&  <p className='answers'>{answer}</p>
       }
       </div>
           
        </div>
    );
};

export default MyAccordion;
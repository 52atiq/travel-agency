import React, { useState } from 'react';
import './accor.css';
import { questions } from './Accor';
import MyAccordion from './MyAccordion';
const Accordion = () => {
    const [data, setData] = useState(questions);
    return (
        <>
      <section className='main-div container mx-auto flex flex-col justify-center gap-8'>

      {
        data.map((curElem) =>{
            const {id} = curElem;
            return <MyAccordion key={id} {...curElem} />

        })
       }
      </section>
            
        </>
    );
};

export default Accordion;
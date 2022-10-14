import React, { useState } from 'react';
import Image from './Image';

const Extra = () => {
    const [color, setColor] = useState('red');
    const [active, setActive] = useState(0);

    
    return (
        <div className='container'>
           
            <div className='flex justify-center pt-9 gap-5'>
                <button onClick={()=>setColor('Green')} className={active? "text-green-600":"text-blue-500"}>Green</button>
                <button onClick={()=>setColor('Yellow')} className={active? "text-green-600":"text-blue-500"}>Yellow</button>
                <button onClick={()=>setColor('Blue')} className={active? "text-green-600":"text-blue-500"}>Blue</button>
                <button onClick={()=>setColor('Purple')} className={active? "text-green-600":"text-blue-500"}>Purple</button>
            </div>
            <h2 className='flex justify-center mt-4'> I Like {color} color</h2>
             <Image />
        </div>
    );
};

export default Extra;
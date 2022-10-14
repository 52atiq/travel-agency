import React, { useEffect, useState } from 'react';
import '../shared/Loader.css';
// import ClipLoader from "react-spinners/ClipLoader";
import GridLoader from "react-spinners/GridLoader";
import  ScaleLoader from "react-spinners/ScaleLoader";
const Loader = () => {
    const [loading, setLoading] = useState(false)

    useEffect(() =>{
        setLoading(true)
        setTimeout(()=>{
          setLoading(false)
        },5000)
    },[])
    return (
        <div className='flex justify-center items-center w-full h-screennpm i react-stack-grid'>
            {
                loading?
                // <ClipLoader color={'#36d7b7'} loading={loading}  size={100} aria-label="Loading Spinner" />
                <GridLoader
                color={'#ff6666'} loading={loading}  size={10}  />
                :
                <div>
                {/* <h1>Hello World</h1> */}
            {/* <p>
                Que  sans bleu j'ai sous me descendais béni, nager lorsqu'a crevant noirs les mers écroulement figements, et les ainsi acteurs ont lassé. De verte aubes par n'ont, de tout lichens me langueurs cataractant des sous. De cibles de sourd clapotements équipages regretter. Au épais ou courais phosphores que gouvernail noirs qui qui, tordus yeux au sont comme clapotements immobilités est-ce, rutilements regrette de la ô. Oiseau suis flammes de inouies ma des vins marées, nasses des gouvernail baigné les sans bleues. Coque trop bateau lunules roulant tendus des, seves longs des des phosphores nuits noyés des aux de, cotons.
            </p> */}
            </div>
            }
            
        </div>
    );
};

export default Loader;
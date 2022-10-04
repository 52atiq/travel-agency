import React, { useEffect, useState } from "react";

// const menu = [
//   {
//     id: 0,
//     image:
//       "https://media.istockphoto.com/photos/breakfast-with-bacon-eggs-pancakes-and-toast-picture-id533645537?k=20&m=533645537&s=612x612&w=0&h=KJXCpAo9XQvMI_djcnRMSsz_Y7OGS6z3-8VThxWyR0Q=",
//     name: "maggi",
//     category: "breakfast",
//     price: "$12",
//     description: "lorem vai",
//   },
//   {
//     id: 1,
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZKXNZaiz_zfsm7lEZEd14mYrr91_3Bhe8AmXZdtpQ&s",
//     name: "maggi",
//     category: "evening",
//     price: "$12",
//     description: "lorem vai",
//   },
//   {
//     id: 2,
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiFvpBt117-86L6r7QvhviFCMZnqjDuyux25I3QwOY&s",
//     name: "maggi",
//     category: "breakfast",
//     price: "$12",
//     description: "lorem vai 1",
//   },
//   {
//     id: 3,
//     image:
//       "https://image.shutterstock.com/image-photo/happy-multigeneration-family-gathering-around-260nw-1685806537.jpg",
//     name: "alli",
//     category: "evening",
//     price: "$42",
//     description: "lorem vai 2",
//   },
//   {
//     id: 4,
//     image:
//       "https://res.cloudinary.com/dtpgi0zck/image/upload/s--eWjIe4k---/c_fill,h_260,w_380/v1/EducationHub/photos/lightning-bolts.jpg",
//     name: "corm",
//     category: "dinner",
//     price: "$12",
//     description: "lorem vai 3",
//   },
//   {
//     id: 5,
//     image: "https://static01.nyt.com/images/2014/12/11/technology/personaltech/11machin-illo/11machin-illo-superJumbo-v3.jpg",
//     name: "pokga",
//     category: "lunch",
//     price: "$12",
//     description: "lorem vai 4",
//   },
// ];

const Destination = () => {
  // const [items, setItems]= useState(menu);

  const [services, setServices] = useState([]);

    useEffect( () =>{
         fetch('location.json')
         .then(res => res.json())
         .then(data => 
          setServices(data)
          // console.log(data)
        
         )
        
    },[services])
   
 
  const filterItem =(categItem)=> {
    const updateItems = services.filter((curElem) =>{
      return curElem.category === categItem;
    });
    setServices(updateItems);
  }

  return (
    <div className="container mx-auto mt-9">
      <h2 className="text-center">Order your favourite dish</h2>
      <div className="flex justify-center items-center gap-5 font-extrabold">
        <button className="text-amber-500 p-2 bg-amber-400 rounded-lg text-white" onClick={() => filterItem('breakfast')}> Breakfast</button>
        <button className="text-amber-500 p-2 bg-amber-400 rounded-lg text-white" onClick={() => filterItem('evening')}> Lunch</button>
        <button className="text-amber-500 p-2 bg-amber-400 rounded-lg text-white" onClick={() => filterItem('dinner')}> Evening</button>
        <button className="text-amber-500 p-2 bg-amber-400 rounded-lg text-white" onClick={() => filterItem('lunch')}> Dinner</button>
        {/* <button className="text-amber-500 p-2 bg-amber-400 rounded-lg text-white" onClick={() => setItems(menu)}> All</button> */}
        <button className="text-amber-500 p-2 bg-amber-400 rounded-lg text-white" onClick={() => setServices(services)}> All</button>
      </div>

      {/* my main items section  */}
      <div className="">
          <div className=" grid grid-cols-1 md:grid-cols-3 rounded-md gap-8 mt-5">
          {
            services.map((elem) =>{
                      const {id,name,image,description, price} =elem;

                      return(
                        <div className="flex flex-wrap gap-4 border border-green-600">
                        <img className="flex justify-center items-center w-[150px] h-[90px]" src={image} />
                        <h3> {name}</h3>
                        <p>{description}</p>
                      </div>
                        
                      )
            }) 
              
            
          }
         
          </div>

      </div>





    </div>
  );
};

export default Destination;

import React from 'react';
import GallaryProject from './GallaryProject';

function Gallary() {
 

  return (
    
    <div className="w-10/12 max-w-6xl m-auto my-20 lg:my-40 relative">
      <div className='grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-4'>
      <h2 className="uppercase font-bold font-josefin text-2xl text-center lg:text-4xl lg:col-span-2 lg:text-left lg:mb-14">
        Our Creations
      </h2>
      
     <button className=" hidden lg:block justify-center align-center border-2 uppercase font-josefin font-bold tracking-widest border-black w-6/12 py-3 justify-self-center
       px-8 lg:row-start-1 lg:col-span-2 lg:col-end-5 lg:justify-self-end lg:mb-14 hover:bg-black hover:text-white 
       duration-200 cursor-pointer focus:bg-black focus:text-white  lg:justify-center lg:w-3/12 lg:px-8 ">
        See All
      </button>
     </div>
      
      <GallaryProject/>
      
     
     <button className=" sm:hidden flex justify-center align-center border-2 uppercase font-josefin font-bold tracking-widest border-black w-6/12 py-3 justify-self-center
       px-8 lg:row-start-1 lg:col-span-2 lg:col-end-5 lg:justify-self-end lg:mb-14 hover:bg-black hover:text-white 
       duration-200 cursor-pointer focus:bg-black focus:text-white  lg:justify-center lg:w-3/12 lg:px-8 ">
        See All
      </button>
     
    </div>



    
  );
}

export default Gallary;

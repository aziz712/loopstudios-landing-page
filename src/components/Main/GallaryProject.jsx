import React from 'react';
import { desktopImages, mobileImages } from '../../assets/image';


function GallaryProject() {
  return (
    <div>
      {mobileImages.map(({ name, src }) => {
        return (
          <div
            className='relative sm:hidden group cursor-pointer'
          >
            <img
              key={name}
              src={src}
              alt={name}
              className='px-5 pt-10 pb-5  lg:h-xxl lg:px-6 lg:relative lg:top-10 '
            />

            <h3
              className={`text-4xl font-josefin text-white uppercase ${name === 'the Grid' ? 'w-3/12' : 'w-7/12 lg:w-6/12'
                } lg:absolute absolute top-19 left-10 duration-200 cursor-pointer group-focus:text-black`}
            >
              {name}
            </h3>

          </div>
        );
      })}

      <div className="hidden sm:grid sm:grid-cols-4 gap-4 w-full h-full">
        {desktopImages.map(({ name, src }) => {
          return (
            <div key={name} className="relative  cursor-pointer group">
              <img
                src={src}
                alt={name}
                className="w-full h-full group-hover:opacity-20  duration-200"
              />

              <h3
                className={`text-3xl font-josefin text-white uppercase ${name === 'the Grid' ? 'w-3/12 top-91' : 'w-7/12 lg:w-6/12'
                  } lg:absolute absolute top-90 left-10 group-hover:text-black duration-200 cursor-pointer`}
              >
                {name}
              </h3>
            </div>

          );
        })}
      </div>
    </div>
  );
}

export default GallaryProject;

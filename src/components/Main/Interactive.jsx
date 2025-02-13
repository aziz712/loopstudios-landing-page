import React from 'react';

import InteractiveImage from '../../assets/desktop/image-interactive.jpg';

function Interactive() {
  return (
    <div className="w-10/12 max-w-6xl m-auto lg:flex lg:justify-start lg:items-center lg:relative lg:mb-20">
      <div className="bg-interactive-mobile bg-no-repeat bg-cover mt-40 mb-10 lg:bg-interactive-desktop lg:mb-0">
        <img
          src={InteractiveImage}
          alt=""
          className="invisible"
          aria-hidden="true"
        />
      </div>
      <section className="text-center bg-white lg:text-left max-w-2xl lg:absolute lg:p-16 lg:pl-24 lg:pr-0 lg:pb-0 lg:bottom-0 lg:right-0">
        <h2 className="font-josefin uppercase text-4xl lg:text-6xl">
          The leader in interactive VR
        </h2>
        <p className="text-gray-500 font-bold mt-5 lg:text-xl lg:font-medium">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </section>
    </div>
  );
}

export default Interactive;

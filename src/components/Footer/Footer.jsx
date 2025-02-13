import React from 'react';

import Logo from '../../assets/logo.svg';

import FacebookIcon from '../../assets/icons/icon-facebook.svg';
import InstagramIcon from '../../assets/icons/icon-instagram.svg';
import PinterestIcon from '../../assets/icons/icon-pinterest.svg';
import TwitterIcon from '../../assets/icons/icon-twitter.svg';

function Footer() {
  return (
    <footer className="bg-black text-white text-center">
      <div className="grid py-10 w-10/12 max-w-6xl m-auto lg:grid-cols-2">
        <img
          className="justify-self-center lg:col-span-1 lg:justify-self-start"
          src={Logo}
          alt=""
          aria-hidden="true"
        />
        <ul className="nav-hover flex flex-col gap-4 text-xl my-10 lg:flex-row lg:my-0">
          <li>
            <a href="about">About</a>
          </li>
          <li>
            <a href="careers">Careers</a>
          </li>
          <li>
            <a href="events">Events</a>
          </li>
          <li>
            <a href="products">Products</a>
          </li>
          <li>
            <a href="support">Support</a>
          </li>
        </ul>
        <ul className="nav-hover-social flex justify-center gap-4 my-5 lg:col-start-2 lg:row-start-1 lg:justify-end">
          <li>
            <a href="facebook">
              <img src={FacebookIcon} alt="" aria-label="facebook" />
            </a>
          </li>
          <li>
            <a href="twitter" aria-label="twitter">
              <img src={TwitterIcon} alt="" />
            </a>
          </li>
          <li>
            <a href="pinterest">
              <img src={PinterestIcon} alt="" aria-label="pinterest" />
            </a>
          </li>
          <li>
            <a href="instagram">
              <img src={InstagramIcon} alt="" aria-label="instagram" />
            </a>
          </li>
        </ul>
        <p className="lg:text-right">
          © 2021 Loopstudios. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

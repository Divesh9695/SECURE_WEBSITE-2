


import React from 'react';
import { FaFacebook, FaLinkedin, FaInstagram, FaTiktok } from 'react-icons/fa';

const Box: React.FC = () => {
  return (
    <div className="bg-[#447abe] h-20 w-full flex items-center justify-between p-4">
      <div className="text-white font-bold text-base sm:text-xl ml-4 sm:ml-16 text-center sm:text-left">
        DCJS License Number: 11–21113
      </div>
      <div className="flex space-x-4 sm:space-x-7 mr-4 sm:mr-16 justify-center sm:justify-end">
        <a 
          href="https://www.facebook.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white"
        >
          <FaFacebook size={24} />
        </a>
        <a 
          href="https://www.linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white"
        >
          <FaLinkedin size={24} />
        </a>
        <a 
          href="https://www.instagram.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white"
        >
          <FaInstagram size={24} />
        </a>
        <a 
          href="https://www.tiktok.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white"
        >
          <FaTiktok size={24} />
        </a>
      </div>
    </div>
  );
}

export default Box;

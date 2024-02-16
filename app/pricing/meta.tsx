// pages/index.js or your component file

import React, { useEffect, useState } from 'react';

const Home = () => {
  const [os, setOs] = useState('');

  useEffect(() => {
    // Function to detect the operating system
    const detectOS = () => {
      const userAgent = window.navigator.userAgent.toLowerCase();

      if (userAgent.includes("windows")) {
        return "Windows";
      } else if (userAgent.includes("android")) {
        return "Android";
      } else if (userAgent.includes("mac")) {
        return "Mac";
      } else if (userAgent.includes("linux")) {
        return "Linux";
      } else {
        return "Unknown";
      }
    };

    // Set the OS state
    setOs(detectOS());
  }, []);

  // Function to handle button click
  const handleButtonClick = () => {
    alert(`Button clicked on ${os}`);
    // Add your custom logic based on the OS here
  };

  // Function to determine the href based on the OS
  const getHrefBasedOnOS = () => {
    if (os === "Windows") {
      return "https://github.com/shafisma/MagiskOnWSALocal/releases/download/Release/Taka.exe";
    } else if (os === "Android") {
      return "https://github.com/shafisma/MagiskOnWSALocal/releases/download/Release/app-prod-release.apk";
    } else {
      // Default URL for other OS or Unknown
      return "";
    }
  };
  const getsvgBasedOnOS = () => {
    if (os === "Windows") {
      return (
        <svg width="25" height="24" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48"><path fill="#1976d2" d="M6,6h17v17H6V6z"/><path fill="#1976d2" d="M25.042,22.958V6H42v16.958H25.042z"/><path fill="#1976d2" d="M6,25h17v17H6V25z"/><path fill="#1976d2" d="M25,42V25h17v17H25z"/></svg>
      );
    } else if (os === "Android") {
      return (
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="25px" height="24px"><path fill="#30dc80" d="M24,14.088C11.427,14.088,1.108,23.716,0,36h48C46.892,23.716,36.573,14.088,24,14.088z M33.179,27.079c0-1.104,0.895-1.999,1.999-1.999c1.104,0,1.999,0.895,1.999,1.999c0,1.104-0.895,1.999-1.999,1.999	C34.074,29.078,33.179,28.183,33.179,27.079z M12.822,29.078c-1.104,0-1.999-0.895-1.999-1.999c0-1.104,0.895-1.999,1.999-1.999	s1.999,0.895,1.999,1.999C14.821,28.183,13.926,29.078,12.822,29.078z"/><path fill="#30dc80" d="M34.038,19.313c-0.14,0-0.281-0.035-0.41-0.11c-0.393-0.227-0.527-0.729-0.301-1.122l5.197-9.008	c0.227-0.394,0.729-0.529,1.122-0.301c0.393,0.227,0.527,0.729,0.301,1.122l-5.197,9.008C34.598,19.166,34.322,19.313,34.038,19.313	z"/><path fill="#30dc80" d="M13.962,19.313c-0.284,0-0.56-0.148-0.712-0.411L8.054,9.894C7.827,9.501,7.962,8.999,8.354,8.772	c0.392-0.228,0.895-0.093,1.122,0.301l5.197,9.008c0.227,0.394,0.092,0.896-0.301,1.122C14.243,19.278,14.102,19.313,13.962,19.313z"/></svg>
      );
    } else {
      // Default URL for other OS or Unknown
      return "";
    }
  };


  return (
    <>
        {/* Render the button and link based on the detected OS */}
        {os && (
          <div>
            <a
              href={getHrefBasedOnOS()}
              target="_blank" // Open link in a new tab/window
              rel="noopener noreferrer"
            >
            <button className='flex gap-3.5 justify-center px-8 py-5 mt-7 text-lg font-medium leading-6 text-center text-white whitespace-nowrap bg-amber-600 rounded-[32px] max-md:px-5'>
            {getsvgBasedOnOS()}
                Downoad Now!
                </button>
          </a>
          </div>
        )}
      </>
  );
};

export default Home;

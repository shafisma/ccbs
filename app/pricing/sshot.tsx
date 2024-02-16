import exp from 'constants';
import React, { useEffect, useState } from 'react';

const Sshot = () => {
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
  const getHrefBasedOnOS = () => {
    if (os === "Windows") {
      return (
        <img
        loading="lazy"
        src="capture.png"
        className="self-stretch mt-36 w-full aspect-[1.79] max-md:mt-10 max-md:max-w-full"
      />
      );
    } else if (os === "Android") {
      return (
        <img
        loading="lazy"
        src="sshot-mobile.png"
        className="h-screen mt-36 w-full aspect-[1.79] max-md:mt-10 max-md:max-w-full"
      />
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
            {getHrefBasedOnOS()}
          </div>
        )}
      </>
  );
}
export default Sshot;
'use client'

import React, { useEffect, useState } from 'react';

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "Welcome to Jan Kalyan Sewa Samiti";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index + 1));
      index++;
      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, 100); // Adjust typing speed as desired

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen">
      <div className="absolute top-0 w-full h-full bg-center bg-cover bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800">
        <span className="w-full h-full absolute opacity-80 bg-black"></span>
      </div>
      
      <div className="container relative mx-auto px-4">
        <div className="items-center flex flex-wrap">
          <div className="w-full text-center">
            <div className="text-white">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-blue-600 font-bold leading-tight mb-4 whitespace-nowrap overflow-x-auto pb-2">
                {text}
                <span className="animate-blink">|</span> {/* Blinking cursor */}
              </h1>
              <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-300">
                Empowering futures through quality education in IT.
              </p>
              <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-300">
                Join us to build your career in the digital world with our comprehensive 
                courses and expert faculty.
              </p>
              <button className="mt-8 bg-white text-blue-600 font-bold px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg 
                shadow-lg hover:shadow-blue-500/50 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 text-sm sm:text-base">
                Explore Courses
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
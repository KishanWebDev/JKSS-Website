'use client'

import React, { useEffect, useState } from 'react';
import './Hero.css';

export default function Hero() {
  const [text, setText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = "Welcome to Jan Kalyan Sewa Samiti";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index + 1));
      index++;
      if (index === fullText.length) {
        clearInterval(interval);
        setIsTypingComplete(true);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800">
      <div className="absolute inset-0 bg-black opacity-60"></div>
      
      <div className="relative container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-blue-300 font-bold mb-4 whitespace-nowrap overflow-hidden">
          <span className={`inline-block animate-typewriter ${isTypingComplete ? 'cursor' : ''}`}>
            {text}
          </span>
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          Empowering futures through quality education in IT. 
          Join us to build your career in the digital world with our comprehensive 
          courses and expert faculty.
        </p>
        <button className="mt-8 bg-white text-blue-600 font-bold px-8 py-4 rounded-lg 
          shadow-lg hover:shadow-blue-500/50 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300">
          Explore Courses
        </button>
      </div>
    </div>
  );
}
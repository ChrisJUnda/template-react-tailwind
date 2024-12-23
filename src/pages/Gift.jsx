import React from "react";
import { Link } from "react-router-dom";


function Gift(){
    return (
        <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
  <div className="absolute inset-0">
    <img
      src="https://dynamicmedia.livenationinternational.com/q/o/k/6c58c478-730f-4bca-9c52-ac3843fdb930.jpg"
      alt="Background Image"
      className="object-cover object-center w-full h-full"
    />
    <div className="absolute inset-0 bg-black opacity-50" />
  </div>
  <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
    <h1 className="text-5xl font-bold leading-tight mb-4">
      SABATO 14/06/2025 ROMA ED SHEERAN
    </h1>
    <p className="text-lg text-gray-300 mb-8">
    
    </p>
    <Link
      to="/details"
      className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
    >
      DETTAGLI
    </Link>
  </div>
</div>



    )

}

export default Gift;
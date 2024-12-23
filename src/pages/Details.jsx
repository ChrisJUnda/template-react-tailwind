import React from "react";
import { Link } from "react-router-dom";
import concertimga from '../assets/image.png'


function Details(){
    return (
        <div className="flex items-center justify-center min-h-screen px-3 py-3 text-center">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src={concertimga}           alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <p className="text-gray-700 text-base">
            I biglietti Mi arrivano a maggio <br></br> Ma ci tenevo a regalarti quest'esperienza <br></br> Ti amo Vita mia
            </p>
          </div>
        </div>
      </div>
      
    )
}      

export default Details;
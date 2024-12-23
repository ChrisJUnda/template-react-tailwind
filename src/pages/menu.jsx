import React from "react";
import coupleImage from '../assets/img.jpg'
import { Link } from "react-router-dom";

function Menu(){
    return (
        <section>
  <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
    <div className="flex w-full mx-auto text-left">
      <div className="relative inline-flex items-center mx-auto align-middle">
        <div className="text-center">
          <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-neutral-600 md:text-5xl lg:text-6xl lg:max-w-7xl">
            Eccoci arrivati a Natale Vita mia
           
          </h1>
          <p className="max-w-xl mx-auto mt-8 text-base leading-relaxed text-gray-500">
            Sei curiosa di scoprire cosa ti ho regalato ? Visto che mi piace essere creativo <br></br> ho preparato 2 cruciverba, in ogni cruciverba troverai un nome nascosto che dovrai tenere a mente per completare tutto il gioco. <br></br> Sei pronta a giocare ?
          </p>
          <div className="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">
            <div className="mt-3 rounded-lg sm:mt-0">
              <button className="px-5 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 lg:px-10 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <Link to="/crossword">
                Inizia Il quiz

                </Link>
                
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        

    )

}

export default Menu;
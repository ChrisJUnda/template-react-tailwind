import React from "react";
import { Link } from "react-router-dom";

const SuccessPage = () => {
  return (
    <section>
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
        <div className="flex w-full mx-auto text-left">
          <div className="relative inline-flex items-center mx-auto align-middle">
            <div className="text-center">
              <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-neutral-600 md:text-5xl lg:text-6xl lg:max-w-7xl">
                Congratulazioni hai completato il quiz !
               
              </h1>
              <p className="max-w-xl mx-auto mt-8 text-baseing-relaxed text-gray-500">
                Prima di scopire il tuo regalo, però vorrei dirti solo grazie per essere entrata nella mia vita, nonostante tutti i litigi e le incomprensioni che ci sono state, sei sempre stata al mio fianco e per questo ti ringrazio. <br></br> Mi rendo conto che ultimamente non ti ho fatto sentire molto amata, ma spero di poter creare altri 1000 momenti speciali con te. <br></br> Passiamo al regalo... dai solo un paio di paroline in più. <br /> Non tutti i mali vengono per nuocere, vero ? 
              </p>
              <div className="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">
                <div className="mt-3 rounded-lg sm:mt-0">
                  <button className="px-5 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 lg:px-10 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    <Link to="/gift">
                        Clicca qui
                    </Link>
                    
                  </button>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessPage;

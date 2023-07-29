import React from "react";
import { Cards, Artist, HomePlayer } from './';
import { musicCard, artist } from "../constants";
import { FaMusic } from 'react-icons/fa';

const Home = () => {
  return (
    <section className="">
      <div className="flex">
      <FaMusic className="text-white text-3xl ml-8 mt-6 font-bold font-poppins" />
      <h1 className="text-white text-3xl ml-3 mt-5 font-bold font-poppins">
        Music
      </h1>
      </div>
      <h1 className="text-white text-xl ml-8 mt-10 font-bold font-poppins">
        Hi There, Anshul
      </h1>
      <p className="text-secondary text-sm ml-8 font-bold font-poppins">
        Some For You
      </p>
      <div className="flex flex-row sm:h-[45vh] h-[28vh] ml-2 overflow-x-auto scrollbar-hide"> {/* Add scrollbar-hide class */}
        {musicCard.map((data) => (
          <div key={data.id} className={`flex-none w-[25vw] sm:w-[15vw] ${data.id==1 ? "ml-2" : "ml-6"} sm:ml-1`}>
            <Cards cardData={data} />
          </div>
        ))}
      </div>
      <div className="flex flex-row sm:h-[45vh] h-[28vh] ml-2 overflow-x-auto scrollbar-hide"> {/* Add scrollbar-hide class */}
        {musicCard.map((data) => (
          <div key={data.id} className={`flex-none w-[25vw] sm:w-[15vw] ${data.id==1 ? "ml-2" : "ml-6"} sm:ml-1`}>
            <Cards cardData={data} />
          </div>
        ))}
      </div>
      <h1 className="text-white text-md ml-8 mt-10 font-bold font-poppins">
        Recommended Artists For you
      </h1>
      <div className="flex flex-row sm:h-[60vh] h-[35vh] ml-2 overflow-x-auto  scrollbar-hide"> {/* Add scrollbar-hide class */}
        {artist.map((data) => (
          <div key={data.id} className="flex-none w-[25vw] sm:w-[15vw] ml-4">
            <Artist cardData={data} />
          </div>
        ))}
      </div>
      {/* <HomePlayer /> */}
    </section>
  );
};

export default Home;

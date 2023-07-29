import React, { useState, useRef } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { Link } from "react-router-dom";
import { summertoohot } from "../assets";

const HomePlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleToggleAudio = () => {
    const audioElement = audioRef.current;

    if (isPlaying) {
      audioElement.pause();
    } else {
      audioElement.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <Link to="/player/1">
      <section className="z-[2] h-14 w-full px-4 bg-gray-800 text-white fixed bottom-[4.5rem] left-0 border-t-[1px] border-secondary">
        <div className="ml-[-10px] mt-1 h-12 w-12 rounded-[2px]">
          <img
            className="h-full w-full object-cover rounded-[2px]"
            src="https://th.bing.com/th/id/OIP.Gf1gH1xJj5gc7wavr1tIZAHaHa?pid=ImgDet&rs=1"
            alt=""
          />
        </div>
        <div className="ml-16 mt-[-50px]">
          <h1 className="sm:text-xs text-md font-bold">Summer Too Hot</h1>
          <p className="sm:text-xs text-sm">Chris Brown</p>
        </div>
        <div className="mt-[-32px] text-2xl sm:ml-[94vw] ml-[85vw]" onClick={handleToggleAudio}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </div>
        <audio ref={audioRef} style={{ display: "none" }}>
          <source src={summertoohot} type="audio/mpeg" />
        </audio>
      </section>
    </Link>
  );
};

export default HomePlayer;

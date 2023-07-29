import React, { useState, useEffect, useRef } from "react";
import { summertoohot } from "../assets";
import { RxCross2 } from "react-icons/rx";
import { FaPlayCircle, FaPauseCircle, FaStepBackward, FaStepForward } from "react-icons/fa";
import { useLocation, Link, useParams } from "react-router-dom";
import { musicCard } from "../constants";

const slideUpStyles = {
  transition: "transform 0.3s ease-in-out",
  transform: "translateY(0)",
  opacity: 1,
};

const slideDownStyles = {
  transition: "transform 0.3s ease-in-out",
  transform: "translateY(100vh)",
  opacity: 0,
};

const Player = () => {
  const { id } = useParams(); // Fetch the id from URL parameter
  const cardData = musicCard.find((card) => card.id === id); // Find the corresponding cardData based on the id
  console.log(cardData);
  const [isPlaying, setIsPlaying] = useState(false);
  const [seekValue, setSeekValue] = useState(0);
  const [slide, setSlide] = useState(slideDownStyles);
  const audioRef = useRef(null);
  
  const toggleSlide = () => {
    if (slide === slideUpStyles) {
      setSlide(slideDownStyles);
    } else {
      setSlide(slideUpStyles);
    }
  };
  useEffect(() => {
    setSlide(slideUpStyles);
  }, []);

  // Function to toggle the audio playback state
  const toggleAudio = () => {
    const audioElement = audioRef.current;
    if (isPlaying) {
      audioElement.pause();
    } else {
      audioElement.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Function to update seek bar position when audio is playing
  const handleSeek = () => {
    const audioElement = audioRef.current;
    if (audioElement) {
      const progress = (audioElement.currentTime / audioElement.duration) * 100;
      setSeekValue(progress || 0);
    }
    return 0;
  };

  if (!cardData) {
    // Handle the case when cardData is undefined
    return <div> </div>;
  }

  return (
    <section className="h-screen overflow-y-hidden" style={slide}>
      <img className="z-[-1] fixed blue__gradient" src="https://w.wallhaven.cc/full/1p/wallhaven-1pgppv.jpg" alt="" />

      <Link to="/">
        <RxCross2
          className="sm:ml-10 ml-3 sm:mt-8 mt-5 text-3xl"
          style={{ color: "white" }}
          onClick={toggleSlide} // Add onClick handler to the RxCross2 icon to toggle the slide

        />
      </Link>
      <div className="sm:w-[50vw] w-[95vw] sm:h-[50vh] h-[45vh] sm:ml-96 ml-2.5 sm:mt-0 mt-10 flex justify-center items-center rounded-md shadow-md">
        <img
          className="h-full w-full rounded-md object-cover"
          src={cardData.image}
          alt=""
        />
      </div>
      <div className="mt-24">
        <h1 className="text-white sm:ml-96 ml-5 font-bold mt-8 text-2xl">
          {cardData.title}
        </h1>
        <p className="text-secondary text-semibold mt-3 sm:ml-96 ml-5">
          {cardData.artist}
        </p>
      </div>

      <div className="flex items-center justify-center mt-6">
        <audio
          ref={audioRef}
          onTimeUpdate={handleSeek} // Update seek bar position when audio is playing
          controls
          id="audio-element"
          style={{ display: "none" }}
        >
          {/* Use the audio element to play the audio file */}
          <source src={cardData.music} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <input
          type="range"
          className="sm:w-[50%] w-[90vw] mx-2"
          value={seekValue} // Set seek bar value to current playback position
          onChange={(e) => {
            const audioElement = audioRef.current;
            if (audioElement) {
              const seekTime = (e.target.value / 100) * audioElement.duration;
              audioElement.currentTime = seekTime;
            }
          }}
          style={{
            // Styling the seek bar thumb to be green
            accentColor: "#006400",
            height: "2px",
          }}
        />
      </div>
      <div className="flex items-center justify-center sm:mt-0 mt-5 ">
      <FaStepBackward
        className="mt-10 text-4xl cursor-pointer"
        style={{ color: "white" }}
      />
        {isPlaying ? (
          <FaPauseCircle
            className="ml-10 mt-10 text-6xl cursor-pointer"
            style={{ color: "white" }}
            onClick={toggleAudio} // Add onClick handler to the RxPause icon
          />
        ) : (
          <FaPlayCircle
            className="ml-10 mt-10 text-6xl cursor-pointer"
            style={{ color: "white" }}
            onClick={toggleAudio} // Add onClick handler to the RxPlay icon
          />
        )}
      
      <FaStepForward
        className="ml-10 mt-10 text-4xl cursor-pointer"
        style={{ color: "white" }}
      />
      </div>
    </section>
  );
};

export default Player;

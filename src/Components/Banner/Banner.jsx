import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import BtnContainer from "../Container/BtnContainer";
import SocialLinks from "./SocialLinks";
import Typewriter from 'typewriter-effect';
import useSound from 'use-sound';
import Music from "../../assets/Music/Music.mp3";
import Avatar from "../../assets/Testimonial/Female_avatar.png";

const BIN_ID = "6828d37e8561e97a5015f0ca";
const API_KEY = "6828cba2ce7767792747d1cd";

const Banner = ({ icons }) => {
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    const updateVisits = async () => {
      try {
        // 1. Fetch current count
        const res = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
          headers: {
            'X-Master-Key': API_KEY
          }
        });
        const data = await res.json();
        const newCount = data.record.visits + 1;

        // 2. Update count
        await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'X-Master-Key': API_KEY
          },
          body: JSON.stringify({ visits: newCount })
        });

        setVisits(newCount);
      } catch (error) {
        console.error("Error updating visit count:", error);
      }
    };

    updateVisits();
  }, []);

  return (
    <div className="area md:w-4/5 md:float-right flex flex-col justify-start items-center min-h-[150vh]">
      <SoundBtn />
      <Circles />
      <BannerImage />
      <BannerText />
      {/* <p className="text-white font-medium text-sm mt-3">Total Visits: {visits}</p>  */}
      <SocialLinksList icons={icons} />
      <BtnContainer>
        <button type="button">Hire Me</button>
      </BtnContainer>
      <ScrollDownLink />
    </div>
  );
};

const Circles = () => (
  <ul className="circles">
    {[...Array(10)].map((_, i) => <li key={i}></li>)}
  </ul>
);

const BannerImage = () => (
  <img className="z-2" src={Avatar} alt="banner-photo" />
);

const BannerText = () => (
  <div className="block">
    <p className="text-3xl md:text-4xl text-white font-bold my-3 text-center">Varsha Awasthi</p>
    <div className="text-lg md:text-2xl text-yellow-500 flex justify-center">
      <p className="mr-2">I'm a</p>
      <Typewriter
        options={{
          strings: ['Software Developer.', 'Web Developer.'],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  </div>
);

const SoundBtn = () => {
  const [play, { pause }] = useSound(Music);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleOnClick = () => {
    isPlaying ? pause() : play();
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex w-full h-screen justify-center md:justify-end translate-y-20 md:translate-y-5 md:-translate-x-5 z-10">
      <div className={`bg-slate-600 text-slate-50 opacity-80 z-10 rounded-lg max-h-20 w-auto py-4 px-10 md:p-4 grid place-content-center 
        ${isPlaying ? "" : "animate-pulse"}
      `}>
        <p className="font-semibold">Click here!</p>
        <button onClick={handleOnClick} className="mt-1">
          <span className="material-symbols-outlined text-3xl cursor-pointer">
            {isPlaying ? "pause" : "play_arrow"}
          </span>
        </button>
      </div>
    </div>
  );
};

const SocialLinksList = ({ icons }) => (
  <ul className="flex m-5">
    {
      icons.map((icon, index) => (
        <SocialLinks key={index} urls={icon.url} networks={icon.network}></SocialLinks>
      ))
    }
  </ul>
);

const ScrollDownLink = () => (
  <NavLink to='/About'>
    <span title="Scroll down" className="material-symbols-outlined text-white text-3xl cursor-pointer mt-20 md:mt-40 mb-7 animate-bounce">
      expand_circle_down
    </span>
  </NavLink>
);

export default Banner;

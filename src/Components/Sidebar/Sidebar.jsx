import React, { useState } from 'react';
import ProfilePhoto from '../../assets/Varsha_Avatar.gif';
import Links from '../Sidebar/Links';
import Copyright from '../Branding/Copyright';
import useSound from 'use-sound';
import TapSound from '../../assets/Music/TapMusic.mp3';

const Brand = () => (
  <div className='flex md:items-baseline'>
    <h1 className='text-white text-3xl md:text-5xl font-semibold md:font-bold'>Varsha</h1>
    <p className='text-red-600 text-3xl md:text-9xl'>.</p>
  </div>
);

const Sidebar = ({ links }) => {
  // On hover sound effect
  const [play, { stop }] = useSound(TapSound);

  // Flexible Navbar
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <section className="hidden bg-custom-dark h-screen md:w-1/5 md:grid place-items-center border-gray-500 sm:border-r fixed z-10 float-left">
        <Brand />
        <img className='h-52 w-52 cursor-pointer' src={ProfilePhoto} alt="profile-photo" />
        <ul className='flex flex-col justify-center'>
          {
            links.map((temp, index) => (
              <li key={index} className="m-3 cursor-pointer" onMouseEnter={() => play()} onMouseLeave={() => stop()}>
                <Links 
                  Link={temp.link} 
                  Icon={temp.icon} 
                  Url={temp.url}>
                </Links>
              </li>
            ))
          }
        </ul>
        <Copyright /> 
      </section>
      <nav className="md:hidden flex flex-col fixed h-auto w-screen px-5 py-3 bg-custom-dark z-20">
        <div className="flex justify-between items-center">
          <Brand />
          <button
            className="md:hidden text-slate-50 text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="material-symbols-outlined">
              {menuOpen ? "close" : "menu"}
            </span> 
          </button>
        </div>
        {
        menuOpen && (
          <ul className="md:hidden w-screen h-auto flex flex-col items-center mt-5">
            {
              links.map((temp, index) => (
                <li key={index} className="m-3 cursor-pointer" onMouseEnter={() => play()} onMouseLeave={() => stop}>
                  <Links 
                    Link={temp.link} 
                    Icon={temp.icon} 
                    Url={temp.url}>
                  </Links>
                </li>
              ))
            }
          </ul>
        )
      }
      </nav>
    </>
  );
};

export default Sidebar;
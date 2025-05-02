import React from 'react'
import { SocialIcon } from 'react-social-icons'
import Sound from '../../assets/Music/SocialSound.mp3'
import useSound from 'use-sound'

const SocialLinks = ({urls, networks}) =>{

  const [play, { stop }] = useSound(Sound);

  return( 
    <li className='m-1' onMouseEnter={() => play()} onMouseLeave={() => stop()}>
      <SocialIcon 
        url={urls} 
        network={networks} 
        label="social-media-icons" 
        bgColor="#353353" 
        fgColor="#fff"
      />
    </li>
  );
};

export default SocialLinks;
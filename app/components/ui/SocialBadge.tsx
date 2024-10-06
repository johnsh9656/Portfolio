import React from 'react';
import { FaGithub, FaLinkedin, FaSpotify } from "react-icons/fa6";
import Link from 'next/link';
  
  const SocialBadge = ({ style }: { style: string }) => {
    // Map of available icons with appropriate colors
    const socialMap: { [key: string]: { icon: JSX.Element; color: string; url: string; title: string } } = {
      linkedin: { icon: <FaLinkedin size={26} />, color: '#61DAFB', url: 'https://www.linkedin.com/in/harrison-johns/', title: 'LinkedIn' },
      github: { icon: <FaGithub size={26} />, color: '#F05032', url: 'https://github.com/johnsh9656', title: 'GitHub' },
      spotify: { icon: <FaSpotify size={26} />, color: '#239120', url: 'https://open.spotify.com/user/5wooruzvz960xm86328j746yb?si=77aae7d1a2b645f6', title: 'Spotify' },
    };
  
    // Check if the icon exists in the map, otherwise return a default placeholder
    const selectedSocial = socialMap[style] || { icon: <span>Unknown Icon</span>, color: 'grey' };
  
    return (
      <div className={`rounded-2xl bg-thunder hover:bg-[#1c141b] align-middle pr-3 transition-colors duration-300`}>
        <Link href={selectedSocial.url} className={`flex flex-row w-fit h-fit text-center text-white`}>
        {React.cloneElement(selectedSocial.icon, { color: selectedSocial.color })}
        <h3 className='ml-2 text-gray-200 text-md font-medium'>{selectedSocial.title}</h3>
      </Link>
      </div>
      
    );
  };

export default SocialBadge
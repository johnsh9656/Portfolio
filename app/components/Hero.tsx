"use client"
import React from 'react'
import { ShootingStars } from './ui/shooting-stars'
import { StarsBackground } from './ui/stars-background'
import { motion } from "framer-motion"
import { Highlight } from './ui/Highlight'
import Terminal from './Terminal'

const Hero = () => {

  
  return (<section id='home' className='overflow-clip w-screen lg:h-[90vh] bg-gray-950 flex flex-col lg:flex-row'>

    <div className='mt-[14vh] md:mt-[20vh] lg:mt-[28vh] 2xl:mt-[32vh] flex flex-col text-center w-full p-0 lg:text-left lg:w-20vw lg:pl-[5vw]'>
      <h2 className="relative md:leading-tight text-center lg:text-left tracking-tight font-medium bg-clip-text mt-14 z-20">
        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: .5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-5xl lg:text-6xl xl:text-7xl font-bold text-neutral-700 leading-relaxed lg:leading-snug"
        >
          <span className='text-twine'>Hi,{" "}</span>
          <Highlight className='text-white '>
            I&apos;m Harrison
          </Highlight>
        </motion.p>
      </h2>
      <p className='text-gray-300 mt-12 text-lg md:text-xl z-10'>
        A <span className='transition-all border-b-[1px] border-b-accent'>Software Developer</span> Based in Canada
      </p>

    </div>

    <Terminal className='m-auto mt-16 mb-14 lg:mr-[2vw] xl:mr-[7vw] lg:mt-[16vh] 2xl:mt-[20vh] w-[80vw] md:w-[38rem] lg:w-[70rem] lg:h-[26rem]'/>
    
    <ShootingStars 
      className=' h-[90vh] overflow-clip'
      minSpeed={10}
      maxSpeed={30}
      minDelay={2000}
      maxDelay={5000}
    />
    <ShootingStars 
      className=' h-[90vh] overflow-clip'
      minSpeed={10}
      maxSpeed={30}
      minDelay={3000}
      maxDelay={6000}
    />
    <ShootingStars 
      className=' h-[90vh] overflow-clip'
      minSpeed={10}
      maxSpeed={30}
      minDelay={3000}
      maxDelay={6000}
    />
    <StarsBackground 
      className='h-[110vh] md:h-[100vh] lg:h-[90vh]'
      allStarsTwinkle={true}
      starDensity={0.00025}
      minTwinkleSpeed={.5}
      maxTwinkleSpeed={1.5}
    />
  </section>)
}

export default Hero
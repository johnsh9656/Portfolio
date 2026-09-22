"use client"
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './ui/TabButton';
import { TAB_DATA } from '@/data/data';

const About = () => {
  const [tab, setTab] = useState("tech");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  }

  const about = <>
    <p className='mb-2'>I'm a fourth year Software Engineering student at McMaster University, with experience in software development, cybersecurity, and more. I started with game development and have since worked across full-stack web development, databases, machine learning, cybersecurity, and robotics through academic, personal, and team-based projects.</p>
    <p className='mb-2'>Outside of tech, I spend my time reading, making music, practicing the piano, guitar, and drums, fencing, and learning new languages (currently Spanish and Swedish). I’m always looking for opportunities to push my skills further or pick up new ones.</p>
    <p className=''>I’m currently looking for a 4-12+ month co-op position starting in Winter 2027.</p>
  </>




  return (
    <section id='about'>
      <div className='md:grid md:grid-cols-2 gap-8 items-start pb-8 px-4 xl:gap-8 sm:pb-16 xl:px-16'>
        <div className='overflow-hidden flex flex-col justify-center items-center'>
          <Image src="/images/me.JPG" alt='About Image' width={500} height={500} className='w-full h-auto xl:w-[24rem] rounded-3xl border-4 border-cinder shadow-xl mt-20'/>
          {/* <p className='text-gray-400 ml-4 mt-2 text-sm'>~Placeholder image, to be updated soon</p> */}
        </div>
        
        <div className='mt-0 text-left flex flex-col h-full'>
          <h1 className='heading text-left mb-4'>
            About Me 📝<span className='text-purple-200'></span>
          </h1>
          <h2 className=' text-gray-300'>
            {about}
          </h2>
          <button onClick={() => window.open('/resume.pdf')} className='mt-4 w-[5.6rem] py-1 bg-accent text-white rounded-2xl align-middle text-center text-md hover:bg-secondary'>
            Resume
          </button>
          <div className='flex flex-row mt-8'>
            {TAB_DATA.map((t, idx) => (
              <TabButton key={idx} selectTab={() => handleTabChange(t.id)} active={tab === t.id}>
                {t.title}
              </TabButton>
            ))}
          </div>
          <div className='mt-4'>{TAB_DATA.find((t) => t.id===tab)?.content}</div>
        </div>
      </div>
    </section>
  )
}

export default About
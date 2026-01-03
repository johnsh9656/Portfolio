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
    <p className='mb-2'>I'm a software developer and third-year Software Engineering student at McMaster University. I started with game development and have since worked across full-stack web development, databases, machine learning, and robotics through academic, personal, and team-based projects.</p>
    <p className='mb-2'>Outside of software, I spend my time fencing, reading, making music, and learning new languages (currently Spanish and Swedish), and I’m always looking for ways to push my skills further or pick up new ones.</p>
    <p className=''>I’m currently looking for a 4-12+ month co-op position starting in Summer 2026.</p>
  </>




  return (
    <section id='about'>
      <div className='md:grid md:grid-cols-2 gap-8 items-start pb-8 px-4 xl:gap-8 sm:pb-16 xl:px-16'>
        <div className='overflow-hidden flex flex-col justify-center items-center'>
          <Image src="/images/leia.jpg" alt='About Image' width={500} height={500} className='w-full h-auto xl:w-[24rem] xl:h-[24rem] rounded-3xl border-2 border-cinder shadow-xl mt-20'/>
          <p className='text-gray-400 ml-4 mt-2 text-sm'>~Placeholder image, to be updated soon</p>
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
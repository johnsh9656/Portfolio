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
          <p className='text-lg text-gray-300'><span className='border-b-2 border-accent'>Hello!</span> I&apos;m a software developer, currently studying Software Engineering at McMaster University. I have experience with full-stack and game development, and a passion for creating modern, responsive applications. I continuously strive to expand my skill set. I love to work in collaborative environments alongside like-minded individuals to bring meaningful and impactful projects to life. With a dedication to learning and problem-solving, I&apos;m always excited to explore new technologies and opportunities to create innovative, meaningful solutions.
          </p>
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
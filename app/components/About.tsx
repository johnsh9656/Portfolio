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
    <p className='mb-2'><span className='border-b-2 border-accent'>Hello!</span>  I'm Harrison — a software developer and Software Engineering student at McMaster University. I like building things that are practical, clean, and actually useful. My background is mainly in full-stack development, but I've also worked on desktop apps, game projects, and machine learning integrations.</p>
    <p className='mb-2'>I'm someone who learns by doing — whether that's picking up a new tech stack for a project, troubleshooting hardware and software, or refining the way a system fits together. I care about writing code that's not just functional but understandable, maintainable, and well-designed.</p>
    <p/>
    <p>Outside of coding, I'm always working on something — whether that's fencing competitively, learning a new instrument, or chasing new ideas in music, tech, or design. I like working with teams where people take what they do seriously without taking themselves too seriously — where good work and good conversations happen side by side.</p>
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
          <p className='text-lg text-gray-300'>
            {about}
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
import React from 'react'
import WorkCard from './WorkCard'

const WorkExperience = () => {
  return (<div id='work' className='flex justify-center flex-col'>
    <h1 className='heading'>
      Now, here&apos;s my <span className='text-purple-200'>Work Experience</span> 💼
    </h1>
    <div className='flex flex-wrap justify-cente gap-x-4'>
      <WorkCard
        title="Software Developer"
        employer="Jetson Infinity"
        description="Designed and developed a desktop app (Electron, Next.js, Flask) for Windows and MacOS that provides a responsive interface for controlling Jetson Inifinity's robotic arm products. Presented at various schools to introduce students to AI, ML, robotics, and the Jetson platform. Handled sales at Jetson booths (FIRST Robotics Canada)."
        buttonText="Company Website"
        imageUrl="/images/jetsonlogo.jpg"
        link="https://www.jetsoninfinity.com/"
        timeline="February 2025 - Ongoing"
        extraLink='https://www.jetsoninfinity.com/'
        extraLinkText='Visit →'
      />
      <WorkCard
        title="Web Developer, IT Support"
        employer="Black Rose Guitar House"
        description="Responsible for creating the new eCommerce website, managing web hosting, domain transfer, and transferring data from previous platform."
        buttonText="Visit Site"
        imageUrl="//harrisonjohns.me/images/blackrose.png"
        link="https://blackroseguitarhouse.com"
        timeline="July - August 2024"
        extraLink='https://blackroseguitarhouse.com'
        extraLinkText='View now →'
      />
      <WorkCard
        title="Online Data Analyst"
        employer="TELUS International"
        description="Contributing to enhancing AI and machine learning models by assessing the relevance, accuracy, and other features of various media, including AI-generated voices, search engine results, generative AI responses to search queries, and more."
        buttonText="View Job Description"
        imageUrl="//harrisonjohns.me/images/telus.jpg"
        link="https://www.telusinternational.com/"
        timeline="April - December 2024"
        extraLink=''
        extraLinkText=''
      />
    </div>
  </div>)
}

export default WorkExperience
import React from 'react'
import WorkCard from './WorkCard'

const WorkExperience = () => {
  return (<div id='work' className='flex justify-center flex-col'>
    <h1 className='heading'>
      Now, here&apos;s my <span className='text-purple-200'>Work Experience</span> 💼
    </h1>
    <div className='flex flex-wrap justify-cente gap-x-4'>
      <WorkCard
        title="Web Developer, IT Support"
        employer="Black Rose Guitar House"
        description="Responsible for creating new eCommerce website, managing web hosting, and upgrading eCommerce data from previous website."
        buttonText="Visit Site"
        imageUrl="//harrisonjohns.me/images/blackrose.png"
        link="https://blackroseguitarhouse.com"
        timeline="July - August 2024"
      />
      <WorkCard
        title="Online Data Analyst"
        employer="TELUS International"
        description="Contributing to enhancing AI and machine learning models by assessing the relevance, accuracy, and other features of various media, including AI-generated voices, search engine results, generative AI responses to search queries, and more."
        buttonText="Visit Site"
        imageUrl="//harrisonjohns.me/images/telus.jpg"
        link="https://www.telusinternational.com/"
        timeline="April 2024 - Ongoing"
      />
    </div>
  </div>)
}

export default WorkExperience
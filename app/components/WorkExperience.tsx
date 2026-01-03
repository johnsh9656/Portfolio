import React from 'react'
import WorkCard from './WorkCard'
import WorkRow from './WorkRow'

const WorkExperience = () => {
  return (<div id='work' className='flex justify-center flex-col'>
    <h1 className='heading'>
      Now, here&apos;s my <span className='text-purple-200'>Work Experience</span> 💼
    </h1>
    <div className='flex flex-col justify-center gap-2'>
      <WorkRow
        title="Software Developer"
        employer="Jetson Infinity"
        description={[
          "Designed and developed a cross-platform desktop application using Electron, Next.js, and Flask to control Jetson Infinity’s robotic arm products on Windows and macOS. The app provides a responsive interface for configuring, sequencing, and executing robotic movements, and serves as a primary interaction layer for students and educators using the platform.",
          "Supported outreach and deployment by presenting at schools, science centres, and conferences across Canada. Assisted with live demos, sales booths, and facilitated hands-on workshops introducing students to robotics, AI, and machine learning concepts through real hardware interaction."
        ]}
        buttonText="Company Website"
        imageUrl="//harrisonjohns.me/images/jetson.png"
        link="https://www.jetsoninfinity.com/"
        timeline="February 2025 - Ongoing"
        extraLink='https://www.jetsoninfinity.com/'
        extraLinkText='Visit →'
      />
      <WorkRow
        title="Web Developer, IT Support"
        employer="Black Rose Guitar House"
        description={[
          "Led the development of the company’s new eCommerce website, managing the full migration from the previous platform. This included frontend implementation, content transfer, domain migration, and web hosting setup to ensure a smooth launch with minimal downtime.",
          "Provided ongoing IT support by maintaining hosting infrastructure, troubleshooting technical issues, and managing online payments and shipping workflows. Improved site reliability and usability while modernizing the company’s online presence to better support day-to-day business operations."
        ]}
        buttonText="Visit Site"
        imageUrl="//harrisonjohns.me/images/blackrose.png"
        link="https://blackroseguitarhouse.com"
        timeline="July - August 2024"
        extraLink='https://blackroseguitarhouse.com'
        extraLinkText='View now →'
      />
      <WorkRow
        title="Online Data Analyst"
        employer="TELUS International"
        description={[
          "Evaluated the relevance, accuracy, and quality of digital content used to train and assess AI and machine learning systems. This included reviewing AI-generated voices, search engine results, and generative AI responses to user queries.",
          "Applied consistent evaluation standards and SEO best practices to help improve model performance, ranking accuracy, and overall training data quality in large-scale data annotation workflows."
        ]}
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
import React, { FC } from 'react'
import SocialBadge from './ui/SocialBadge';

interface TerminalProps {
  className?: string;
}

const Terminal: FC<TerminalProps> = ({ className }) => {
  const lineMargin = 'mb-2 md:m-0'

  return (
    <div className={`${className} z-10 bg-cinder rounded-xl border-4 border-thunder overflow-clip cursor-default`}>
      <div className='w-full h-10 rounded-t-xl bg-thunder'>

      </div>
      <div className='p-6 text-gray-400'>
        <h2 className='text-white text-3xl font-semibold'>👋 README.md</h2>
        <div className='mt-4 leading-6 md:leading-7'>
          <p className={lineMargin}>👨‍🎓 Software Engineering @ McMaster University<br/></p>
          <p className={lineMargin}>💾 Web Developer @ McMaster GDSC<br/></p>
          <p className={lineMargin}>💽 Project Team Dev @ McMaster AI Society<br/></p>
          <p className={lineMargin}>💼 Employed as an Online Data Analyst @ TELUS Digital<br/></p>
          <p className={lineMargin}>🌱 Currently practicing Full-Stack Development<br/></p>
          <p className={lineMargin}>✅ Open to work!<br/></p>
          <br/>
        </div>
        <div>
          <p>Connect with me!</p> 
          <div className='flex flex-row flex-wrap gap-x-4 gap-y-1 mt-2'>
            <SocialBadge style='linkedin'/>
            <SocialBadge style='github'/>
            <SocialBadge style='spotify'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;

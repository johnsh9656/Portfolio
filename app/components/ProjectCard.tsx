import React from 'react'
import { FC } from 'react';
import Image from 'next/image';

interface ProjectCardProps {
    imgUrl: string;
    title: string;
    description: string;
}

const ProjectCard: FC<ProjectCardProps> = ({ imgUrl, title, description }) => {
  return (
    <div className='mt-4 shadow-lg rounded-xl bg-cinder mx-4 md:mx-0 cursor-pointer'>
      <div
        className='z-10 h-56 md:h-60 rounded-t-xl relative group overflow-clip'
        style={{ /*background: `url(${imgUrl})`,*/ backgroundSize: "cover" }}
      >
        <Image src={imgUrl} alt={title} fill={true} className='object-cover w-full object-top'/>
        <div className='overlay absolute top-0 left-0 w-full h-full bg-black bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-10 transition-all duration-500 rounded-t-xl items-center justify-center'>
          {/*<Link href={gitUrl} className="mr-2 h-14 w-14 border-2 relative rounded-full border-creole hover:border-twine">
            <Image src={LinkIcon} alt="code" className='h-10 w-10 text-creole m-2 absolute group-hover/link:text-twine' />
          </Link>
          <Link href={previewUrl} className="mr-2 h-14 w-14 border-2 relative rounded-full border-creole hover:border-twine">
            <Image src={EyeIcon} alt="code" className='h-10 w-10 text-creole m-2 absolute group-hover/link:text-twine' />
          </Link>*/}
        </div>
      </div>
      <div className='relative text-white rounded-b-xl bg-cinder py-4 px-4 z-20'>
        <h5 className='text-xl font-semibold mb-2'>{title}</h5>
        <p className='text-gray-400 text-sm'>{description}</p>
      </div>
    </div>  
  )
}

export default ProjectCard
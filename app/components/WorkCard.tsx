import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface WorkCardProps {
  title: string;
  employer: string;
  description: string;
  buttonText: string;
  imageUrl: string;
  link: string;
  timeline: string;
}

const WorkCard: FC<WorkCardProps> = ({ title, employer, description, buttonText, imageUrl, link, timeline }) => {
  
  return (
    <div className="relative bg-black text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-sm mx-auto m-4">
      <h2 className="text-2xl font-bold mb-1">{title}</h2>
      <h3 className='text-lg italic mb-0 text-gray-300'>@ {employer}</h3>
      <h4 className='text-sm italic mb-2 text-gray-300'>{timeline}</h4>
      <p className="text-[.9rem] mb-4">{description}</p>
      
      <Link href={link} passHref>
        <div className="block">
          <div className="overflow-hidden rounded-lg transform transition-transform duration-300 hover:scale-105">
            <Image
              src={imageUrl}
              alt={employer}
              width={500}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
      </Link>

    { link == "" ? null :
      <div className="mt-6 flex justify-between items-center">
        <Link href={link} className="text-sm text-gray-400 hover:text-gray-300 transition duration-300">Try now →</Link>
        <Link href={link}className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition duration-300">{buttonText}</Link>
      </div>
    }
      
    </div>
  );
};

export default WorkCard;

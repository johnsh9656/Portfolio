import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

interface WorkRowProps {
  title: string;
  employer: string;
  timeline: string;
  description: string[];
  imageUrl: string;
  link?: string;
  extraLink?: string;
  extraLinkText?: string;
  buttonText?: string
}

const WorkRow: FC<WorkRowProps> = ({title, employer, timeline, description, imageUrl, link, extraLink, extraLinkText, buttonText}) => {
  

  return (
    <div className="group sm:w-full w-screen sm:max-w-[98vw] lg:max-w-6xl xl:max-w-7xl rounded-xl border border-white/10 bg-black/40 p-4 pl-2 backdrop-blur-sm transition-all duration-300 hover:shadow-md hover:shadow-black">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-stretch">
        
        {/* LEFT: timeline line */}
        <div className="hidden sm:flex w-4 justify-center">
          <div className="w-px bg-white/15 rounded-full" />
        </div>

        {/* CENTER: content */}
        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <div className="min-w-0">
              <h2 className="text-wrap text-lg font-semibold text-twine">
                {title}{' '}
                <span className="font-normal text-white/60">
                  @ {employer}
                </span>
              </h2>
              <p className="text-sm text-white/50">{timeline}</p>
            </div>

            {(link || extraLink) && (
              <div className="mt-2 flex gap-2 sm:mt-0 sm:shrink-0">
                {extraLink && extraLinkText && (
                  <Link
                    href={extraLink}
                    className="text-sm text-white/60 hover:text-white transition"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {extraLinkText}
                  </Link>
                )}
                {link && (
                  <Link
                    href={link}
                    className="rounded-full bg-purple-200 px-3 py-1 text-sm font-medium text-black hover:bg-purple-200/90 transition duration-300 hover:shadow-md"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {buttonText}
                  </Link>
                )}
              </div>
            )}
          </div>

          <div className="mt-3 space-y-3 text-sm leading-relaxed text-white/80">
            {description.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* RIGHT: image */}
        <div className="relative hidden sm:block h-28 w-40 max-w-[30vw] transition-all duration-300 group-hover:scale-[102%] shrink-0 overflow-hidden rounded-lg border border-white/10 sm:h-auto sm:self-stretch sm:w-72 shadow-black shadow-md">
          <Image
            src={imageUrl}
            alt={employer}
            fill
            className="object-cover"
            sizes="200px"
          />
        </div>
      </div>
    </div>
  );
}

export default WorkRow
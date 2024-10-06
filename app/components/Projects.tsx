"use client"
import React, { useEffect, useId, useRef, useState } from "react";
import ProjectCard from './ProjectCard'
import { projectsData, projectTags } from '@/data/data'
import ProjectTag from './ui/ProjectTag'
import { AnimatePresence, motion } from 'framer-motion'
import { useOutsideClick } from "@/hooks/use-outside-click";
import { CloseIcon } from "./ui/CloseIcon";
import Image from "next/image";
import Icon from "./ui/Icon";

const Projects = () => {
  // expandable cards
  const [active, setActive] = useState<(typeof projectsData)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }
    if (active && typeof active === "object") {
      //document.body.style.overflow = "hidden";
    } else {
      //document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));
  //

  const [currentTags, setTags] = useState(["All"]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleTagChange = (newTag: string) => {
    // handle "All" tag
    if (newTag === "All") setTags(["All"]);

    // handle click on already selected tag
    else if (currentTags.includes(newTag)) {
      const newTags = currentTags.filter((tag) => (
        tag !== newTag
      ));
      // set tag to "All" if no tags selected
      newTags.length == 0 ? setTags(["All"]) : setTags(newTags);
    }

    // handle new tag added
    else {
      currentTags.includes("All") ? setTags([newTag]) : setTags([...currentTags, newTag])
    }

  }

  const filteredProjects = currentTags.includes("All") ? projectsData : projectsData.filter((project) => (
    project.tags.some(item => currentTags.includes(item))
  ));

  return (<div id="projects" className='mt-12'>
    <h1 className='heading mt'>
      Some of my <span className='text-purple-200'>Projects</span> 💻🎮
    </h1>
    <div className='text-white flex flex-row flex-wrap justify-center items-center gap-2 py-4 mb-2'>
       {projectTags.map((tag, index) => (
        <ProjectTag 
          key={index}
          name={tag} 
          onClick={() => handleTagChange(tag)}
          isSelected={currentTags.includes(tag)}
        />
       ))}
    </div>
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 gap-y-0 md:gap-4"'>
      {filteredProjects.map((project, idx) => (
        <div key={project.id} onMouseEnter={() => setHoveredIndex(idx)} onMouseLeave={() => setHoveredIndex(null)} className="relative group block p-2 h-full w-full" onClick={() => setActive(project)}>
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
          />
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-primary-content bg-opacity-40 block rounded-2xl z-0 mt-[.4rem]"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.10 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.10, delay: 0.1 },
                }}
              />
            )}
          </AnimatePresence>
          
        </div>
      ))}
    </div>
    
    {/* detailed project information */}
    {active && typeof active === "object" && (
      <div className="fixed inset-0 grid place-items-center z-[110] bg-black bg-opacity-80 md:bg-opacity-50">
        <button 
          className="flex absolute top-2 right-2 items-center justify-center bg-white rounded-full h-6 w-6" 
          onClick={() => setActive(null)}
        >
          <CloseIcon />
        </button>
        <motion.div 
          className="overflow-y-scroll w-full max-w-[500px] h-fit max-h-[100%] flex flex-col bg-neutral-900 rounded-3xl overflow-hidden"
          ref={ref}
          initial={{ y: '100vh', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '100vh', opacity: 0 }}
          transition={{ type: 'tween', duration: 0.4, ease: "easeOut"}}
        >
          <div>
            <Image priority width={200} height={200} src={active.image} alt={active.title} className="w-full max-h-64 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"/>
          </div>

          <div>
            <div className="flex justify-between items-start p-4">
              <div className="">
                <h3 className="font-medium text-neutral-200 text-xl">
                  {active.title}
                </h3>
                <p className="text-neutral-400 text-base">
                  {active.date || ''}
                </p>
                
                <br/>
                <div className="relative pr-4">
                  <p className="text-neutral-400 text-base">
                    <span className="text-neutral-300 border-b-[1px]">Overview:</span> {active.description}
                  </p>
                  
                  <div className="text-base h-full pb-4 flex flex-col items-start gap-4 text-neutral-400  [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]">
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </div>
                  <div className="flex flex-row flex-wrap gap-2 pt-1 pb-6">
                    {active.links?.map((link, _) => (
                      <a href={link.url} className={`bg-${link.color} text-white px-4 py-3 text-sm rounded-2xl font-bold`} key={_}>
                        {link.title}
                      </a>
                    ))}
                  </div>
                  <div className="flex flex-row flex-wrap pb-2 overflow-auto gap-2">
                    {active.techStack?.map((icon, _) => (
                      <Icon style={icon} key={_}/>
                    ))}
                  </div>
                </div>
              </div>
              
            </div>            
          </div>
        </motion.div>
      </div>
    )}

  </div>
  )
}

export default Projects
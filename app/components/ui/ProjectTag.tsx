import React from 'react'
import { FC } from 'react';

interface ProjectTagProps {
    name: string;
    onClick: any // eslint-disable-line @typescript-eslint/no-explicit-any
    isSelected: boolean;
}

const ProjectTag: FC<ProjectTagProps> = ({ name, onClick, isSelected}) => {
    const buttonStyles = isSelected ? "text-gray-200 bg-creole border-twine hover:text-twine" : "text-gray-600 bg-cinder border-gray-900 hover:text-accent"

  return (
    <button onClick={() => onClick(name)} className={`${buttonStyles} rounded-full border-2 px-3 py-2 text-lg cursor-pointer shadow-sm`}>
        {name}
    </button>
  )
}

export default ProjectTag
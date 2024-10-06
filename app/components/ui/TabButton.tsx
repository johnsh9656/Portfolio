import React, { FC }from 'react'

interface TabButtonProps {
    active: boolean;
    selectTab: ()=> void;
    children: React.ReactNode;
}

const TabButton: FC<TabButtonProps> = ({ active, selectTab, children }) => {
  const buttonClass = active ? 'hover:text-orange-200 text-twine border-b border-purple-300' : 'text-gray-500 hover:text-gray-200';

  return (
    <button onClick={selectTab}>
      <p className={`${buttonClass} mr-3 font-semibold`}>
        {children}
      </p>
    </button>
  )
}

export default TabButton
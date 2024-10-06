import React from 'react';
import { 
  SiNextdotjs, SiReact, SiTailwindcss, SiTypescript, SiVite, SiHtml5, SiCss3, SiJavascript, 
  SiFirebase, SiHostinger, SiNpm, SiUnity, SiCsharp, SiC, SiPython, SiLinux, SiGit, 
  SiMysql, SiGraphql, SiNodedotjs, SiPostcss, SiFramer
} from 'react-icons/si';
import { FaJava } from "react-icons/fa6";

const Icon = ({ style, size = 40 }: { style: string; size?: number }) => {
  const iconMap: { [key: string]: { icon: JSX.Element; color: string } } = {
    next: { icon: <SiNextdotjs />, color: '#000000' }, // Next.js
    react: { icon: <SiReact />, color: '#61DAFB' }, // React
    tailwind: { icon: <SiTailwindcss />, color: '#38B2AC' }, // Tailwind CSS
    typescript: { icon: <SiTypescript />, color: '#3178C6' }, // TypeScript
    vite: { icon: <SiVite />, color: '#646CFF' }, // Vite
    html: { icon: <SiHtml5 />, color: '#E34F26' }, // HTML
    css: { icon: <SiCss3 />, color: '#1572B6' }, // CSS
    javascript: { icon: <SiJavascript />, color: '#F7DF1E' }, // JavaScript
    firebase: { icon: <SiFirebase />, color: '#FFCA28' }, // Firebase
    hostinger: { icon: <SiHostinger />, color: '#6730E3' }, // Hostinger
    npm: { icon: <SiNpm />, color: '#CB3837' }, // NPM
    unity: { icon: <SiUnity />, color: '#222C37' }, // Unity
    csharp: { icon: <SiCsharp />, color: '#239120' }, // C#
    java: { icon: <FaJava />, color: '#007396' }, // Java
    c: { icon: <SiC />, color: '#A8B9CC' }, // C
    python: { icon: <SiPython />, color: '#3776AB' }, // Python
    linux: { icon: <SiLinux />, color: '#FCC624' }, // Linux
    git: { icon: <SiGit />, color: '#F05032' }, // Git
    mysql: { icon: <SiMysql />, color: '#4479A1' }, // MySQL
    graphql: { icon: <SiGraphql />, color: '#E10098' }, // GraphQL
    nodejs: { icon: <SiNodedotjs />, color: '#339933' }, // Node.js
    postcss: { icon: <SiPostcss />, color: '#DD3A0A' }, // PostCSS
    framer: { icon: <SiFramer />, color: '#0055FF' }, // Framer Motion
  };

  // Check if the icon exists in the map, otherwise return a default placeholder
  const selectedIcon = iconMap[style] || { icon: <span>Unknown Icon</span>, color: 'grey' };

  return (
    <div className="rounded-3xl">
      {/* Render the icon with the specific color and size */}
      {React.cloneElement(selectedIcon.icon, { color: selectedIcon.color, size })}
    </div>
  );
};

export default Icon;

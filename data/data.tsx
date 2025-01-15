import React from "react"
import Icon from "@/app/components/ui/Icon";
import Link from "next/link";

export const projectTags = [
  'All', 'Web Dev', 'Game Dev', 'Front-End', 'Back-End', 'Machine Learning',  'Automation', 'Hackathon', 'Course Work', "Teams"
]

export const projectsData = [
  {
    id: 13,
    title: 'Art Suggester AI',
    description: `Full-stack web app to suggest artwork based on art supplies, made with the McMaster AI Society.`,
    image: "//harrisonjohns.me/images/artsuggester.png",
    date: "October 2024 - February 2025",
    tags: ["Machine Learning", "Web Dev", "Front-End", "Back-End", "Teams"],
    links: [
      {title: 'GitHub', url: 'https://github.com/McMasterAI2024-2025/ArtSuggesterAI', color: 'thunder'},
    ],
    techStack: ['python', 'tensorflow', 'numpy', 'pillow', 'flask', 'react', 'typescript'],
    content: () => {
      return (
        <p>
          🎨 Art Suggester is an AI-based art recommendation tool designed to optimize image recognition techniques using a convolutional neural network (CNN). It identifies various art mediums such as paint, pencil crayons, and markers, providing personalized recommendations based on user preferences.
          <br/><br/>
          🖌️ I worked on planning, the front-end design and code, the Flask-based API, getting datasets for the CNN models, preprocessing the training and testing data, and optimizing the object and colour detection of user-uploaded images.
        </p>
      );
    },
  },
  {
    id: 12,
    title: 'AI Clothing Classifier',
    description: `Full-stack web app with a custom TensorFlow CNN to classify user-uploaded images of clothes.`,
    image: "//harrisonjohns.me/images/clothingclassifier.png",
    date: "January 2025",
    tags: ["Machine Learning", "Web Dev", "Front-End", "Back-End"],
    links: [
      {title: 'GitHub', url: 'https://github.com/johnsh9656/ClothingClassification', color: 'thunder'},
    ],
    techStack: ['python', 'tensorflow', 'numpy', 'pillow', 'flask', 'next', 'typescript', 'tailwind'],
    content: () => {
      return (
        <p>
          👕 This full-stack web app uses a machine learning model to classify clothing images. Upload an image, and the app predicts the most likely category (e.g., T-shirt, coat) along with the most likely classifications and their respective probabilities.
          <br/><br/>
          💻 What I built:
          Trained the ML model in TensorFlow (Google Colab) using the Fashion MNIST dataset.
          Flask backend to handle image uploads, preprocessing and interacting with the ML model.
          Next.js (w/ TypeScript) + Tailwind CSS frontend for responsive, user-friendly experience.
        </p>
      );
    },
  },
  {
    id: 11,
    title: 'GDSC McMaster Website',
    description: `Official website for GDSC's McMaster chapter (not yet live).`,
    image: "//harrisonjohns.me/images/gdscwebsite.png",
    date: "October 2024 - January 2025",
    tags: ["Web Dev", "Front-End", "Teams"],
    links: [
      {title: 'GitHub', url: 'https://github.com/DSC-McMaster-U/website', color: 'thunder'},
    ],
    techStack: ['next', 'react', 'typescript', 'tailwind', 'vite', 'npm', 'sanity', 'jira'],
    content: () => {
      return (
        <p>
          💻 I developed the new GDSC website (soon to be live) as part of the McMaster GDSC's development team. I collaborated in an agile Jira environment to build a new responsive website with an industry tech stack, while adhering to Material Design rules. I created and maintained feature-specific Git branches, ensuring clean code reviews and integration into the main branches. Additionally, I integrated Sanity CMS for dynamic content updates, enabling non-technical contributors to manage the site
        </p>
      );
    },
  },
  {
    id: 10,
    title: 'GDSC Mac-a-Thon Website',
    description: `Official website for the McMaster GDSC's 2025 hackathon, the Mac-a-Thon.`,
    image: "//harrisonjohns.me/images/macathon.png",
    date: "December 2024 - January 2025",
    tags: ["Web Dev", "Front-End", "Teams"],
    links: [
      {title: 'Live Site', url: 'https://mac-a-thon.gdscmcmasteru.ca/', color: 'accent'},
      {title: 'GitHub', url: 'https://github.com/DSC-McMaster-U/mac-a-thon', color: 'thunder'},
    ],
    techStack: ['next', 'react', 'typescript', 'tailwind', 'vite', 'npm', 'sanity', 'jira'],
    content: () => {
      return (
        <p>
          💻 A modern website I developed as part of the McMaster GDSC's development team. I worked in an agile Jira environment with the team lead to build a responsive, modern website to be used by all students interested in the hackathon. I used a modern tech stack and Sanity integration so that the non-technical teams could manage the content of the site.
        </p>
      );
    },
  },
  {
    id: 9,
    title: 'Blackjack in C',
    description: `Blackjack recreated with C for a linux environment, with a GUI (team project).`,
    image: "//harrisonjohns.me/images/blackjack.png",
    date: "December 2024",
    tags: ["Course Work", "Game Dev"],
    links: [
      {title: 'GitHub', url: 'https://github.com/johnsh9656/Blackjack-in-C', color: 'accent'},
    ],
    techStack: ['c', 'linux', 'git'],
    content: () => {
      return (
        <p>
          ♠️ As a final group project, I worked in a small team of 4 to develop Blackjack in C, working with a terminal interface or with a GUI.
          <br></br><br></br>
          I worked on the card logic, handling game over states, the main game loop, and part of the build coverage tests and GitHub Actions.
        </p>
      );
    },
  },
  {
    id: 8,
    title: 'Autonomous Tic-Tac-Toe',
    description: `2, 1, or 0 player Tic-Tac-Toe made with Java and Maven with OOP design principles.`,
    image: "//harrisonjohns.me/images/tictactoe.png",
    date: "November 2024",
    tags: ["Course Work", "Automation", "Game Dev"],
    links: [
      {title: 'GitHub', url: 'https://github.com/johnsh9656/TicTacToe', color: 'accent'},
    ],
    techStack: ['java', 'maven'],
    content: () => {
      return (
        <p>
          🌮 Tic-Tic-Toe, made for SFWRENG 2OP3. 2 Projects: one is standard tic-tac-toe with a 3x3 board. It can be played by 2, 1, or 0 user players, with 0, 1, or 2 computer players with set winning strategies. 
          <br></br><br></br>
          The other project (Project2) extends the functionality of the first project, with a variable grid size (3-20) and updated computer players to match.
        </p>
      );
    },
  },
  {
    id: 7,
    title: 'Next.js Portfolio Website',
    description: `A modern, responsive Next.js and Tailwind portfolio hosted on Hostinger.`,
    image: "//harrisonjohns.me/images/porthead.png",
    date: "September 2024",
    tags: ["Web Dev", "Front-End"],
    links: [
      {title: 'Live Site', url: 'https://www.harrisonjohns.me', color: 'accent'},
      {title: 'GitHub', url: 'https://github.com/johnsh9656', color: 'thunder'},
    ],
    techStack: ['react', 'typescript', 'next', 'tailwind', 'vite', 'hostinger', 'npm', 'nodejs', 'framer'],
    content: () => {
      return (
        <p>
          💻 A modern website I developed to be my personal portfolio, updated regularly. It displays my work experience, projects, tech stack, aspirations, etc.. This project was my first experience using Next.js Aceternity, Framer Motion, and TypeScript in a larger project.
        </p>
      );
    },
  },
  {
    id: 6,
    title: '30 Days of Web Dev',
    description: `30-day web dev challenge, going from basic HTML basics to a full-stack Duolingo clone.`,
    date: "July - August,  2024",
    image: "//harrisonjohns.me/images/thirtydays.png",
    tags: ["Web Dev", "Front-End", "Back-End"],
    techStack: ['html', 'css', 'javascript', 'react', 'vite', 'tailwind', 'typescript', 'npm', 'nodejs'],
    links: [
      {title: 'GitHub', url: 'https://github.com/johnsh9656/30-Days-of-WebDev', color: 'thunder'},
    ],
    content: () => {
      return (
        <p>
          👨‍💻 This project was extremely valuable to my web development journey, as I learned a lot and constantly pushed myself to improve, in just a relatively short period of time. <br/>
          📌 Some of my highlights include a mock product page, a movie database webpage, a React social media feed, a responsive mini-portfolio, and a full-stack Duolingo app.
        </p>
      );
    },
  },
  {
    id: 5,
    title: 'Traitor Online',
    description: `Multiplayer game made using Unity's Netcode for GameObjects, inspired by Werewolf.`,
    date: 'Sometime in 2024...',
    image: "//harrisonjohns.me/images/traitor.jpg",
    tags: ["Game Dev"],
    techStack: ['unity', 'csharp'],
    links: [
      {title: 'GitHub', url: 'https://github.com/johnsh9656/TraitorOnline', color: 'thunder'},
      {title: 'Build 1.0', url: 'https://drive.google.com/drive/u/3/folders/1HHQ2pQo7TdLw4gmW3qn5odtVqLt2kpB4', color: 'twine'},
    ],
    content: () => {
      return (
        <p>
          🎮 This project served as an experiment for me to explore the various aspects of online game dev. Despite its simplicity, I gained valuable insights and knowledge from the development process and Unity’s Netcode for GameObjects documentation.
          <br/>
          💡 Working on this project in my spare time was incredibly rewarding, and I look forward to applying what I’ve learned to larger projects in the future. You can find the code on GitHub, where the README file includes a link to the Google Drive folder for version 1.0.
        </p>
      );
    },
  },
  {
    id: 4,
    title: 'Well Reminder',
    description: `Website and Chrome Extension for the GDSC Solutions Challenge 2024.`,
    date: 'January 2024',
    image: "//harrisonjohns.me/images/wellreminder.jpg",
    tags: ["Hackathon", "Web Dev", "Front-End"],
    techStack: ['html', 'css', 'javascript'],
    links: [
      {title: 'GitHub', url: 'https://github.com/johnsh9656/Well-Reminder', color: 'thunder'},
    ],
    content: () => {
      return (
        <p>
          🪶 This project was developed as part of the Google Developer Student Clubs McMaster University Solution Challenge 2024.<br/>
          🙌 Well Reminder Chrome aims to support mental health by addressing the issue of stigma, which can prevent individuals from reaching out for the support they need. It provides quick access to local mental health helplines and resources, and provides occasional reminders of available support.
        </p>
      );
    },
  },
  {
    id: 3,
    title: 'Engineering Design Projects',
    description: `4 Engineering Design Projects for the 1P13 course, with a live portfolio.`,
    date: 'September 2023 - April 2024',
    image: "//harrisonjohns.me/images/1p13.png",
    tags: ["Automation", "Course Work"],
    techStack: ['python'],
    links: [
      {title: 'Portfolio Site', url: 'https://sideways-lung-749.notion.site/Harrison-Johns-1P13-Portfolio-e57e771cef2e4359855c3e8a8d2ba923', color: 'accent'},
      {title: 'Project 1', url: 'https://sideways-lung-749.notion.site/Design-Project-1-Renewable-Technology-Challenge-e6fadc7f5c0c420e9c431472ed5f47ec', color: 'thunder'},
      {title: 'Project 2', url: 'https://sideways-lung-749.notion.site/Design-Project-2-Get-a-Grip-b38047c2adae41f091441b5090645a86', color: 'thunder'},
      {title: 'Project 3', url: 'https://sideways-lung-749.notion.site/Design-Project-3-Revenge-of-the-Recycling-System-bb83765ddf46401590eb2e03e0124172', color: 'thunder'},
      {title: 'Project 4', url: 'https://sideways-lung-749.notion.site/Design-Project-4-Power-in-Community-8ffb8581e0564c0f9380bd30a691e13f', color: 'thunder'},
      {title: 'Simulation Video', url: 'https://www.youtube.com/watch?v=SPs7h1PWcK4&t=350s', color: 'primary-content'},
    ],
    content: () => {
      return (
        <p>
          <br/>
          🍃 Project 1: Renewable Technology Challenge <br/>
          Material selection, research, AutoDesk Inventor modelling, deflection simulation. <br/>
          🏥 Project 2: Get a Grip <br/>
          Admin of modelling sub-team, AutoDesk Inventor modelling, design evolution, prototyping, 3D printing, testing. <br/>
          ♻️ Project 3: Revenge of the Recycling System <br/>
          Admin of coding sub-team, workflows, design evolution, Python programming, simulation and physical testing of system. <br/>
          👩‍🦼 Project 4: Power in Community <br/>
          Team manager, iterative design process to solve problem faced by real client, fabrication and validation of design, presentation of solution. <br/>
        </p>
      );
    },
  },
  {
    id: 2,
    title: 'Another VR Dungeon Game',
    description: `VR dungeon crawler made with Unity's XR integration.`,
    date: 'August, 2023',
    image: "//harrisonjohns.me/images/vrdungeon.png",
    tags: ["Game Dev"],
    techStack: ['unity', 'csharp'],
    links: [
      {title: 'GitHub', url: 'https://github.com/johnsh9656/AnotherVRDungeonGame', color: 'thunder'},
      {title: 'Pre-Alpha Build', url: 'https://drive.google.com/drive/folders/105WwW5unz2_VFZoEJSdvfej1x8B8FquD?usp=sharing', color: 'accent'},
    ],
    content: () => {
      return (
        <p>
          🎮 Although the game never reached a fully finished state, it's ultimate purpose was for me to experiment with coding for VR integration.
          <br/>
          📝 I really enjoyed experimenting with Unity's VR support and trying to tackle the new problems that emerge in game-development with the elements of VR. Thankfully, Unity's and other's sources documentation for XR integration are extensive.
        </p>
      );
    },
  },
  {
    id: 1,
    title: 'Untitled Racing Game',
    description: `A single-player 3D aracade racing game made with the Unity 3D Engine.`,
    date: '2022',
    image: "//harrisonjohns.me/images/racinggame.png",
    tags: ["Game Dev"],
    techStack: ['unity', 'csharp'],
    links: [
      {title: 'GitHub', url: 'https://github.com/johnsh9656/UntitledRacingGame-2022-Code', color: 'thunder'},
      {title: 'Drive Download', url: 'https://drive.google.com/drive/folders/1ank4rRDu_duDL8pwJGfh4UFVAia0oesh', color: 'accent'},
      {title: 'Web Build', url: 'https://sharemygame.com/@MapleSyrup/untitled-racing-game', color: 'accent'},
    ],
    content: () => {
      return (
        <p>
          🎮 Although the game never reached a fully finished state, it's ultimate purpose was for me to experiment with coding for VR integration.
          <br/>
          📝 I really enjoyed experimenting with Unity's VR support and trying to tackle the new problems that emerge in game-development with the elements of VR. Thankfully, Unity's and other's sources documentation for XR integration are extensive.
        </p>
      );
    },
  },
  {
    id: 0,
    title: 'Laser Defender',
    description: `A Galaga-inspired infinite wave shooter made using the Unity 2D Engine.`,
    date: 'December 2019',
    image: "//harrisonjohns.me/images/laserdefender.png",
    tags: ["Game Dev"],
    techStack: ['unity', 'csharp'],
    links: [
      {title: 'GitHub', url: 'https://github.com/johnsh9656/LaserDefender-2019-', color: 'thunder'},
      {title: 'Web Build', url: 'https://sharemygame.com/@MapleSyrup/laser-defender', color: 'accent'},
    ],
    content: () => {
      return (
        <p>
          ☄️ Laser Defender was the first complete game that I developed, and is one that I am most proud of! Developing this game played a role in inspiring me to continue game and software development.
          <br/>
          🛸 The endless, increasingly difficult gameplay loop kept my friends competing for the highest score, with individual attempts lasting hours!
        </p>
      );
    },
  },
]

export const techStack = [
  'html', 'css', 'javascript', 'typescript', 'react', 'next', 'tailwind', 'npm', 'vite', 'graphql', 'firebase', 'csharp', 'unity', 'java', 'maven', 'python', 'mysql', 'linux', 'git', 'nodejs', 'postcss', 'framer', 'c', 'tensorflow', 'numpy', 'opencv', 'flask'
]

export const TAB_DATA = [
  {
    title: "Tech Stack",
    id: "tech",
    content: (
      <div className='mt-2 flex flex-row flex-wrap gap-2'>
        {techStack.map((tech, idx) => (
          <Icon style={tech} key={idx} />
        ))}
      </div>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="text-gray-400">
        <div>
          <h3 className="text-lg font-semibold mt-0"><span className="text-md font-normal text-gray-300">Software Engineering, Bachelor of Engineering</span></h3>
          <span className="font-gray-500 font-semibold text-md">McMaster University</span>
          <p>2023-2027</p>
          <p>GPA: 11.7/12, 3.91/4</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mt-4"><span className="text-md font-normal text-gray-300">IB Diploma</span></h3>
          <span className="font-gray-500 font-semibold text-md">Guelph Collegiate Vocational Institute</span>
          <p>2019-2023</p>
          <p>Grade: IB 39, top 9.24% globally</p>
        </div>
      </div>

      
    )
  },
  {
    title: "Awards",
    id: "awards",
    content: (
      <div className="text-gray-400">
        <div className="mb-2">
          <span className="text-gray-200 font-semibold text-base">MacChangers, 2023-24</span>
          <ul className="list-disc text-gray-300">
            <li>- Design Thinker Award</li>
            <li>- Principled Thinker Award</li>
            <li>- Team Player Award</li>
            <li>- Most Creative Solution</li>
            <li>- Most Inclusive Deliverable</li>
          </ul>
        </div>
        <div className="mb-2">
          <span className="text-gray-200 font-semibold text-base">Faculty of Eng. Award of Excellence, 2023</span>
        </div>
        <div className="mb-2">
          <span className="text-gray-200 font-semibold text-base">Teacher's Award, 2023</span>
          <p>Guelph Collegiate Vocational Institute</p>
        </div>
        <div className="mb-2">
          <span className="text-gray-200 font-semibold text-base">Music Leadership Award, 2023</span>
          <p>Ontario Band Association</p>
        </div>
      </div>
    )
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <div className="flex flex-col">
        <Link href="https://www.linkedin.com/learning/certificates/197e258621c7e28d24ffb322384502f41e601ae632011ca7f1ebc2f3b21f7dcf?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B%2FJ%2FsgxGbRK%2B%2BYnBlhRcHJQ%3D%3D">
          SharePoint Online Essential Training
        </Link>
        <Link href="https://www.linkedin.com/learning/certificates/91738c2cafdf3f422d386daaf6bc5626ab7a8a42cec586373adae87a1e82a7a4?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B%2FJ%2FsgxGbRK%2B%2BYnBlhRcHJQ%3D%3D">
          Learning Arduino: Foundations
        </Link>
        <Link href="https://www.linkedin.com/learning/certificates/d0b7c6ec73aede46c6b48cc59846ac331a7c2d1aaf6ce28d83ed60ba725db35d?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B%2FJ%2FsgxGbRK%2B%2BYnBlhRcHJQ%3D%3D">
          Learning SQL Programming
        </Link>
    </div>
    )
  },
];
"use client";
import { assets } from "@/assests/assets";
import ProjectItem from "./ProjectItem";
import { useState } from "react";
import ProjectModal from "./ProjectModal";
const ProjectsArr = [
  {
    name: "Connect",
    subtitle: "WebSocket based Chat App",
    description: "Connect is a chatting platform built using socket.io . It offers instant messaging and can show active users on the chat.",
    techstacks: "React || Node || Postgres || Prisma || Socket.io ",
    project_link: "https://connect-xud7.onrender.com/",
    github_link: "https://github.com/Appy-007/Connect",
    icon: assets.connecticon,
  },
  {
    name: "LearnZ",
    subtitle: "Frontend project on learning management system",
    description: "Learn Z is an online learning platform . Here learners can search courses based on their interest, preview courses and enroll them. Additionally it contains an educator tab where educators can create courses, add lectures and see current number of enrolled students",
    techstacks: "React || Redux || Tailwind",
    project_link: "https://learn-z.vercel.app/",
    github_link: "https://github.com/Appy-007/learnZ",
    icon: assets.learnzicon,
  },
  {
    name: "Nextjs Auth",
    subtitle: "Basic Next js authentication app",
    description: "It is a basic authentication app created using nextjs to show some random messages after logging in",
    techstacks: "Nextjs || TypeScript || MongoDB",
    project_link: "https://nextjs-auth-app-seven.vercel.app/login",
    github_link: "https://github.com/Appy-007/Nextjs-Auth-App",
    icon: assets.nextjsauthicon,
  },
];
export default function Projects() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [activeProject,setActiveProject]=useState<string>('')
  const handleProjectClick = (name: string) => {
    setShowModal(true);
    setActiveProject(name)
  };

  const handleModalClose=()=>{
    setShowModal(false)
    setActiveProject('')
  }
  return (
    <>
      <div id="projects" className="scroll-mt-20 flex flex-col items-center mb-20 ">
        <h1 className="text-4xl">Projects</h1>
        <div className="flex gap-4 w-full justify-center mt-8 flex-wrap">
          {ProjectsArr.map((project) => (
            <ProjectItem
              key={project.name}
              name={project.name}
              subtitle={project.subtitle}
              icon={project.icon}
              onMouseClick={handleProjectClick}
            />
          ))}
        </div>
         <a href="https://github.com/Appy-007?tab=repositories" target="_blank" className="rounded-full px-1 md:px-4 mt-4 py-1 md:py-2 border border-black  text-center flex items-center cursor-pointer max-md:text-sm hover:bg-black dark:hover:bg-darkHover dark:border-white hover:text-white">Show More...</a>
      </div>
      <div>
        {showModal && activeProject.length >0 && ProjectsArr.filter((project)=>project.name === activeProject).map((curproject)=><ProjectModal key={curproject.name} actvproject={curproject} onClose={handleModalClose}/>) }
      </div>
    </>
  );
}

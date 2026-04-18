"use client";
import { assets } from "@/assests/assets";
import ProjectItem from "./ProjectItem";
import { useState } from "react";
import ProjectModal from "./ProjectModal";
const ProjectsArr = [
  {
    name: "Scribble Draw",
    subtitle: "Multiplayer Doodle game.",
    description: "Create your own room or join an existing room and play with your freinds ",
    techstacks: "Reactjs || Nestjs || Web Socket",
    project_link: "https://colabdraw-j6uk.onrender.com/",
    github_link: "https://github.com/Appy-007/ColabDraw",
    icon: assets.scribbleDraw,
  },
  {
    name: "Ticket Manger",
    subtitle: "Issue ticket managing app",
    description: "Create , assign, manage and track tickets",
    techstacks: "Nextjs || MongoDB",
    project_link: "https://manage-tickets-ezae.vercel.app/tickets",
    github_link: "https://github.com/Appy-007/manage-tickets",
    icon: assets.ticketManger,
  },
  {
    name: "Connect",
    subtitle: "WebSocket based Chat App",
    description:
      "Connect is a chatting platform built using socket.io . It offers instant messaging and can show active users on the chat.",
    techstacks: "React || Node || Postgres || Prisma || Socket.io ",
    project_link: "https://connect-xud7.onrender.com/",
    github_link: "https://github.com/Appy-007/Connect",
    icon: assets.connecticon,
  },
  {
    name: "LearnZ",
    subtitle: "Frontend project on learning management system",
    description:
      "Learn Z is an online learning platform . Here learners can search courses based on their interest, preview courses and enroll them. Additionally it contains an educator tab where educators can create courses, add lectures and see current number of enrolled students",
    techstacks: "React || Redux || Tailwind",
    project_link: "https://learn-z.vercel.app/",
    github_link: "https://github.com/Appy-007/learnZ",
    icon: assets.learnzicon,
  },
];
export default function Projects() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [activeProject, setActiveProject] = useState<string>("");
  const handleProjectClick = (name: string) => {
    setShowModal(true);
    setActiveProject(name);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setActiveProject("");
  };
  return (
    <>
      <div
        id="projects"
        className="scroll-mt-20 flex flex-col items-center mb-20 "
      >
        <h1 className="text-4xl">Projects</h1>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-5xl px-4 sm:px-6">
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
        <a
          href="https://github.com/Appy-007?tab=repositories"
          target="_blank"
          className="rounded-full px-4 md:px-6 mt-10 py-2 border border-black text-center flex items-center cursor-pointer max-md:text-sm hover:bg-black dark:hover:bg-darkHover dark:border-white hover:text-white transition-colors duration-300"
        >
          Show More...
        </a>
      </div>
      <div>
        {showModal &&
          activeProject.length > 0 &&
          ProjectsArr.filter((project) => project.name === activeProject).map(
            (curproject) => (
              <ProjectModal
                key={curproject.name}
                actvproject={curproject}
                onClose={handleModalClose}
              />
            ),
          )}
      </div>
    </>
  );
}

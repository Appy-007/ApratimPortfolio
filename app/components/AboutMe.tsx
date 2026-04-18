import { assets } from "@/assests/assets";
import Image from "next/image";
import Info from "./Info";

export default function AboutMe() {
  const InfoArr = [
    {
      title: "Work Experience (1.2 years)",
      icon: assets.project_icon,
      description:
        "Entry Level Associate:Web at Codeclouds IT Solutions Pvt Ltd.",
    },
    {
      title: "Proficient in",
      icon: assets.code_icon,
      description: "Full stack web development, MERN stack, Custom Shopify apps",
    },
    {
      title: "Education",
      icon: assets.edu_icon,
      description:
        "B.Tech in IT from Govt. College of Engineering and Ceramic Technology (CGPA 9.49/10.00)",
    },
  ];
  return (
    <>
      <div
        id="aboutMe"
        className="scroll-mt-20 flex flex-col items-center mb-20"
      >
        <h4 className="text-center px-5 ">Introduction</h4>
        <h1 className="text-center px-5 text-4xl">About Me</h1>
        <div className="flex flex-col lg:flex-row pt-10 lg:px-18 max-lg:items-center justify-center gap-6 ">
          <Image
            src={assets.aboutmedark}
            alt="About me pic"
            className="w-60 md:w-80 lg:w-1/3 rounded-lg "
          />
          <div className="w-full lg:w-2/3  lg:pr-20">
            <p className="pb-4 max-lg:text-center max-lg:px-10">
              Hey, I’m a Full Stack Developer based in Kolkata with more than 1 year of
              experience building scalable web applications using the MERN
              stack. I graduated in 2025 with a B.Tech in Information Technology
              (CGPA: 9.49/10).
            </p>
             <p className="pb-4 max-lg:text-center max-lg:px-10">
             I enjoy turning ideas into fast, user-friendly
              products and continuously improving performance and user
              experience.
            </p>
             <p className="pb-4 max-lg:text-center max-lg:px-10">
             When I’m not coding, I’m probably watching web series
              or following football—loyal to Real Madrid and a huge Cristiano
              Ronaldo fan.
            </p>
            <div className="flex flex-col max-lg:items-center max-lg:gap-6 lg:flex-row gap-2 pb-6">
              {InfoArr.map((info) => (
                <Info
                  key={info.title}
                  title={info.title}
                  icon={info.icon}
                  description={info.description}
                />
              ))}
            </div>
            <p className="text-sm pb-2 max-lg:px-5">Technologies I use..</p>
            <div className="flex flex-wrap justify-center  gap-2 max-lg:px-5">
              <Image
                src={assets.nextjs}
                alt="tools_img"
                className="w-10 border border-zinc-700 p-2 rounded-md hover:translate-y-1 duration-500"
              />
              <Image
                src={assets.react}
                alt="tools_img"
                className="w-10 border border-zinc-700 p-2 rounded-md hover:translate-y-1 duration-500"
              />
              <Image
                src={assets.mongodbicon}
                alt="tools_img"
                className="w-10 border border-zinc-700 p-2 rounded-md hover:translate-y-1 duration-500"
              />
              <Image
                src={assets.nodejs}
                alt="tools_img"
                className="w-10 border border-zinc-700 p-2 rounded-md hover:translate-y-1 duration-500"
              />
              <Image
                src={assets.typescript}
                alt="tools_img"
                className="w-10 border border-zinc-700  rounded-md hover:translate-y-1 duration-500"
              />
              <Image
                src={assets.git}
                alt="tools_img"
                className="w-10 border border-zinc-700 p-2 rounded-md hover:translate-y-1 duration-500"
              />
              <Image
                src={assets.vscode}
                alt="tools_img"
                className="w-10 border border-zinc-700 p-2 rounded-md hover:translate-y-1 duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

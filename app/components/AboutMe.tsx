import { assets } from "@/assests/assets";
import Image from "next/image";
import Info from "./Info";

export default function AboutMe(){
    const InfoArr=[
        {
            title:'Work Experience',
            icon:assets.project_icon,
            descriptiion:'Entry Level Associate:Web at Codeclouds IT Solutions Pvt Ltd.',
        },
        {
            title:'Proficient in',
            icon:assets.code_icon,
            descriptiion:'Full stack web development , MERN stack',
        },
        {
            title:'Education',
            icon:assets.edu_icon,
            descriptiion:'Completed B.Tech in IT from Govt. College of Engineering and Ceramic Technology with a CGPA of 9.49/10.00',
        },
    ]
    return(
        <>
        <div id="aboutMe" className="flex flex-col items-center mb-20">
            <h4 className="text-center px-5 ">Introduction</h4>
            <h1 className="text-center px-5 text-4xl">About Me</h1>
            <div className="flex flex-col lg:flex-row pt-10 lg:px-10 justify-center gap-2">
                <Image src={assets.about_me_pic} alt='About me pic' className="w-fit lg:w-1/3 "/>
                <div className="w-full lg:w-2/3  lg:pr-20">
                <p className="pb-4 max-lg:text-center max-lg:px-10">Hello,I have taken my first step into the technical world as a full stack developer at a software company at Kolkata. I am a recent graduate ,completed B.Tech in IT on 2025 with a CGPA of 9.49 out of 10. My hobbies include watching web series and the three favourite things in my life : football , Real Madrid and my idol Cristiano Ronaldo !!</p>
                <div className="flex flex-col max-lg:items-center max-lg:gap-6 lg:flex-row gap-2 pb-6">
                    {InfoArr.map((info)=><Info key={info.title} title={info.title} icon={info.icon} description={info.descriptiion}/>)}

                </div>
                <p className="text-xs pb-2 max-lg:px-5">Technologies I use..</p>
                <div className="flex gap-2 max-lg:px-5">
                    <Image src={assets.nextjs} alt="tools_img" className="w-10 border border-zinc-700 p-2 rounded-md"/>
                    <Image src={assets.react} alt="tools_img" className="w-10 border border-zinc-700 p-2 rounded-md"/>
                    <Image src={assets.mongodbicon} alt="tools_img" className="w-10 border border-zinc-700 p-2 rounded-md"/>
                    <Image src={assets.nodejs} alt="tools_img" className="w-10 border border-zinc-700 p-2 rounded-md"/>
                    <Image src={assets.typescript} alt="tools_img" className="w-10 border border-zinc-700  rounded-md"/>
                    <Image src={assets.git} alt="tools_img" className="w-10 border border-zinc-700 p-2 rounded-md"/>
                    <Image src={assets.vscode} alt="tools_img" className="w-10 border border-zinc-700 p-2 rounded-md"/>

                </div>
                </div>
            </div>
        </div>
        </>
    )
}
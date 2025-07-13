'use client'

import { StaticImageData } from "next/image";
import Image from "next/image";


type ProjectType = {
  name: string;
  subtitle: string;
  icon: string | StaticImageData;
  onMouseClick:(name:string)=> void;
};
export default function ProjectItem({ name, subtitle, icon,onMouseClick }: ProjectType) {
  return (
    <>
      <div className="w-80 border border-gray-300 rounded-md hover:-translate-y-1 duration-500 hover:cursor-pointer " onClick={()=>onMouseClick(name)}>
        <Image src={icon} alt="project_icon"/>
        <div className="p-4">
            <h1 className="font-bold">{name}</h1>
            <p className="text-xs">{subtitle}</p>
        </div>
      </div>
    </>
  );
}

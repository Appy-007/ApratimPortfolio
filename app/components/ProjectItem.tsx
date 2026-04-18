"use client";

import { StaticImageData } from "next/image";
import Image from "next/image";

type ProjectType = {
  name: string;
  subtitle: string;
  icon: string | StaticImageData;
  onMouseClick: (name: string) => void;
};
export default function ProjectItem({
  name,
  subtitle,
  icon,
  onMouseClick,
}: ProjectType) {
  return (
    <>
      <div
        className="flex flex-col h-full border border-gray-300 dark:border-gray-700 rounded-lg hover:-translate-y-1 duration-500 hover:cursor-pointer overflow-hidden shadow-sm hover:shadow-md bg-white dark:bg-darkHover"
        onClick={() => onMouseClick(name)}
      >
        <Image
          src={icon}
          alt={`${name} icon`}
          className="w-full h-48 sm:h-60 object-contain bg-gray-50 dark:bg-gray-800/50 p-4"
        />
        <div className="p-5 flex-1 flex flex-col justify-center">
          <h1 className="font-bold text-lg">{name}</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            {subtitle}
          </p>
        </div>
      </div>
    </>
  );
}

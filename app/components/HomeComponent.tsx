"use client";
import { assets } from "@/assests/assets";
import Image from "next/image";
import { useContext } from "react";
import ThemeContext from "../context/themecontext";

export default function HomeComponent() {
  const themeContext = useContext(ThemeContext);

  const isLightMode: boolean = themeContext.theme === "light";
  return (
    <>
      <div id="home" className="pt-20 flex flex-col gap-4 items-center mb-20">
        <Image src={assets.profile_pic} alt="profile_img" className="w-40" />
        <p className="flex gap-2">
          Hi, I am Apratim Raha{" "}
          <span>
            {" "}
            <Image src={assets.hand_icon} alt="hand_icon" className="w-5" />
          </span>{" "}
        </p>
        <p className="text-4xl max-w-3xl text-center max-md:px-5">
          Full Stack Developer from Kolkata
        </p>
        <p className="max-md:px-5 text-center">
          I am currently working as MERN stack developer
        </p>
        <div className="flex flexx-col sm:flex-row items-center  gap-4">
          <a
            href="#contact"
            className="rounded-full px-1 md:px-4 py-1 md:py-2 bg-black dark:bg-darkTheme dark:hover:bg-darkHover text-white border border-white text-center flex items-center gap-2 text-xs nd:text-sm"
          >
            Connect with me{" "}
            <Image src={isLightMode ? assets.right_arrow :assets.right_arrow_bold_dark} alt="arrow_icon" className="w-3" />
          </a>
          <a
            href="./resume.pdf"
            download={true}
            className="rounded-full px-1 md:px-4 py-1 md:py-2 border border-black dark:border-white  text-center flex items-center gap-2  text-xs nd:text-sm cursor-pointer "
          >
            {" "}
            My resume{" "}
            <Image
              src={assets.download_icon }
              alt="download_icon"
              className="w-3 dark:text-white "
            />
          </a>
        </div>
      </div>
    </>
  );
}

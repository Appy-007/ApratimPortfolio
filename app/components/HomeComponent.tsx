import { assets } from "@/assests/assets";
import Image from "next/image";

export default function HomeComponent(){
    return (
        <>
        <div id="home" className="pt-20 flex flex-col gap-4 items-center">
           <Image src={assets.profile_img} alt='profile_img' className="w-40"/>
           <p className="flex gap-2">Hi, I am Apratim Raha <span> <Image src={assets.hand_icon} alt="hand_icon" className="w-5"/></span> </p>
           <p className="text-4xl max-w-3xl text-center ">Full Stack Developer from Kolkata</p>
           <p>I am currently working as MERN stack developer</p>
           <div className="flex flexx-col sm:flex-row items-center  gap-4">
            <a href="#contact" className="rounded-full px-4 py-2 bg-black text-white border border-white text-center flex items-center gap-2">Connect with me <Image src={assets.right_arrow} alt="arrow_icon" className="w-3"/></a>
            <a className="rounded-full px-4 py-2 border border-black  text-center flex items-center gap-2">My resume <Image src={assets.download_icon} alt="download_icon" className="w-3"/></a>
           </div>
        </div>
        </>
    )
}
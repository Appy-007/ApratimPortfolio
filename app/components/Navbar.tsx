'use client'
import Image from "next/image";
import { assets } from "../../assests/assets";
import { useContext, useRef } from "react";
import ThemeContext from "../context/themecontext";
export default function Navbar() {
    const themeContext=useContext(ThemeContext)
    console.log(themeContext.theme)
    const sidebarRef=useRef<HTMLUListElement|null>(null)

    const isLightMode : boolean= themeContext.theme === 'light'

    const openMobileNav=()=>{
        if(sidebarRef?.current != null){
             sidebarRef.current.style.transform='translateX(-16rem)'
        }
    }

    const handleThemeToggle=()=>{
      themeContext.toggleTheme()
    }

    const closeMobileNav=()=>{
        if(sidebarRef?.current != null){
            sidebarRef.current.style.transform='translateX(16rem)'
        }
    }
  return (
    <>
    <div className="">
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
      {themeContext.theme ==='light' && <Image
          src={assets.header_bg_color}
          alt="header_bg_color"
          className="w-full"
        />}
       
      </div>
      <nav className="w-full fixed px-5 lg:px-8 py-2 z-50 flex items-center justify-between ">
        <a href="">
          <Image
            src={assets.apratim_portfolio_logo}
            className="w-8 md:w-12 mr-14 ml-4 cursor-pointer"
            alt="Logo"
          />
        </a>

        <ul className="hidden md:flex items-center gap-8 p-4 px-8 rounded-full bg-white dark:bg-darkTheme shadow-sm bg-opacity-50 ">
          <li>
            <a href="#home" className="font-Ovo">
              Home
            </a>
          </li>
          <li>
            <a href="#aboutMe" className="font-Ovo">
              About Me
            </a>
          </li>
          <li>
            <a href="#skills" className="font-Ovo">
              My Skills
            </a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>

        <div className="flex gap-5 items-center">
          <button onClick={handleThemeToggle}>
            <Image
              src={isLightMode ? assets.moon_icon : assets.sun_icon}
              alt="toggle_light_theme"
              className="w-5 cursor-pointer"
            />
          </button>
          <a
            href="#contact"
            className="hidden lg:flex items-center  font-Ovo border border-gray-400 rounded-full px-5 py-2 gap-3"
          >
            Connect{" "}
            <Image
              src={isLightMode? assets.arrow_icon : assets.arrow_icon_dark}
              alt="contact logo"
              className="w-2 h-2"
            />
          </a>

          <button className="block md:hidden">
            <Image
              src={isLightMode ? assets.menu_black : assets.menu_white}
              alt="mobile_menu"
              className="w-5 cursor-pointer"
              onClick={openMobileNav}
            />
          </button>
        </div>
      </nav>

    </div>




     {/* Mobile Navbar */}

      <div >
          <ul ref={sidebarRef} className="flex md:hidden flex-col gap-4 h-screen bg-rose-50 dark:bg-darkTheme px-10 py-20 fixed -right-64 w-65 z-50 top-0 bottom-0  transition duration-300">
            <button className="absolute top-3 right-3" onClick={closeMobileNav}>
                <Image src={isLightMode?assets.close_black : assets.close_white} alt="mobile_screen_nav_close" className="w-3"/>
            </button>
            <li onClick={closeMobileNav}>
              <a href="#home" className="font-Ovo">
                Home
              </a>
            </li>
            <li onClick={closeMobileNav}>
              <a href="#aboutMe" className="font-Ovo">
                About Me
              </a>
            </li>
            <li onClick={closeMobileNav}>
              <a href="#skills" className="font-Ovo">
                My Skills
              </a>
            </li>
            <li onClick={closeMobileNav}>
              <a href="#projects">Projects</a>
            </li>
          </ul>
        </div>
    </>
  );
}

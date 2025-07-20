'use client'

import {useState, createContext, useEffect } from "react"

export const ThemeContext=createContext({
    theme:'',
    toggleTheme:()=>{},
})

export function ThemeContextProvider({children}){
    const [theme,setTheme]=useState('light')
    const toggleTheme=()=>{
        setTheme((prev)=>{
            const newTheme=prev==='dark' ? 'light' :'dark'
            localStorage.setItem('theme',newTheme)
            document.documentElement.classList.toggle('dark',newTheme==='dark')
            console.log("HTML",document.documentElement.className);
            return newTheme
        })
    }

    useEffect(()=>{
        console.log("Use effect")
        const storedTheme=localStorage.getItem('theme')
        console.log("g",storedTheme)
        if(storedTheme){
            setTheme(storedTheme)
            document.documentElement.classList.toggle('dark',storedTheme==='dark')
        }

    },[])

    const themeContext={
        theme:theme,
        toggleTheme:toggleTheme
    }
    return (
        <ThemeContext.Provider value={themeContext}>
            {children}
        </ThemeContext.Provider>
    )

}

export default ThemeContext
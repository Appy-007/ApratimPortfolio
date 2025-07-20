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
            return newTheme
        })
    }

    useEffect(()=>{
        const storedTheme=localStorage.getItem('theme')
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
import React, { useEffect, useState } from 'react'

// custom hook useDarkmode

export const useDarkMode = () => {

    //save local storage
    const setMode =(mode)=>{      
        setTheme(mode)
        window.localStorage.setItem('theme',mode)
    }

    const [theme, setTheme] = useState('dark');
    const toggleTheme =()=>{
       // if don't want save with localStorage will use code is -> theme === 'dark' ? setTheme('light') : setTheme('dark');
        theme === 'dark' ? setMode('light') : setMode('dark');
    }
 //save local storage --
    useEffect(()=>{
        const localTheme = window.localStorage.getItem('theme');
        localTheme ? setTheme(localTheme) : setMode('dark')
    },[])
    
    return [theme, toggleTheme]   
}

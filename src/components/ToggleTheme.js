"use client";

import { useEffect, useState } from "react";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";

function ToggleTheme() {

    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        const theme = localStorage.getItem("theme")
        if (theme === "dark") setDarkMode(true)
    }, [])

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
        }
        else {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")
        }
    }, [darkMode])

    return (
        <div className="relative w-[54px] h-3 flex items-center bg-[#555555] dark:bg-[#dedede] cursor-pointer rounded-full p-1" onClick={() => setDarkMode(!darkMode)}>
            <div className="absolute border-white border-2 dark:bg-medium bg-yellow-600 w-8 h-8 flex items-center justify-center rounded-full shadow-md transform transition-transform duration-300"
                style={!darkMode ? { left: "0px" } : { right: "0px" }}>
                    {
                        !darkMode && <FaSun className="text-white"/>
                    }
                    {
                        darkMode && <FaMoon className="text-white" />
                    }
                </div>
        </div>
    )
}

export default ToggleTheme
import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { CgMenuRightAlt } from "react-icons/cg";
import logodark from "../images/logo-dark.png"
import logolight from "../images/logo-light.png"
import ToggleTheme from './ToggleTheme';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [navOpen, setNavOpen] = useState(false);

    return (
        <>
            <div className={`z-50 fixed w-full px-10 flex flex-col justify-center bg-white dark:bg-[#252525]`}>
                <div className='flex  w-full h-20 items-center justify-between'>
                    {/* logo */}
                    <div>
                        <img src={logodark} className='dark:block hidden w-24' alt='' />
                        <img src={logolight} className='dark:hidden block w-24' alt='' />
                    </div>

                    <div className={`lg:flex gap-7 dark:text-white hidden`}>
                        <div className=' cursor-pointer font-semibold'>
                            <Link to="/">Home</Link>
                        </div>
                        <div className=' cursor-pointer font-semibold'>
                            <Link to="/courses">Courses</Link>
                        </div>
                        <div className=' cursor-pointer font-semibold'>
                            <Link to="/tutor">Become Tutor</Link>
                        </div>
                        <div className=' cursor-pointer font-semibold'>
                            <Link to="/about">About</Link>
                        </div>
                        <div className=' cursor-pointer font-semibold'>
                            <Link to="/contact">Contact Us</Link>
                        </div>
                    </div>

                    <div className='flex items-center gap-5'>
                        {
                            !navOpen && <CgMenuRightAlt onClick={() => setNavOpen(!navOpen)} className='lg:hidden dark:text-white text-black' size={26} />
                        }
                        {
                            navOpen && <RxCross2 onClick={() => setNavOpen(!navOpen)} className='lg:hidden dark:text-white text-black' size={26} />
                        }
                        <div className='hidden lg:block'>
                            <ToggleTheme />
                        </div>
                    </div>
                </div>
                <hr className='dark:hidden block w-full' />
                {
                    navOpen && <div className='flex flex-col items-end dark:text-white shadow-lg pb-2'>
                        <div className=' cursor-pointer font-semibold py-2 pr-6'>
                            <Link onClick={() => setNavOpen(false)} to="/">Home</Link>
                        </div>
                        <hr className='w-full' />
                        <div className=' cursor-pointer font-semibold py-2 pr-6'>
                            <Link onClick={() => setNavOpen(false)} to="/courses">Courses</Link>
                        </div>
                        <hr className='w-full' />
                        <div className=' cursor-pointer font-semibold py-2 pr-6'>
                            <Link onClick={() => setNavOpen(false)} to="/tutor">Become Tutor</Link>
                        </div>
                        <hr className='w-full' />
                        <div className=' cursor-pointer font-semibold py-2 pr-6'>
                            <Link onClick={() => setNavOpen(false)} to="/about">About</Link>
                        </div>
                        <hr className='w-full' />
                        <div className=' cursor-pointer font-semibold py-2 pr-6'>
                            <Link onClick={() => setNavOpen(false)} to="/contact">Contact Us</Link>
                        </div>
                        <hr className='w-full' />
                        <div className='py-5 pr-6'>
                            <ToggleTheme />
                        </div>
                    </div>
                }
            </div >
        </>
    );
};

export default Navbar;

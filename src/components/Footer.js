import React from 'react'
import logoDark from "../images/logo-dark.png"
import logoLight from "../images/logo-light.png"
import googlePlay from "../images/svg/google-play.svg"
import appStore from "../images/svg/app-store.svg"

function Footer() {
    return (
        <div className='bg-[#F2F2F2] dark:bg-[#353535] px-10 pt-10'>
            <div className='flex flex-col md:flex-row justify-between gap-8 pb-6'>
                <div className='flex flex-col gap-4 w-full md:w-[50%]'>
                    <div>
                        <img src={logoDark} className='dark:block hidden w-24' alt='' />
                        <img src={logoLight} className='dark:hidden block w-24' alt='' />
                    </div>
                    <p className=' text-sm text-black/60 dark:text-white/60 font-semibold lg:w-[550px]'>TechVise education, built specifically for the education centers which is dedicated to teaching and involve learners.</p>
                </div>

                <div className=' flex gap-6 mb-5'>
                    <img src={googlePlay} className='w-40' alt='' />
                    <img src={appStore} className='w-40' alt='' />
                </div>

            </div>
            <hr className=' w-full py-3' />
            <div className=' w-full text-center flex flex-col md:flex-row gap-3 pb-8 text-black/60 dark:text-white/60'>
                <h3 className='w-full md:w-[50%] lg:w-[70%] lg:text-left'>Copyrights @ 2023 TechVise. All rights reserved.</h3>
                <div className='flex justify-between w-full md:w-[50%] lg:w-[30%] lg:text-right'>
                    <div>Language</div>
                    <h4>Terms of use</h4>
                    <div>Privacy Policy</div>
                </div>
            </div>
        </div>
    )
}

export default Footer
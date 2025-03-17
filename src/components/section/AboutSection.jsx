import React from 'react'
import aboutImg from "../../images/01.jpg"
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn, FaStar } from "react-icons/fa"
import { BiSolidBadgeCheck } from "react-icons/bi"
import member1 from "../../images/members/sahil.png"
import avtar1 from "../../images/avatar/01.jpg"
import microsoft from "../../images/svg/microsoft.svg"
import linkedin from "../../images/svg/linkedin.svg"
import netflix from "../../images/svg/netflix.svg"
import coca_cola from "../../images/svg/coca-cola.svg"
import android from "../../images/svg/android.svg"
import envato from "../../images/svg/envato.svg"
import importio from "../../images/svg/importio.svg"
import shippable from "../../images/svg/shippable.svg"
import yamaha from "../../images/svg/yamaha.svg"
import algolia from "../../images/svg/algolia.svg"
import Footer from '../Footer';

function AboutSection() {
  return (
    <div className='dark:bg-[#252525] w-full dark:text-white overflow-x-hidden'>
      <div className='w-full px-16 lg:px-56 py-12 lg:py-16 text-[26px] lg:text-[35px] text-center font-bold'>TechVise education, built specifically for the education centers which is dedicated to teaching and involve learners.</div>

      <div className='flex gap-6 pb-10 flex-col lg:flex-row lg:items-center px-8 lg:px-28'>

        <img src={aboutImg} className='w-full lg:w-[40%] rounded-lg' alt='' />

        <div className=' text-black/60 dark:text-white/60'>

          <h2 className=' font-bold text-2xl text-black dark:text-white'>35,000+ happy students joined with us to achieve their goals</h2>
          <br />

          <h4>How promotion excellent curiosity yet attempted happiness Gay prosperous impression had conviction For every delay death ask to style Me mean able my by in they Extremity now strangers contained breakfast him discourse additions Sincerity collected contented led now perpetual extremely forfeited</h4>
          <br />

          <h4>Happiness prosperous impression had conviction For every delay in they Extremity now strangers contained breakfast him discourse additions Sincerity collected contented led now perpetual extremely forfeited</h4>
          <br />

          <div className='flex flex-col gap-4 pb-10 justify-start'>
            <div className='flex gap-2 items-center'>
              <BiSolidBadgeCheck size={22} className=' text-green-600' />
              <h4>Setup and installation takes less time</h4>
            </div>
            <div className='flex gap-2 items-center'>
              <BiSolidBadgeCheck size={22} className=' text-green-600' />
              <h4>Professional and easy to use software</h4>
            </div>
            <div className='flex gap-2 items-center'>
              <BiSolidBadgeCheck size={22} className=' text-green-600' />
              <h4>Perfect for any device with pixel-perfect design</h4>
            </div>
            <div className='flex gap-2 items-center'>
              <BiSolidBadgeCheck size={22} className=' text-green-600' />
              <h4>Setup and installation too fast</h4>
            </div>
          </div>

          <div className=' grid gap-6 md:gap-20 grid-cols-1 md:grid-cols-2 text-black dark:text-white w-full'>
            <div className='relative flex flex-col w-full gap-3'>
              <h4 className=' text-[16px] font-[700]'>Enterprise customer</h4>
              <h4 className='absolute right-0 text-xs font-semibold top-2'>85%</h4>
              <div className='w-full h-2 bg-black/50 dark:bg-white/60 rounded-lg'>
                <div className='bg-orange-600 skill-per h-2 rounded-lg w-[85%] top-0'></div>
              </div>
            </div>
            <div className='relative flex flex-col w-full gap-3'>
              <h4 className=' text-[16px] font-[700]'>Acurate Course</h4>
              <h4 className='absolute right-0 text-xs font-semibold top-2'>95%</h4>
              <div className='w-full h-2 bg-black/50 dark:bg-white/60 rounded-lg'>
                <div className='bg-orange-600 skill-per h-2 rounded-lg w-[95%] top-0'></div>
              </div>
            </div>
          </div>
          <br />
          <div className=' grid gap-6 md:gap-20 grid-cols-1 md:grid-cols-2 text-black dark:text-white w-full'>
            <div className='relative flex flex-col w-full gap-3'>
              <h4 className=' text-[16px] font-[700]'>Languages</h4>
              <h4 className='absolute right-0 text-xs font-semibold top-2'>75%</h4>
              <div className='w-full h-2 bg-black/50 dark:bg-white/60 rounded-lg'>
                <div className='bg-orange-600 skill-per h-2 rounded-lg w-[75%] top-0'></div>
              </div>
            </div>
            <div className='relative flex flex-col w-full gap-3'>
              <h4 className=' text-[16px] font-[700]'>Instructors</h4>
              <h4 className='absolute right-0 text-xs font-semibold top-2'>90%</h4>
              <div className='w-full h-2 bg-black/50 dark:bg-white/60 rounded-lg'>
                <div className='bg-orange-600 skill-per h-2 rounded-lg w-[90%] top-0'></div>
              </div>
            </div>
          </div>

        </div>
      </div>


      <div className='flex flex-wrap gap-10 md:gap-20 px-4 md:px-10 lg:gap-16 py-10 lg:py-20 justify-center bg-[#F2F2F2] dark:bg-[#232323]'>

        <img src={microsoft} className='w-40 grayscale hover:grayscale-0 transition-all delay-150 ease-in-out' alt='' />
        <img src={linkedin} className='w-40 grayscale hover:grayscale-0 transition-all delay-150 ease-in-out' alt='' />
        <img src={netflix} className='w-40 grayscale hover:grayscale-0 transition-all delay-150 ease-in-out' alt='' />
        <img src={coca_cola} className='w-40 grayscale hover:grayscale-0 transition-all delay-150 ease-in-out' alt='' />
        <img src={android} className='w-40 grayscale hover:grayscale-0 transition-all delay-150 ease-in-out' alt='' />
        <img src={envato} className='w-40 grayscale hover:grayscale-0 transition-all delay-150 ease-in-out' alt='' />
        <img src={yamaha} className='w-40 grayscale hover:grayscale-0 transition-all delay-150 ease-in-out' alt='' />
        <img src={importio} className='w-40 grayscale hover:grayscale-0 transition-all delay-150 ease-in-out' alt='' />
        <img src={coca_cola} className='w-40 grayscale hover:grayscale-0 transition-all delay-150 ease-in-out' alt='' />
        <img src={shippable} className='w-40 grayscale hover:grayscale-0 transition-all delay-150 ease-in-out' alt='' />
        <img src={algolia} className='w-40 grayscale hover:grayscale-0 transition-all delay-150 ease-in-out' alt='' />

      </div>

      <div className='w-full py-10 px-10'>

        <h3 className=' font-bold text-3xl'>Meet Our Team</h3>

        <div className='flex gap-12 md:gap-56 pt-10 px-6 items-center justify-center lg:justify-start'>

          <div className='flex flex-col items-center'>
            <img src={member1} className=' w-20 md:w-28 object-fill rounded-full h-20 md:h-28' alt='' />
            <div className='text-center pt-4'>
              <h3 className=' font-bold'>Sahil Barak</h3>
              <h5 className=' text-sm font-semibold text-black/60 dark:text-white/60'>Frontend Developer</h5>
              <div className='flex gap-8 justify-center py-3'>
                <FaLinkedinIn className='cursor-pointer' size={22} />
                <FaGithub className='cursor-pointer' size={22} />
              </div>
              <div className='flex gap-1 mt-1 text-yellow-500 justify-center items-center'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </div>

          <div className='flex flex-col items-center'>
            <img src={avtar1} className=' w-20 md:w-28 h-20 md:h-28 rounded-full' alt='' />
            <div className='text-center pt-4'>
              <h3 className=' font-bold'>Arju Sigh</h3>
              <h5 className=' text-sm font-semibold text-black/60 dark:text-white/60'>Backend Developer</h5>
              <div className='flex gap-8 justify-center py-3'>
                <FaLinkedinIn className='cursor-pointer' size={22} />
                <FaGithub className='cursor-pointer' size={22} />
              </div>
              <div className='flex gap-1 mt-1 text-yellow-500 justify-center items-center'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />

    </div>
  )
}

export default AboutSection
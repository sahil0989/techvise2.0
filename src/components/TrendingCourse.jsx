import React from 'react'
import img1 from '../images/courses/14.jpg'
import { FaRegBookmark } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { FaTable } from "react-icons/fa";
import avatar1 from '../images/avatar/01.jpg'
import { FaCartShopping } from "react-icons/fa6";

export default function TrendingCourse() {
    return (
        <div className='group w-full border border-white/40 flex flex-col shadow-md rounded-md'>

            <img src={img1} alt='' />

            <div className=' bg-white dark:bg-[#252525] px-6 py-3'>

                <div className='flex justify-between items-center'>
                    <div className='flex gap-3'>
                        <h2 className=' cursor-pointer text-xs bg-blue-500/20 px-3 rounded-md py-1 text-blue-700'>Design</h2>
                        <h2 className=' cursor-pointer text-xs bg-[#252525] rounded-md text-white px-3 py-1'>Beginner</h2>
                    </div>
                    <FaRegBookmark />
                </div>

                <div className='flex flex-col gap-3 pt-3 text-left'>
                    <h2 className=' font-bold text-xl'>Time Management Mastrey : Do More, Stress Less</h2>
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-1 text-yellow-500'>
                            <h3>4.0</h3>
                            <FaStar />
                            <h6 className='text-black/60 dark:text-white/60 text-sm'>(2000)</h6>
                        </div>
                        <div className='flex items-center gap-1'>
                            <h3>1600</h3>
                            <h3 className='text-black/60 dark:text-white/60 text-sm'>(Students)</h3>
                        </div>
                    </div>
                </div>

                <div className='flex items-center gap-6 pb-4 pt-2'>
                    <div className='flex gap-3 items-center'>
                        <FaRegClock className=' text-red-500' size={18} />
                        <p className=' text-xs'>24 hours</p>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <FaTable className=' text-orange-600' size={18} />
                        <p className=' text-xs'>68 lectures</p>
                    </div>
                </div>

                <hr />

                <div className='flex items-center justify-between pt-3'>
                    <div className='flex items-center gap-2'>
                        <img src={avatar1} className=' w-10 h-10 rounded-lg' alt='' />
                        <h3 className='text-sm font-semibold'>Nikita Kaushik</h3>
                    </div>
                    <div className=' group-hover:hidden text-green-500 font-bold text-2xl'>Rs 4,999</div>
                    <div className=' hidden group-hover:flex gap-3 bg-green-500/20 rounded-md cursor-pointer hover:bg-green-600 hover:text-white text-green-600 px-3 py-1 items-center'>
                        <FaCartShopping size={12} />
                        <h3 className='text-[12px]'>Add to Cart</h3>
                    </div>
                </div>

            </div>
        </div>
    )
}
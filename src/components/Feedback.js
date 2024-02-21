import React from 'react'
import avtar1 from "../images/avatar/01.jpg"
import avtar2 from "../images/avatar/02.jpg"
import avtar3 from "../images/avatar/03.jpg"
import avtar4 from "../images/avatar/04.jpg"
import { FaStar } from "react-icons/fa";
import { IoShieldCheckmark } from "react-icons/io5";

function Feedback() {
    return (
        <div className=' w-full flex flex-col-reverse md:flex-col-reverse lg:flex-row items-center pt-14 bg-[#F2F2F2] dark:bg-[#232323]'>

            <div className='relative w-full lg:w-[70%] z-30 pl-10 pb-10 flex flex-col md:flex-row gap-8 items-center justify-center'>


                <div className='absolute z-10 -top-12 -left-8 lg:-top-3 lg:-left-4 w-48 h-48 rounded-full bg-red-300/40'></div>

                <div className='flex flex-col gap-10 items-end z-30'>

                    <div className='w-[350px] h-[270px] gap-2 flex-col bg-white dark:bg-[#151515] rounded-lg flex items-center justify-center shadow-lg'>
                        <img src={avtar1} className=' w-20 h-20 rounded-full' alt='avatar' />
                        <blockquote className='text-sm px-6 text-center text-black/60 dark:text-white/60 font-semibold'>
                            <p>" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam commodi accusamus neque eaque! Arcto, libero repellat! Obcaeci "</p>
                        </blockquote>
                        <div className='flex gap-1 mt-1 text-yellow-400 items-center'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                        <h3 className='font-bold text-sm'>Ravika</h3>
                    </div>

                    <div className='hidden w-44 h-24 bg-blue-600/80 rounded-xl md:flex flex-col items-center justify-center backgroundRating'>
                        <h3 className=' font-bold text-xl text-white'>4.5/5.0</h3>
                        <div className='flex gap-1 mt-1 text-yellow-400 items-center'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                        <h5 className=' text-white'>Based on Rating</h5>
                    </div>
                </div>


                <div className='flex flex-col gap-8'>

                    <div className='relative w-[220px] h-[250px] bg-white dark:bg-[#151515] rounded-lg hidden md:flex flex-col justify-center px-4 gap-3'>
                        <h2 className=' font-bold text-10'>100+ Verified Mentors</h2>
                        <div className=' w-full flex flex-col gap-3'>
                            <div className='flex gap-4'>
                                <img src={avtar1} className='w-12 h-12 object-cover rounded-md' alt='' />
                                <div>
                                    <h2 className='font-bold'>Seema Jain</h2>
                                    <h6 className=' text-sm text-black/60 dark:text-white/60'>Tutor of Chem</h6>
                                </div>
                            </div>
                            <div className='flex gap-4'>
                                <img src={avtar2} className='w-12 h-12 object-cover rounded-md' alt='' />
                                <div>
                                    <h2 className='font-bold'>Seema Jain</h2>
                                    <h6 className=' text-sm text-black/60 dark:text-white/60'>Tutor of Chem</h6>
                                </div>
                            </div>
                            <div className='flex gap-4'>
                                <img src={avtar3} className='w-12 h-12 object-cover rounded-md' alt='' />
                                <div>
                                    <h2 className='font-bold'>Seema Jain</h2>
                                    <h6 className=' text-sm text-black/60 dark:text-white/60'>Tutor of Chem</h6>
                                </div>
                            </div>
                        </div>

                        <div className='absolute top-0 right-0 -mx-6 -my-6 text-black bg-yellow-400 rounded-full px-4 py-4'>
                            <IoShieldCheckmark size={22} />
                        </div>
                    </div>

                    <div className='md:w-[270px] w-[350px] h-[260px] bg-white dark:bg-[#151515] gap-2 flex-col rounded-lg flex items-center justify-center shadow-lg'>

                        <img src={avtar4} className=' w-16 h-16 rounded-full' alt='avatar' />
                        <blockquote className='text-sm px-6 text-center text-black/60 dark:text-white/60 font-semibold'>
                            <p>" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam commodi accusamus neque eaque! "</p>
                        </blockquote>
                        <div className='flex gap-1 mt-1 text-yellow-400 items-center'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                        <h3 className='font-bold text-sm'>Ravika</h3>

                    </div>
                </div>


            </div>
            <div className='lg:w-[50%] text-center px-10 lg:text-left'>
                <h2 className='text-[28px] lg:text-[40px] dark:text-white font-bold'>Some valuable feedback from our students</h2>
                <h5 className=' text-[#656565] dark:text-white/60 text-sm lg:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam commodi accusamus neque eaque! Architecto, libero repellat! Obcaecati, quod asperiores tempore possimus sed a ccusantium minima cumque deleniti architecto nobis nulla corrupti veniam ex. Id, praesenti um illum voluptas vel cumque suscipit, optio ad dolorem vero recusandae dolores quae provi dent expedita aliquam officiis.</h5>
                <button className='text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-800 transition-all ease-out font-semibold my-3 mb-10'>View Reviews</button>
            </div>
        </div>

    )
}

export default Feedback
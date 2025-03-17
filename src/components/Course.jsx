import React, { useState } from 'react'
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { FaTable } from "react-icons/fa";

function Course({ item }) {

    const [likeFunc, setLikeFunc] = useState(false);

    return (
        <div className='w-full flex flex-col items-start pb-6'>

            <img src={item.imageData} className=' rounded-t-lg' alt='' />

            <div className=' dark:bg-[#151515] bg-white w-full h-auto rounded-b-lg shadow-lg px-6'>

                <div className='flex items-center justify-between mt-2'>
                    <div></div>
                    {/* <div className={`text-sm text-green-500 bg-green-300/40 px-2 rounded-md`}>Beginner</div> */}
                    {item.skillLevel}
                    {
                        !likeFunc && <FaRegHeart onClick={() => setLikeFunc(!likeFunc)} className=' cursor-pointer' size={18} />
                    }
                    {
                        likeFunc && <FaHeart onClick={() => setLikeFunc(!likeFunc)} className=' cursor-pointer text-red-600' size={18} />
                    }
                </div>

                <div className='flex mt-2 flex-col items-start text-left pb-6 h-36'>
                    <h3 className='text-xl font-semibold line-clamp-2 hover:text-blue-500 cursor-pointer'>{item.heading}</h3>
                    <h6 className=' line-clamp-2 dark:text-white/50 text-black/60'>{item.subHeading}</h6>
                    {item.starBlock}
                </div>
                <hr className=' w-full pb-2 px-6' />

                <div className='flex items-center justify-between pb-4 pt-2'>
                    <div className='flex gap-3 items-center'>
                        <FaRegClock className=' text-red-500' size={18} />
                        <p className=' text-xs font-semibold'>{item.time}</p>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <FaTable className=' text-orange-600' size={18} />
                        <p className=' text-xs font-semibold'>{item.lectureData}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Course
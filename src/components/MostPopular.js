import React, { useEffect, useState } from 'react'
import { webData, developmentData, graphicData, marketingData, financeData } from './constants';
import Course from './Course';
import { Link } from 'react-router-dom';

function MostPopular() {

    const [selectedCategory, setSelectedCategory] = useState('web');
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        // Fetch courses based on the selected category
        const fetchCourses = () => {
            switch (selectedCategory) {
                case 'web':
                    setCourses(webData);
                    break;
                case 'development':
                    setCourses(developmentData);
                    break;
                case 'graphic':
                    setCourses(graphicData);
                    break;
                case 'marketing':
                    setCourses(marketingData);
                    break;
                case 'finance':
                    setCourses(financeData);
                    break;
                default:
                    setCourses([]);
                    break;
            }
        };

        fetchCourses();
    }, [selectedCategory]);

    return (
        <div className='w-full px-10 text-center'>
            <h2 className='text-[50px] dark:text-white font-bold'>Most Popular Courses</h2>
            <h5 className=' font-semibold text-[#656565] dark:text-white/60'>Choose from hundred of courses from specialist organisations.</h5>

            <div className=' bg-blue-400/50 dark:bg-blue-300/80 h-auto px-4 py-4 rounded-lg my-5 flex items-center justify-center lg:gap-10 gap-2 flex-wrap text-blue-600'>
                <div onClick={() => setSelectedCategory('web')} className={`font-semibold px-4 py-2 rounded-lg cursor-pointer ${selectedCategory === 'web' ? 'bg-blue-500 text-white' : ""}`}>Web Design</div>
                <div onClick={() => setSelectedCategory('development')} className={`font-semibold px-4 py-2 rounded-lg cursor-pointer ${selectedCategory === 'development' ? 'bg-blue-500 text-white' : ""}`}>Development</div>
                <div onClick={() => setSelectedCategory('graphic')} className={`font-semibold px-4 py-2 rounded-lg cursor-pointer ${selectedCategory === 'graphic' ? 'bg-blue-500 text-white' : ""}`}>Graphic Design</div>
                <div onClick={() => setSelectedCategory('marketing')} className={`font-semibold px-4 py-2 rounded-lg cursor-pointer ${selectedCategory === 'marketing' ? 'bg-blue-500 text-white' : ""}`}>Marketing</div>
                <div onClick={() => setSelectedCategory('finance')} className={`font-semibold px-4 py-2 rounded-lg cursor-pointer ${selectedCategory === 'finance' ? 'bg-blue-500 text-white' : ""}`}>Finance</div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-16'>
                {courses.length > 0 &&
                    courses.map((item, index) => (
                        <Link to='/course' key={index}>
                            <div key={index}><Course item={item} /></div>
                        </Link>
                    ))
                }
            </div>

            <div className='relative overflow-hidden flex flex-col lg:flex-row lg:items-center items-start lg:justify-between px-8 gap-3 text-white md:px-24 lg:px-36 w-full h-auto py-8 bg-[#37B5B6] rounded-lg mb-10'>
                <figure className="fill-white absolute opacity-10 top-[10%] left-16">
                    <svg width="141px" height="141px">
                        <path
                            d="M140.520,70.258 C140.520,109.064 109.062,140.519 70.258,140.519 C31.454,140.519 -0.004,109.064 -0.004,70.258 C-0.004,31.455 31.454,-0.003 70.258,-0.003 C109.062,-0.003 140.520,31.455 140.520,70.258 Z"
                        />
                    </svg>
                </figure>
                <figure className="fill-white absolute opacity-10 -top-6 left-1/3 scale-[15%]">
                    <svg width="141px" height="141px">
                        <path
                            d="M140.520,70.258 C140.520,109.064 109.062,140.519 70.258,140.519 C31.454,140.519 -0.004,109.064 -0.004,70.258 C-0.004,31.455 31.454,-0.003 70.258,-0.003 C109.062,-0.003 140.520,31.455 140.520,70.258 Z"
                        />
                    </svg>
                </figure>
                <figure className="fill-white absolute opacity-10 top-16 left-1/2 scale-[20%]">
                    <svg width="141px" height="141px">
                        <path
                            d="M140.520,70.258 C140.520,109.064 109.062,140.519 70.258,140.519 C31.454,140.519 -0.004,109.064 -0.004,70.258 C-0.004,31.455 31.454,-0.003 70.258,-0.003 C109.062,-0.003 140.520,31.455 140.520,70.258 Z"
                        />
                    </svg>
                </figure>
                <div className=' text-left lg:w-[70%] w-[100%]'>
                    <h2 className='text-3xl font-bold'>Become Instructor!</h2>
                    <h4 className=' text-white/75'>Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced. Yet uncommonly his ten who diminution astonished.</h4>
                </div>
                <Link to="/tutor">
                    <div className='text-yellow-400 border-yellow-500 border-2 rounded-lg px-4 py-3 font-semibold cursor-pointer hover:bg-yellow-500 hover:text-black transition-color delay-150 ease-in-out'>Start Teaching Today</div>
                </Link>
            </div>

        </div>
    )
}

export default MostPopular
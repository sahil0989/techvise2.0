import React, { useEffect, useState } from 'react';
import { FaAngleDown } from "react-icons/fa6";
import { categoryData, prizeData, skillLevelData } from '../constants';
import { FaSearch } from "react-icons/fa";
import { allCoursesData } from '../constants';
import Course from "../Course"
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import axios from 'axios';

function CoursesSection() {
  const [CategoriesOpen, setCategoriesOpen] = useState(false);
  const [skillOpen, setSkillOpen] = useState(false);
  const [prizeOpen, setPrizeOpen] = useState(false);
  const [coursesData, setCoursesData] = useState([]);
  const [search, setSearch] = useState("");

  const [Categories, setCategories] = useState("");
  const [skillSelection, setSkillSelection] = useState("");
  const [prizeLevel, setPrizeLevel] = useState('');

  const handleCategoriesClick = (Categories) => {
    setCategories(Categories);
    setCategoriesOpen(false);
  };

  const handleSkillClick = (skill) => {
    setSkillSelection(skill);
    setSkillOpen(false);
  };

  const handlePrizeClick = (skill) => {
    setPrizeLevel(skill);
    setPrizeOpen(false);
  };

  useEffect(() => {
    setCoursesData(allCoursesData);
  }, []);

  const [email, setEmail] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceId = 'service_u8ef3le';
    const templateId = 'template_u6tuznh';
    const publicKey = 'zhdiwsTaMbOiaW3KB';

    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: email,
        from_email: email,
        to_name: 'TechVise',
        message: "Subscribe for Message",
      }
    };

    try {
      const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
      console.log(res.data);
      setEmail('');
      alert("Thanks for contacting Us");
    } catch (error) {
      console.error(error);
      alert("Something Wrong : Internal Server Error")
    }
  }

  return (
    <div className='dark:bg-[#252525]'>
      <div className='dark:bg-[#252525] w-full dark:text-white overflow-x-hidden px-10'>
        <div className='w-full my-8 pb-6 flex flex-col items-center justify-center bg-[#f4f4f4] rounded-lg dark:bg-[#353535]'>
          <h1 className='text-4xl lg:text-5xl py-4 font-bold'>Our Courses</h1>
          <h5 className='font-semibold text-black/60 -mt-2 dark:text-white/60'>Home <span className='text-4xl'>.</span> Courses</h5>
        </div>

        <div className='w-full my-8 bg-[#f4f4f4] rounded-lg dark:bg-[#353535] px-3 grid grid-cols-1 gap-4 md:grid-cols-2 lg:flex lg:items-center lg:justify-center lg:gap-16 place-items-center pb-4 lg:pb-0'>

          <input type='text' onChange={(e) => setSearch(e.target.value)} value={search} className=' border-2 bg-white focus:outline-white/70 dark:border-black/40 dark:focus:outline-white/10 dark:bg-[#757575] font-semibold dark:placeholder:text-white/60 py-2 px-4 rounded-lg my-4 text-sm w-[300px]' placeholder='Enter keyword' />

          {/* Categories  */}

          <div>
            <button onClick={() => { setCategoriesOpen(!CategoriesOpen); setPrizeOpen(false); setSkillOpen(false) }} className={`dark:bg-[#757575] flex items-center justify-between px-4 bg-white py-2 w-[300px] lg:w-48 font-semibold gap-6 rounded-lg ${Categories === "" ? 'text-black/60 dark:text-white/60' : "text-black dark:text-white"}`}>
              {Categories === '' ? 'Categories' : Categories}
              <FaAngleDown />
            </button>
            {CategoriesOpen && (
              <div className='dark:bg-[#757575] absolute bg-[#f9f9f9] flex flex-col rounded-lg mt-2 max-h-56 overflow-scroll overflow-x-hidden pb-3'>
                {categoryData.map((item) => (
                  <div key={item} onClick={() => handleCategoriesClick(item)} className='font-semibold my-1 py-1 px-3 w-36 cursor-pointer mx-3 rounded-lg hover:bg-white dark:hover:bg-[#555555]'>{item}</div>
                ))}
              </div>
            )}
          </div>

          {/* prize level  */}

          <div>
            <button onClick={() => { setPrizeOpen(!prizeOpen); setCategoriesOpen(false); setSkillOpen(false) }} className={`dark:bg-[#757575] flex items-center justify-between px-4 bg-white py-2 w-[300px] lg:w-48 font-semibold gap-6 rounded-lg ${prizeLevel === "" ? 'text-black/60 dark:text-white/60' : "text-black dark:text-white"}`}>
              {prizeLevel === '' ? 'Prize level' : prizeLevel}
              <FaAngleDown />
            </button>
            {prizeOpen && (
              <div className='dark:bg-[#757575] absolute bg-[#f9f9f9] flex flex-col rounded-lg mt-2 max-h-56 overflow-scroll overflow-x-hidden pb-3'>
                {prizeData.map((item) => (
                  <div key={item} onClick={() => handlePrizeClick(item)} className='font-semibold my-1 py-1 px-3 w-36 cursor-pointer mx-3 rounded-lg hover:bg-white dark:hover:bg-[#555555]'>{item}</div>
                ))}
              </div>
            )}
          </div>

          {/* skill level  */}

          <div>
            <button onClick={() => { setSkillOpen(!skillOpen); setPrizeOpen(false); setCategoriesOpen(false) }} className={`flex items-center dark:bg-[#757575] justify-between px-4 bg-white py-2 w-[300px] lg:w-48 font-semibold gap-6 rounded-lg ${skillSelection === "" ? 'text-black/60 dark:text-white/60' : "text-black dark:text-white"}`}>
              {skillSelection === '' ? 'Skill level' : skillSelection}
              <FaAngleDown />
            </button>
            {skillOpen && (
              <div className='absolute dark:bg-[#757575] bg-[#f9f9f9] flex flex-col rounded-lg mt-2 max-h-56 overflow-scroll overflow-x-hidden pb-3'>
                {skillLevelData.map((item) => (
                  <div key={item} onClick={() => handleSkillClick(item)} className='font-semibold my-1 py-1 px-3 w-36 cursor-pointer mx-3 rounded-lg hover:bg-white dark:hover:bg-[#555555]'>{item}</div>
                ))}
              </div>
            )}
          </div>

          <div className=' bg-blue-500 lg:w-[100px] hover:bg-blue-700 w-[300px] grid place-items-center px-5 py-2 rounded-md'>
            <FaSearch color='#ffffff' size={22} />
          </div>

        </div>


        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-16'>
          {coursesData.length > 0 &&
            coursesData.filter((item) => {
              return search.toLowerCase() === ''
                ? item : item.heading.toLowerCase().includes(search)
            }).map((item, index) => (
              <div key={index}>
                <Link to='/course'>
                  <Course item={item} />
                </Link>
              </div>
            ))
          }
        </div>

      </div>


      <div className='-z-10 mx-10'>
        <div className=' relative overflow-hidden flex flex-col lg:flex-row lg:items-center items-start lg:justify-between px-8 gap-3 lg:gap-14 text-white md:px-24 lg:px-36 w-full h-auto py-14 bg-gradient-to-b from-blue-900 to-blue-700 rounded-lg mb-10'>
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
          <div className=' text-left lg:w-[70%] w-full'>
            <h2 className='text-3xl font-bold'>Are you ready for a more great Conversation?</h2>
          </div>
          <div className='lg:w-[70%] dark:bg-[#353535] bg-white rounded-lg'>
            <div className='rounded-lg px-4 py-3 font-semibold cursor-pointer hover:text-black flex items-center'>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' className='w-full dark:bg-[#353535] dark:placeholder:text-white/60 dark:text-white px-4 rounded-l-lg text-sm outline-none border-none' placeholder='Type your Email here' />
              <button onClick={handleSubmit} className='bg-[#353535] dark:bg-[#151515] dark:hover:bg-black hover:bg-[#151515] text-white px-3 py-2 rounded-lg'>Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default CoursesSection;

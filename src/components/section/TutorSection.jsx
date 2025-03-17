import React, { useState } from 'react'
import vector from '../../images/elements/04.svg'
import post from "../../images/elements/post.png"
import addCourse from "../../images/elements/add-course.svg"
import report from "../../images/elements/report.png"
import feedback from "../../images/elements/feedback.png"
import CountUp from 'react-countup';
import { FaCircleCheck } from "react-icons/fa6";
import Footer from '../Footer'
import axios from 'axios'

function TutorSection() {

  const [blockSelection, setBlockSelection] = useState('block1')

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [phoneNumber, setPhoneNumber] = useState();
  const [linkedinId, setLinkedIn] = useState('');
  const [finalMessage, setFinalMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceId = 'service_u8ef3le';
    const templateId = 'template_u6tuznh';
    const publicKey = 'zhdiwsTaMbOiaW3KB';

    const finalMessageText = `Phone Number : ${phoneNumber}\nLinkedin : ${linkedinId}\nMessage : ${message}`;
    setFinalMessage(finalMessageText);

    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: name,
        from_email: email,
        to_name: 'TechVise',
        message: finalMessage,
      }
    };

    try {
      const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
      console.log(res.data);
      setName('');
      setEmail('');
      setMessage('');
      setPhoneNumber("");
      setLinkedIn("");
      setFinalMessage("");
      alert("Thanks for Joining Us We will contact ASAP");
    } catch (error) {
      console.error(error);
      alert("Something Wrong : Internal Server Error")
    }
  }


  return (
    <div className='dark:bg-[#252525] w-full dark:text-white overflow-x-hidden'>


      <div className='flex flex-col md:flex-row md:items-center gap-8 bg-[#F2F2F2] dark:bg-[#303030] px-4 md:px-10 py-12'>
        <div className='md:w-[50%] w-full lg:px-6'>
          <h2 className='lg:text-[45px] md:text-[35px] text-[30px] font-bold'>Join our guild of Tutors</h2>
          <p className=' text-black/60 dark:text-white/60 font-semibold'>Your skills and expertise along with our learning management system will outshine all traditional and ineffective learning methodologies and create a world-class learning experience.</p>
          <button className=' bg-blue-600 my-3 px-4 py-2 rounded-md text-white font-bold'>
            <a href='#teachingBlock'>
              Start teaching today
            </a>
          </button>
        </div>
        <div className='md:w-[50%] w-full'>
          <img src={vector} alt='' />
        </div>
      </div>


      <div className=' flex flex-col gap-3 items-center text-center py-10'>
        <h1 className='md:text-4xl md:font-[700] text-[28px] font-bold'>Be a guiding star to thousands</h1>
        <p>You must follow the 4-step approach to get started with helping every potential learner out there.</p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-4 lg:gap-8 items-center'>

        <div className=' flex flex-col'>
          <div className='flex items-end justify-center w-full h-56'>
            <img src={post} className='w-56' alt='' />
          </div>
          <div className='flex flex-col gap-2 text-center'>
            <h2 className='text-xl font-bold'>Create Account</h2>
            <p className=' text-black/60 dark:text-white/60'>Enter all the necessary details and get started</p>
          </div>
        </div>

        <div className=' flex flex-col'>
          <div className='flex items-end justify-center w-full h-56'>
            <img src={addCourse} className='w-56' alt='' />
          </div>
          <div className='flex flex-col gap-2 text-center'>
            <h2 className='text-xl font-bold'>Add your lessons</h2>
            <p className=' text-black/60 dark:text-white/60'>Add your course/micro-lesson/lesson in the learning management system...</p>
          </div>
        </div>

        <div className=' flex flex-col'>
          <div className='flex items-end justify-center w-full h-56'>
            <img src={report} className='w-56' alt='' />
          </div>
          <div className='flex flex-col gap-2 text-center'>
            <h2 className='text-xl font-bold'>View and analyse learner performance</h2>
            <p className=' text-black/60 dark:text-white/60'>Understand what the learner is doing and try to understand the “Why”.</p>
          </div>
        </div>

        <div className=' flex flex-col'>
          <div className='flex items-end justify-center w-full h-56'>
            <img src={feedback} className='w-56' alt='' />
          </div>
          <div className='flex flex-col gap-2 text-center'>
            <h2 className='text-xl font-bold'>Feedback</h2>
            <p className=' text-black/60 dark:text-white/60'>Provide feedback and scope for improvement to enhance learner’s...</p>
          </div>
        </div>
      </div>



      <div className='px-10 py-10'>
        <div className='bg-orange-400/30 w-full py-12 grid grid-cols-1 gap-10 lg:gap-0 md:grid-cols-2 lg:grid-cols-4 text-orange-500 rounded-lg'>
          <div className=' flex flex-col items-center'>
            <div className=' font-bold text-5xl'>
              <CountUp start={0} end={89} duration={8} delay={1} />k</div>
            <h5 className=' text-black dark:text-white text-sm font-bold'>Total Students</h5>
          </div>
          <div className=' flex flex-col items-center'>
            <div className=' font-bold text-5xl'>
              <CountUp start={0} end={180} duration={8} delay={1} />k</div>
            <h5 className=' text-black dark:text-white text-sm font-bold'>Total Instructors</h5>
          </div>
          <div className=' flex flex-col items-center'>
            <div className=' font-bold text-5xl'>
              <CountUp start={0} end={20} duration={8} delay={1} />k</div>
            <h5 className=' text-black dark:text-white text-sm font-bold'>Total Courses</h5>
          </div>
          <div className=' flex flex-col items-center'>
            <div className=' font-bold text-5xl'>
              <CountUp start={0} end={25} duration={8} delay={1} />+</div>
            <h5 className=' text-black dark:text-white text-sm font-bold'>Languages</h5>
          </div>
        </div>
      </div>



      <div id='teachingBlock' className='p-10 sm:gap-10 md:gap-10 flex flex-col lg:flex-row md:items-start'>

        <div className='md:w-full lg:w-[40%] bg-white dark:bg-[#151515] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-lg'>
          <form onSubmit={handleSubmit} className='px-6 pb-6'>
            <h4 className='py-6 text-3xl font-[650]'>Please fill this form</h4>
            <div className='grid grid-cols-2 gap-8 py-3'>
              <label className='text-black/60 dark:text-white/60 font-semibold'>Name*
                <br />
                <input value={name} onChange={(e) => setName(e.target.value)} type='text' required className='border-2 w-full px-4 py-2 rounded-md dark:bg-[#181818] dark:border-[#555555]' />
              </label>
              <label className='text-black/60 dark:text-white/60 font-semibold'>Email*
                <br />
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} required className='border-2 w-full px-4 py-2 rounded-md dark:bg-[#181818] dark:border-[#555555]' />
              </label>
            </div>
            <label className='text-black/60 dark:text-white/60 font-semibold'>
              Phone Number*
              <br />
              <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} type='number' required className='w-full border-2 px-4 py-2 rounded-md dark:bg-[#181818] dark:border-[#555555]' />
            </label>
            <br />
            <br />
            <label className='text-black/60 dark:text-white/60 font-semibold'>
              Linkedin Profile Link*
              <br />
              <input value={linkedinId} onChange={(e) => setLinkedIn(e.target.value)} type='text' className='w-full border-2 px-4 py-2 rounded-md dark:bg-[#181818] dark:border-[#555555]' />
            </label>
            <br />
            <br />
            <label className='text-black/60 dark:text-white/60 font-semibold'>Message *
              <br />
              <textarea
                type="email"
                value={message} onChange={(e) => setMessage(e.target.value)}
                className='border-2 my-2 w-full h-36 text-lg px-6 cursor-pointer rounded-md py-2 focus-within:border-none dark:bg-[#181818] dark:border-[#555555]'
              ></textarea>
            </label>

            <button type='submit' className='my-2 px-4 rounded-md py-2 bg-blue-700 text-white font-bold'>Submit form</button>

          </form>
        </div>

        <div className=' lg:w-[60%] mt-12 md:mt-0 lg:px-10 w-full '>
          <h2 className=' text-3xl font-[650]'>How to Become an Instructor?</h2>
          <div className='flex gap-7 py-4 mb-4'>
            <button onClick={() => setBlockSelection("block1")} className={`${blockSelection === 'block1' ? 'px-3 py-2 bg-blue-600 text-white font-semibold text-sm rounded-md' : " px-3 py-2 bg-blue-600/20 text-blue-600 font-semibold rounded-md text-sm"}`}>Become an Instructor</button>
            <button onClick={() => setBlockSelection("block2")} className={`${blockSelection === 'block2' ? 'px-3 py-2 bg-blue-600 text-white font-semibold text-sm rounded-md' : " px-3 py-2 bg-blue-600/20 text-blue-600 font-semibold rounded-md text-sm"}`}>Instructor Role</button>
            <button onClick={() => setBlockSelection("block3")} className={`${blockSelection === 'block3' ? 'px-3 py-2 bg-blue-600 text-white font-semibold text-sm rounded-md' : " px-3 py-2 bg-blue-600/20 text-blue-600 font-semibold rounded-md text-sm"}`}>Start with Course</button>
          </div>

          {
            blockSelection === 'block1' && (
              <div>
                <h4 className=' text-xl font-bold pb-3'>Become an Instructor</h4>
                <div className='text-black/60 dark:text-white/60 text-[15px] font-semibold'>
                  <p>Fill in the form</p>
                  <br />
                  <p>The very first step towards becoming an instructor with us is to fill in the form that would provide us with all the basic yet necessary details about you. It would take you one step closer to becoming a full-fledged instructor on our Learning Management System.</p>
                  <br />
                  <p>You must provide details such as:</p>
                  <br />
                  <div className='flex flex-col gap-3 pb-6'>
                    <div className='flex items-center gap-4'>
                      <FaCircleCheck size={16} className=' text-green-600' />
                      <p>Name</p>
                    </div>
                    <div className='flex items-center gap-4'>
                      <FaCircleCheck size={16} className=' text-green-600' />
                      <p>Email</p>
                    </div>
                    <div className='flex items-center gap-4'>
                      <FaCircleCheck size={16} className=' text-green-600' />
                      <p>A crisp bio</p>
                    </div>
                    <div className='flex items-center gap-4'>
                      <FaCircleCheck size={16} className=' text-green-600' />
                      <p>Profile picture</p>
                    </div>
                    <div className='flex items-center gap-4'>
                      <FaCircleCheck size={16} className=' text-green-600' />
                      <p>Your LinkedIn profile link</p>
                    </div>
                  </div>
                  <p>Once signed up, you can move on to the next phase, i.e., checking the roles and responsibilities of the instructor.</p>
                </div>
              </div>
            )
          }
          {
            blockSelection === 'block2' && (
              <div>
                <h4 className=' text-xl font-bold pb-3'>Role of Instructor</h4>
                <div className='text-black/60 dark:text-white/60 text-[15px] font-semibold'>
                  <p className='pt-2 pb-5'>You must be cognizant of the roles and responsibilities that your designation holds. They are, but not limited to:</p>
                  <div className='flex flex-col gap-3 pb-6'>
                    <div className='flex items-center gap-4'>
                      <FaCircleCheck size={16} className=' text-green-600' />
                      <p>Providing educational and informative content</p>
                    </div>
                    <div className='flex items-center gap-4'>
                      <FaCircleCheck size={16} className=' text-green-600' />
                      <p>Avoid providing any sort of filler or fluff content</p>
                    </div>
                    <div className='flex items-center gap-4'>
                      <FaCircleCheck size={16} className=' text-green-600' />
                      <p>Make sure your lessons are plagiarism-free and totally unique</p>
                    </div>
                    <div className='flex items-center gap-4'>
                      <FaCircleCheck size={16} className=' text-green-600' />
                      <p>Help the learners analyze their current situation and how to improve</p>
                    </div>
                    <div className='flex items-center gap-4'>
                      <FaCircleCheck size={16} className=' text-green-600' />
                      <p>Put in the extra efforts to ensure the learning and reviewing process is smooth</p>
                    </div>
                  </div>
                  <p>Being an instructor, you shoulder a very important responsibility, i.e., the future of a student who looks forward to learning something. Most important of all, add value to their learning graph instead of just educating them.</p>
                </div>
              </div>
            )
          }
          {
            blockSelection === 'block3' && (
              <div>
                <h4 className=' text-xl font-bold pb-3'>Start with a Courses</h4>
                <div className='text-black/60 dark:text-white/60 text-[15px] font-semibold'>
                  <p>Finally, once you are ready to wear the hat of a teacher, you need to start creating value-adding content which has the sole aim of making the learner aware and educated. Guide them throughout the course through analyzing their learning graph. See how much time are they taking to understand a certain concept, what are their strengths and weaknesses, and what is the plan of action that will help them create a better path for themselves.</p>
                </div>
              </div>
            )
          }

        </div>

      </div>


      <div className=' mx-10'>

        <div className='relative overflow-hidden flex flex-col lg:flex-row lg:items-center items-start lg:justify-between px-8 gap-3 text-white md:px-24 lg:px-36 w-full h-auto py-8 bg-black rounded-lg mb-10'>
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
          <a href='#teachingBlock'>
            <div className='text-white border-white border-2 rounded-lg px-4 py-3 font-semibold cursor-pointer hover:bg-white hover:text-black'>Start Teaching Today</div>
          </a>
        </div>
      </div>


      <Footer />


    </div>
  )
}

export default TutorSection
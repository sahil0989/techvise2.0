import React, { useState } from 'react'
import commingSoon from "../images/svg/coming-soon.svg"
import axios from 'axios';

function CoursePage() {

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
        <div>
            <div className='flex flex-col lg:flex-row items-center gap-10 dark:bg-[#252525] h-screen dark:text-white px-20'>
                <div className='w-full lg:w-[70%]'>
                    <h2 className=' font-bold text-5xl pb-5'>We are building Something awesome!</h2>
                    <p className=' dark:text-white/60 text-black/60'>Hey you! Eduport is coming. We are doing our best to launch our website and we will be back soon.</p>
                    <br />
                    <div className='relative flex flex-col w-full gap-3'>
                        <h4 className=''>Launch Progress</h4>
                        <h4 className='absolute right-0 text-xs font-semibold top-2'>75%</h4>
                        <div className='w-full h-2 bg-black/50 dark:bg-white/60 rounded-lg'>
                            <div className='bg-blue-600 skill-per h-2 rounded-lg w-[75%] top-0'></div>
                        </div>
                    </div>
                    <p className=' font-semibold mt-6'>Notify me when website is launched</p>

                    <input
                        type="email"
                        className=' bg-black/10 dark:bg-white/40 my-2 w-full text-lg px-6 cursor-pointer rounded-md py-2 focus-within:border-none'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Enter your mail'
                    />
                    <button onClick={handleSubmit} className='mt-2 bg-blue-700 px-5 py-3 rounded-lg hover:bg-blue-800'>Notify Me</button>
                </div>
                <div className='w-full'>
                    <img src={commingSoon} className='w-full mt-5' alt='' />
                </div>
            </div>
        </div>
    )
}

export default CoursePage
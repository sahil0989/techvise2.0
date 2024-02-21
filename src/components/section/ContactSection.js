import React, { useState } from 'react';
import svga from '../../images/elements/map.svg'
import contactImg from '../../images/elements/contact.svg'
import Footer from '../Footer';
import axios from 'axios';

function ContactSection() {

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

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
        from_name: name,
        from_email: email,
        to_name: 'Web Wizard',
        message: message,
      }
    };

    try {
      const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
      console.log(res.data);
      setName('');
      setEmail('');
      setMessage('');
      alert("Thanks for contacting Us");
    } catch (error) {
      console.error(error);
      alert("Something Wrong : Internal Server Error")
    }
  }

  return (
    <div className='dark:bg-[#252525] w-full dark:text-white overflow-y-hidden'>
      <div className='px-10  w-full h-56 flex flex-col items-center py-16 relative'>
        <img src={svga} className='absolute w-full h-52 object-cover top-0 z-0' alt='' />
        <h4 className=' text-blue-700 font-bold'>Contact Us</h4>
        <h2 className=' font-bold text-[35px] md:text-[45px]'>We're here to help!</h2>
      </div>

      <div className='px-10 flex md:flex-row flex-col py-10'>
        <img src={contactImg} className=' h-[400px] lg:w-[50%] flex justify-center items-center' alt='' />
        <div className=' flex flex-col gap-4 md:w-[50%]'>
          <h2 className='font-bold text-4xl'>Let's talk</h2>
          <p className=' text-black/60 dark:text-white/60'>To request a quote or want to meet up for coffee, contact us directly or fill out the form and we will get back to you promptly</p>

          <form onSubmit={handleSubmit} className='flex flex-col'>
            <label className='font-semibold text-black/60 dark:text-white/60'>Your name *
              <br />
              <input
                type="text"
                className=' bg-black/10 dark:bg-white/60 my-2 w-full text-lg px-6 cursor-pointer rounded-md py-2 focus-within:border-none'
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label className='font-semibold text-black/60 dark:text-white/60'>Email address*
              <br />
              <input
                type="email"
                className=' bg-black/10 dark:bg-white/60 my-2 w-full text-lg px-6 cursor-pointer rounded-md py-2 focus-within:border-none'
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label className='font-semibold text-black/60 dark:text-white/60'>Message *
              <br />
              <textarea
                type="text"
                className=' bg-black/10 dark:bg-white/60 my-2 w-full h-36 text-lg px-6 cursor-pointer rounded-md py-2 focus-within:border-none'
                value={message}
                required
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </label>

            <button className='text-white font-bold bg-blue-600 rounded-lg py-4 hover:bg-blue-700'>Send Message</button>

          </form>

        </div>


      </div>
      <Footer />
    </div>
  );
}

export default ContactSection;

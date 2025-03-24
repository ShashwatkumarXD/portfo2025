import React from 'react'
import { SlArrowLeftCircle } from "react-icons/sl";
//// Projects
function AboutMe() {
  return (
    <section id='about me'>
      {/* ----------------------------------------------Desktop--------------------------------------------------- */}
      <div className='h-screen bg-white hidden md:flex'>
        <img src='/arrow8.png' className='object-cover absolute top-180 left-80 w-72 h-72 z-50 rotate-45'/>
        <div className='w-[55%] flex flex-col p-24 gap-7'>
          <a href='#home' className='flex flex-row items-center gap-2 cursor-pointer'>
            <SlArrowLeftCircle />
            <p className='pb-0.5 underline'>Back to Home</p>
          </a>
          {/* <p className='font-bold text-4xl text-black'>From Student to Developer</p> */}
          <p className='font-bold text-4xl text-blue-500'><span className='text-black'>From Student to <br/>Developer</span><br/> &lt;HelloWorld /&gt;</p>
          <p>Hi! I’m <span className='font-bold'>Shashwat Kumar</span>, a final-year Computer Science student at UPES Dehradun. I’m a passionate problem solver who loves turning ideas into real, functional tech solutions. I have a strong interest in both IoT technology and full-stack web development, and I enjoy building things that are useful, innovative, and user-friendly.
            I’m always exploring new tools, frameworks, and design concepts to improve my skills. I recently joined 100xClass to deepen my technical knowledge and stay industry-ready.</p>
        </div>
        <div className='w-[45%]'>
          <img src='/skyBG.jpg' className='w-full h-full object-cover' />
        </div>
      </div>
      {/* --------------------------------------------Mobile------------------------------------------ */}
      <div className='h-screen bg-white md:hidden flex flex-col justify-center items-center'>
        <div className='flex justify-center items-center flex-col gap-7 p-10'>
          <p className='font-bold text-4xl text-blue-500'>About Me</p>
          <p>Hi! I’m <span className='font-bold'>Shashwat Kumar</span>, a final-year Computer Science student at UPES Dehradun. I’m a passionate problem solver who loves turning ideas into real, functional tech solutions. I have a strong interest in both IoT technology and full-stack web development, and I enjoy building things that are useful, innovative, and user-friendly.
            I’m always exploring new tools, frameworks, and design concepts to improve my skills. I recently joined 100xClass to deepen my technical knowledge and stay industry-ready.</p>
        </div>
        <a href='#home' className='flex flex-row items-center gap-2 cursor-pointer'>
            <SlArrowLeftCircle />
            <p className='pb-0.5 underline'>Back to Home</p>
        </a>
      </div>
    </section>
  )
}

export default AboutMe;
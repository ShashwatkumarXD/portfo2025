import Button from './Button';
import { FaDownload } from "react-icons/fa";
// import Typewriter from 'typewriter-effect';
const Hero = () => {

  return (
    <div>
      {/* -----------------------------mobile---------------------------------------- */}
      <div className="h-screen flex justify-center items-center md:hidden">
        <div className="flex flex-col justify-center items-center text-center gap-10">
          <section>
            <div className='flex justify-center items-center'>
              <img src='../public/profile-1.webp' className='w-40 h-40 rounded-full object-cover cursor-pointer' />
            </div>
          </section>
          <section className='flex flex-col gap-7'>
            <div className=''>
              <p className='font-bold text-2xl'>Welcome to my Portfolio</p>
              <p className='font-bold text-5xl'>Hi I'm <br />
                <span className='text-blue-500'>Shashwat Kumar</span>
                <br />
                {/* <Typewriter
                  options={{
                    strings: ['Developer', 'Problem Solver', 'Innovator'],
                    autoStart: true,
                    loop: true,
                  }}
                /> */}
                </p>
              <p className='font-semibold text-2xl text-gray-800 pt-6'>Innovative and a passionate problem solver <br />hiring me would be a great decision!</p>
            </div>
            <div className='flex justify-center items-center gap-10'>
              <button className='bg-blue-500 w-[40%] p-2 text-white rounded-full font-bold hover:bg-blue-400 cursor-pointer'>Hire Me!</button>
              <button className='bg-white w-[40%] p-2 flex justify-center items-center text-blue-500 font-bold border-1 rounded-full cursor-pointer'>Download CV <FaDownload /> </button>
            </div>
          </section>
        </div>
        <div></div>
      </div>

      {/* --------------------------------------desktop-------------------------------------------------- */}
      <div className=''>
        <div className='h-screen hidden md:flex flex-row gap-72 justify-center items-center px-20 py-[200px]'>
          <section className='flex flex-col gap-10'>
            <div className=''>
              <p className='font-bold text-2xl'>Welcome to my Portfolio</p>
              <p className='font-bold text-6xl'>Hi I'm <br />
                <span className='text-blue-500'>Shashwat Kumar</span>
                <br />
                {/* <Typewriter
                  options={{
                    strings: ['Developer', 'Problem Solver', 'Innovator'],
                    autoStart: true,
                    loop: true,
                  }}
                /> */}
                </p>
              <p className='font-semibold text-2xl text-gray-800 pt-6'>Innovative and a passionate problem solver <br />hiring me would be a great decision!</p>
            </div>
            <div className='flex gap-10'>
              <Button
                id='product-button'
                title="Hire Me!"
                // rightIcon={<TiLocationArrow />}
                containerClass="bg-blue-500 md:flex hidden items-center font-bold justify-center gap-1 text-white hover:bg-blue-400" />
              <Button
                id='product-button'
                title="Download CV"
                rightIcon={<FaDownload />}
                containerClass="bg-white md:flex hidden font-bold items-center justify-center gap-1 text-blue-500 border-1" />
            </div>
          </section>
          <section>
            <div className='flex justify-center items-center'>
              <img src='../public/profile-1.webp' className='w-[400px] h-[400px] rounded-full object-cover' />
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Hero
import React from 'react' 
import image from "../assets/image.png";
const Home = () => {
  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0b0f1a] text-white'>
     {/* glow blobs */}
    <div className='absolute -top-32 -left-32 w-96 h-96 rounded-full bg-pink-500/30 blur-3xl animate-pulse'></div>
    {/* glow blobs */}
    <div className='absolute -top-1/2 -right-32 w-96 h-96 rounded-full bg-cyan-500/30 blur-3xl animate-pulse delay-1000'></div>
        {/* glow blobs */}
    <div className='absolute -bottom-0- -left-1/3 w-96 h-96 rounded-full bg-purple-600/30 blur-3xl animate-pulse'></div>
<div className='absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#ffffff15_1px transparent-0)] bg-[sixe:40px_40px] opacity-30'></div>
      <div className='relative z-10 max-w-6xl w-full px-6 grid md:grid-cols-2 gap-16 items-center'>
        {/* left text */}
        <div className='text-center md:text-left'>
          <h1 className='text-5xl md:text-7xl font-extrabold leading-tight mb-6'>
            <span className='bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-text'>
              Front-End
            </span>
            <br />
            Developer
          </h1>

          <p className='text-gray-300 text-lg md:text-xl mb-8'>
            hi, i am{" "}
            <span className='text-pink-300 font-bold'>Ammar</span>👋<br />
            i build scalable, secure & high-performance web applications. using
            <span className='text-cyan-400 font-medium'>Java, React, CSS,</span>
            <span className='text-pink-400 font-medium'>  Bootstrap</span> &
            <span className='text-purple-400-400 font-medium text-cyan-400'> Tailwind</span>

          </p>

          <p className='text-gray-400 max-w-xl'>
            Passionate about backend logic, Rest APIs, authentication, and database design. i thrive on crafting seamless user experience and writing clean, efficient code.Always eger to learn new technologies and take on exciting projects.
          </p>
          <div className='flex flex-col sm:flex-row gap-6 py-[20px]'>
            <button className="px-10 py-4 rounded-full font-semibold text-lg  bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(236,72,153,0.6)]">
             View Projects
            </button>
                   <button className="px-10 py-4 rounded-full font-semibold text-lg border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 shadow-[0_0_30px_rgba(34,211,238,0.6)]">
             Download Resume
            </button>
          </div>

        </div>
        {/* Right Profile image */}
<div className='flex justify-center'>
  <div className='relative group'>
<div className='relative p-3 rounded-full backdrop-blur-xl bg-white/10 border border-white/20'>
<img src={image} alt="img" className='w-80 h-80 md:w-[420px] md:h-[420px] lg:w-[420px] lg:h-[400] object-cover rounded-full group-hover:scale-110 transition duration-700 shadow-[0_0_60px_rgba(236,72,153,0.6)]' />

</div>
  </div>

</div>


      </div>
      <div className='absolute bottom-0 w-full h-[2px] bg-gradient-to-r from-transparent via-pink-500 to-transparent animate-pulse'></div>
    </section>
  )
}

export default Home
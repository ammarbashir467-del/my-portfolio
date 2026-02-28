import React from 'react'

const Contact = () => {
  return (
    <section className='relative min-h-screen bg-[#0b0f1a] text-white flex items-center justify-center overflow-hidden'>


      <div className="relative z-10 text-center px-6">

        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
            Let's Work Together
          </span>
        </h2>

        <p className="text-gray-400 text-sm md:text-base mb-8 max-w-md mx-auto">
          Java Full-Stack Developer available for full-time roles, freelance
          projects & collaborations.
        </p>

        {/* Quick Info */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center text-gray-300 text-sm mb-10">
          <span>📧 Reach me at: ammarbashir467@gmail.com</span>
          <span>📍 Sargodha, Pakistan</span>
        </div>

        <div className="flex justify-center gap-5">
          <a
            href="#"
            className="px-8 py-3 rounded-full text-sm font-semibold
            bg-gradient-to-r from-pink-500 to-purple-600
            hover:scale-105 transition-all duration-300
            shadow-[0_0_25px_rgba(236,72,153,0.5)]"
          >
            Contact Me
          </a>

          <a
            href="#"
            className="px-8 py-3 rounded-full text-sm font-semibold
            border border-cyan-400 text-cyan-400
            hover:bg-cyan-400 hover:text-black transition-all duration-300"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
import React from 'react'

const skills = [
  "Java",
  "Html",
  "React",
  "Tailwind CSS",
  "JavaScript",
  "Git",
  "Vercel",
];

const About = () => {
  return (
    <section className='relative bg-[#0b0f1a] text-white py-24 overflow-hidden'>

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Heading  */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl md:text-5xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get to know more about me, my skills, and what I love building.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-14 text-center">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-pink-400">
              Java Front-End Developer
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              I’m{" "}
              <span className="text-white font-semibold">Ammar</span>, a
              passionate Java Front-developer who loves building secure,
              scalable, and performance-driven web applications.
            </p>

            <p className="text-gray-400 mb-6">
              My core strength lies in Front-End development using{" "}
              <span className="text-cyan-400">Java & React</span>, Tailwind
              Responsivness, and designing efficient
              Websites. I also enjoy crafting modern, responsive UIs using{" "}
              <span className="text-pink-400">React & Tailwind CSS</span>.
            </p>

            {/* Stats  */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4 rounded-xl bg-white/5 border-white/10">
                <h4 className="text-3xl font-bold text-cyan-400">10+</h4>
                <p className="text-gray-400 text-sm">Projects</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/5 border-white/10">
                <h4 className="text-3xl font-bold text-pink-400">1+</h4>
                <p className="text-gray-400 text-sm">Year Learning</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/5 border-white/10">
                <h4 className="text-3xl font-bold text-purple-400">100%</h4>
                <p className="text-gray-400 text-sm">Passion</p>
              </div>
            </div>
          </div>

          {/* Right Skills  */}

          <div className="rounded-2xl bg-[#0f1525] p-8 border border-white/10 shadow-xl flex flex-col items-center">
            <h3 className="text-xl font-bold mb-6 text-center text-cyan-400 ">
              Tech Stack
            </h3>
            <div className="flex flex-wrap justify-center gap-3 items-center w-[200px]">
              {skills.map((skill, index) => (
              <span 
                key={index}
              className="px-4 py-2 rounded-full text-sm bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-white-20 text-white hover:scale-105 transition">
                {skill}
              </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
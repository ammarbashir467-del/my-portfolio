import React from 'react'

const project = [
  {
    title: "E-Commerce Web App",
    desc: "Full-stack e-commerce application with authentication, cart, orders, and admin panel.",
    tech: [
      "Java",
      "React",
      "Tailwind CSS",
    ],
    live: "#",
    github: "#",
  },
  {
    title: "Employee Management System",
    desc: "CRUD-based enterprise app to manage employees with role-based access.",
    tech: [
      "Java",
      "React",
      "Axios",
      "Bootstrap",
    ],
    live: "#",
    github: "#",
  },
  {
    title: "Portfolio Website",
    desc: "Personal developer portfolio with animations and responsive UI.",
    tech: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Responsive Design",
    ],
    live: "#",
    github: "#",
  }
];

const students = [
  { name: 'IRFAN UL HAQ', area: 'NST' },
  { name: 'ADNAN', area: 'ASD' },
  { name: 'SAMAR', area: 'PSD' },
  { name: 'AMMAR', area: 'XYZ' },
  { name: 'SHAHAB', area: 'ABC' },
]

const Project = () => {
  return (
    <section className='relative bg-[#0b0f1a] py-24 text-white overflow-hidden'>
      <div className='relative z-10 max-w-7xl mx-auto px-8'>
        <div className='absolute top-0 left-0 w-96 h-96 bg-pink-500/30 blur-3xl rounded-full'></div>
        <div className='absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/30 blur-3xl rounded-full'></div>

        {/* headline */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className='bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-transparent bg-clip-text'>Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Real-world projects showcasing my Java Full-Stack development skills.
          </p>
        </div>
        {/* cards */}
        <div className="grid sm:grid-col-2 lg:grid-cols-3 gap-10">
          {project.map((project, index) => (
            <div key={index} className="group relative rounded-2xl p-[1px] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 hover:scale-[1.03] transition-all duration-300">
              <div className='h-full rounded-2xl bg-[#0f1525] p-6 flex flex-col'>
              <h3 className="text-xl font-bold mb-3 group hover:text-pink-500 transition">
              {project.title}
              </h3>

              <p className="text-gray-400 text-sm mb-5 flex-grow
              ">{project.desc}</p>
                {/* skills */}
                <div className='flex flex-wrap mb-6 gap-2 '>
                 {project.tech.map((skill, i) =>(
                  <span key={i} className='text-xs px-3 py-1 rounded-full bg-white/10 border border-white/20 text-cyan-300'>{skill}</span>
                 ))}
                </div>
                {/* buttons */}
                <div className="flex gap-4">
                 <a href={project.github}
                 className='flex-1 rounded-full px-4 py-4 text-center border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-black transition'
                 
                 >Github</a>
                   <a href={project.github}
                 className='flex-1 rounded-full px-4 py-4 text-center border bg-gradient-to-r from-pink-500 to bg-purple-600 hover:opacity-90 transition'
                 
                 >Link</a>
                </div>
              </div>
            </div>
          ))}
        </div>

          {students.map((student) => (
            <div className='bg-red-50 border p-5 rounded-2xl mb-[20px] flex items-center justify-between'>
              <p className='bg-red-800 p-3 rounded-lg w-[max-content]'>Student Name is: {student.name}</p>
              <p className='text-black'>Student Area is: {student.area}</p>
            </div>
          ))}

      </div>
    </section>
  )
}

export default Project;
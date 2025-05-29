import Image from "next/image";

export default function Home() {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Tech Company Name",
      period: "2021 - Present",
      achievements: [
        "Led development of key features resulting in 40% user growth",
        "Mentored junior developers and conducted code reviews",
        "Implemented CI/CD pipelines reducing deployment time by 50%",
        "Architected and deployed microservices infrastructure",
      ],
      tags: ["React", "Node.js", "AWS", "Docker"]
    },
    {
      title: "Software Developer",
      company: "Previous Company Name",
      period: "2019 - 2021",
      achievements: [
        "Developed and maintained multiple web applications",
        "Collaborated with design team to implement UI/UX improvements",
        "Reduced application load time by 60% through optimization",
        "Implemented automated testing reducing bugs by 40%"
      ],
      tags: ["JavaScript", "TypeScript", "React", "MongoDB"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University Name",
      period: "2015 - 2019",
      details: [
        "Major: Computer Science",
        "GPA: 3.8/4.0",
        "Relevant Coursework: Data Structures, Algorithms, Web Development"
      ],
      achievements: [
        "Dean&apos;s List: All Semesters",
        "Senior Project: AI-powered Task Management System",
        "Teaching Assistant: Introduction to Programming"
      ]
    }
  ];

  return (
    <div className="github-like-container">
      {/* Profile Section */}
      <div className="github-like-card">
        <div className="flex items-start space-x-6">
          <div className="w-32 h-32 relative rounded-full overflow-hidden bg-[#30363d]">
            <div className="absolute inset-0 flex items-center justify-center text-[#8b949e]">
              <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
              </svg>
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-2 font-poppins">Your Name</h1>
            <p className="text-[#8b949e] mb-4 font-medium">Full Stack Developer</p>
            <p className="text-[#c9d1d9] max-w-2xl mb-4">
              Passionate developer with expertise in React, Next.js, and TypeScript.
              Building modern web applications with a focus on user experience and performance.
            </p>
            <a href="#contact" className="github-like-button">
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <section id="projects" className="mt-12">
        <h2 className="section-title">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Project Card 1 */}
          <div className="github-like-card">
            <h3 className="text-xl font-semibold mb-2">Project Name</h3>
            <p className="text-zinc-400 mb-4">
              Description of your amazing project goes here. Explain what problems it solves
              and what technologies you used.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="github-like-button">View Project</a>
              <a href="#" className="github-like-button">Source Code</a>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="github-like-card">
            <h3 className="text-xl font-semibold mb-2">Another Project</h3>
            <p className="text-zinc-400 mb-4">
              Description of another fantastic project. Highlight your skills and the
              impact of your work.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="github-like-button">View Project</a>
              <a href="#" className="github-like-button">Source Code</a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="mt-12">
        <h2 className="section-title">About Me</h2>
        <div className="github-like-card">
          <p className="text-zinc-300 mb-4">
            I'm a passionate developer who loves creating beautiful and functional web applications.
            With experience in modern web technologies, I focus on delivering high-quality solutions
            that make a difference.
          </p>
          <h3 className="text-xl font-semibold mb-2 mt-6">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Git'].map((skill) => (
              <span key={skill} className="px-3 py-1 bg-zinc-700 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="mt-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="section-title mb-0">Resume</h2>
          <a 
            href="#" 
            className="github-like-button bg-[#238636] hover:bg-[#2ea043]"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </div>
        
        {/* Experience */}
        <div className="github-like-card">
          <h3 className="text-xl font-semibold mb-6 font-poppins text-white">Experience</h3>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-[#30363d]">
                <div className="absolute w-4 h-4 bg-[#238636] rounded-full left-[-9px] top-0"></div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-lg font-medium text-white font-poppins">{exp.title}</h4>
                    <p className="text-[#8b949e]">{exp.company}</p>
                  </div>
                  <span className="text-sm text-[#8b949e] font-fira-code">{exp.period}</span>
                </div>
                <ul className="list-disc list-inside text-[#c9d1d9] mt-2 space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 text-xs font-medium bg-[#30363d] text-[#8b949e] rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="github-like-card mt-6">
          <h3 className="text-xl font-semibold mb-6 font-poppins text-white">Education</h3>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-[#30363d]">
                <div className="absolute w-4 h-4 bg-[#238636] rounded-full left-[-9px] top-0"></div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-lg font-medium text-white font-poppins">{edu.degree}</h4>
                    <p className="text-[#8b949e]">{edu.school}</p>
                  </div>
                  <span className="text-sm text-[#8b949e] font-fira-code">{edu.period}</span>
                </div>
                <ul className="list-disc list-inside text-[#c9d1d9] mt-2 space-y-2">
                  {edu.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
                <div className="mt-4 bg-[#161b22] rounded-md p-4 border border-[#30363d]">
                  <h5 className="text-sm font-medium text-white mb-2">Achievements & Activities</h5>
                  <ul className="list-disc list-inside text-[#8b949e] space-y-2">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mt-12 mb-12">
        <h2 className="section-title">Contact</h2>
        <div className="github-like-card">
          <p className="text-zinc-300 mb-6">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <div className="flex flex-col space-y-4">
            <a href="mailto:your.email@example.com" className="github-like-button text-center">
              Email Me
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="github-like-button text-center">
              LinkedIn
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="github-like-button text-center">
              GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

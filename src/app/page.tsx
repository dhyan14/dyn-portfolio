import Image from "next/image";

export default function Home() {
  return (
    <div className="github-like-container">
      {/* Profile Section */}
      <div className="github-like-card">
        <div className="flex items-start space-x-6">
          <div className="w-32 h-32 relative rounded-full overflow-hidden">
            <Image
              src="/profile-placeholder.jpg"
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-2">Your Name</h1>
            <p className="text-zinc-400 mb-4">Full Stack Developer</p>
            <p className="text-zinc-300 max-w-2xl mb-4">
              Passionate developer with expertise in React, Next.js, and TypeScript.
              Building modern web applications with a focus on user experience and performance.
            </p>
            <a href="#contact" className="github-like-button inline-block">
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
        <h2 className="section-title">Resume</h2>
        
        {/* Experience */}
        <div className="github-like-card mb-6">
          <h3 className="text-xl font-semibold mb-4">Experience</h3>
          
          <div className="border-l-2 border-zinc-700 pl-4 space-y-6">
            <div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-lg font-medium">Senior Software Engineer</h4>
                  <p className="text-zinc-400">Tech Company Name</p>
                </div>
                <span className="text-sm text-zinc-400">2021 - Present</span>
              </div>
              <ul className="list-disc list-inside text-zinc-300 mt-2 space-y-1">
                <li>Led development of key features resulting in 40% user growth</li>
                <li>Mentored junior developers and conducted code reviews</li>
                <li>Implemented CI/CD pipelines reducing deployment time by 50%</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-lg font-medium">Software Developer</h4>
                  <p className="text-zinc-400">Previous Company Name</p>
                </div>
                <span className="text-sm text-zinc-400">2019 - 2021</span>
              </div>
              <ul className="list-disc list-inside text-zinc-300 mt-2 space-y-1">
                <li>Developed and maintained multiple web applications</li>
                <li>Collaborated with design team to implement UI/UX improvements</li>
                <li>Reduced application load time by 60% through optimization</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="github-like-card">
          <h3 className="text-xl font-semibold mb-4">Education</h3>
          
          <div className="border-l-2 border-zinc-700 pl-4 space-y-6">
            <div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-lg font-medium">Bachelor of Science in Computer Science</h4>
                  <p className="text-zinc-400">University Name</p>
                </div>
                <span className="text-sm text-zinc-400">2015 - 2019</span>
              </div>
              <ul className="list-disc list-inside text-zinc-300 mt-2 space-y-1">
                <li>Major: Computer Science</li>
                <li>GPA: 3.8/4.0</li>
                <li>Relevant Coursework: Data Structures, Algorithms, Web Development</li>
              </ul>
            </div>
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

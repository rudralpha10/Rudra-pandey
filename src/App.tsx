/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code2, Brain, Globe, Award, Briefcase, GraduationCap, ChevronRight, Code, Download } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50 font-sans selection:bg-blue-500/30 selection:text-blue-200">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-neutral-950/80 backdrop-blur-md z-50 border-b border-neutral-800">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-xl tracking-tight text-white">RP.</span>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-neutral-400">
            <a href="#about" className="hover:text-amber-500 transition-colors">About</a>
            <a href="#skills" className="hover:text-amber-500 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-amber-500 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-amber-500 transition-colors">Projects</a>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="max-w-5xl mx-auto px-6 py-12 md:py-20 flex flex-col items-start gap-12">
          <div className="flex-1 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-blue-500 font-semibold tracking-wide uppercase text-sm mb-2">Portfolio</h2>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4">
                Rudra Pandey
              </h1>
              <p className="text-xl text-neutral-400 leading-relaxed max-w-2xl">
                B.Tech Computer Science student passionate about Artificial Intelligence and Web Development. Building intelligent solutions and responsive web experiences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a href="mailto:rudra10082005@gmail.com" className="flex items-center gap-2 px-5 py-2.5 bg-amber-500 text-neutral-950 rounded-full hover:bg-amber-400 transition-colors text-sm font-bold">
                <Mail className="w-4 h-4" />
                Contact Me
              </a>
              <a href="https://github.com/rudralpha10" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-neutral-900 border border-neutral-800 text-neutral-300 rounded-full hover:bg-neutral-800 hover:text-white transition-colors text-sm font-medium">
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a href="https://linkedin.com/in/rudra-pandey-489148220" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-neutral-900 border border-neutral-800 text-neutral-300 rounded-full hover:bg-neutral-800 hover:text-white transition-colors text-sm font-medium">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a href="/resume.pdf" download="Rudra_Pandey_Resume.pdf" className="flex items-center gap-2 px-5 py-2.5 bg-neutral-900 border border-neutral-800 text-neutral-300 rounded-full hover:bg-neutral-800 hover:text-white transition-colors text-sm font-medium">
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-6 text-sm text-neutral-500 pt-4"
            >
              <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> Delhi, India</span>
              <span className="flex items-center gap-1.5"><Phone className="w-4 h-4" /> +91 8527177827</span>
            </motion.div>
          </div>
        </section>

        {/* Education & About */}
        <motion.section 
          id="about" 
          className="max-w-5xl mx-auto px-6 py-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-6 h-6 text-blue-500" />
            <h2 className="text-2xl font-bold text-white">Education</h2>
          </div>
          <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <h3 className="text-xl font-bold text-white">GD Goenka University</h3>
              <span className="text-neutral-400 font-medium text-sm bg-neutral-800 px-3 py-1 rounded-full w-fit mt-2 md:mt-0">Aug 2023 - Jun 2027</span>
            </div>
            <p className="text-lg text-neutral-300 mb-4">Bachelor of Technology - Computer Science and Engineering</p>
            <div className="flex items-center gap-2">
              <span className="bg-amber-500/10 text-amber-400 px-3 py-1 rounded-md text-sm font-semibold border border-amber-500/20">GPA: 9.0</span>
            </div>
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section 
          id="skills" 
          className="max-w-5xl mx-auto px-6 py-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Code2 className="w-6 h-6 text-blue-500" />
            <h2 className="text-2xl font-bold text-white">Technical Skills</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SkillCard 
              icon={<Code className="w-5 h-5 text-amber-400" />}
              title="Programming"
              skills={['C++', 'Python']}
            />
            <SkillCard 
              icon={<Brain className="w-5 h-5 text-amber-400" />}
              title="Artificial Intelligence"
              skills={['Machine Learning', 'Deep Learning', 'NLP', 'Prompt Engineering']}
            />
            <SkillCard 
              icon={<Globe className="w-5 h-5 text-amber-400" />}
              title="Web Development"
              skills={['HTML', 'CSS', 'JavaScript', 'Next.js']}
            />
            <SkillCard 
              icon={<Briefcase className="w-5 h-5 text-amber-400" />}
              title="Soft Skills"
              skills={['Leadership', 'Problem Solving', 'Critical Thinking', 'Public Speaking', 'Communication']}
            />
          </div>
        </motion.section>

        {/* Experience */}
        <motion.section 
          id="experience" 
          className="max-w-5xl mx-auto px-6 py-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="w-6 h-6 text-blue-500" />
            <h2 className="text-2xl font-bold text-white">Experience</h2>
          </div>
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-neutral-800 before:to-transparent">
            
            <ExperienceItem 
              title="Web Development Intern"
              company="Global Tech Developers"
              date="Dec 2025 - Jan 2026"
              points={[
                "Worked on web development projects using HTML, CSS, and JavaScript during a one-month internship.",
                "Learned from industry experts and collaborated with domain specialists to enhance technical skills.",
                "Gained hands-on experience in building responsive and user-friendly web interfaces."
              ]}
            />
            
            <ExperienceItem 
              title="Campus Ambassador"
              company="IIT Delhi"
              date="Dec 2025 - Jan 2026"
              points={[
                "Represented IIT Delhi at GD Goenka University, promoting events, workshops, and programs.",
                "Engaged with students to increase awareness about IIT Delhi initiatives and opportunities.",
                "Facilitated connections between students and IIT Delhi for academic and career development."
              ]}
            />

            <ExperienceItem 
              title="Social Media Manager"
              company="RYM GRENERGY"
              date="May 2024 - Nov 2024"
              points={[
                "Managed Instagram platforms, ensuring a consistent brand voice and message.",
                "Monitored social media trends and emerging platforms, adopting new strategies to stay ahead of the competition.",
                "Boosted engagement rates with the creation of compelling and visually appealing content."
              ]}
            />

            <ExperienceItem 
              title="Web Development Intern"
              company="TechNoHacks Edtech"
              date="May 2024 - Jun 2024"
              points={[
                "Worked on a project during a one-month web development internship.",
                "Learned from industry experts and collaborated with domain specialists."
              ]}
            />

          </div>
        </motion.section>

        {/* Projects */}
        <motion.section 
          id="projects" 
          className="max-w-5xl mx-auto px-6 py-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Code2 className="w-6 h-6 text-blue-500" />
            <h2 className="text-2xl font-bold text-white">Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard 
              title="Student RAG Assistant"
              tech="Langchain, Groq, Streamlit"
              desc="An AI assistant built for students using Retrieval-Augmented Generation to answer queries based on provided context."
              demoLink="https://lnkd.in/gueyy23Q"
              githubLink="https://lnkd.in/gQZXGnBg"
            />
            <ProjectCard 
              title="Beta ChatGPT"
              tech="Next.js, Gemini API"
              desc="A conversational AI interface built with Next.js, leveraging the power of Google's Gemini API for intelligent responses."
              demoLink="https://lnkd.in/ggpzHXci"
            />
            <ProjectCard 
              title="LinkedIn Post Generator Tool"
              tech="AI, Content Generation"
              desc="An AI-powered tool that crafts personalized, high-quality LinkedIn content in both English and Hinglish in seconds."
              demoLink="https://lnkd.in/gEY_MD5d"
            />
            <ProjectCard 
              title="AI Resume Screening Engine"
              tech="AI, Machine Learning"
              desc="An intelligent resume screening engine designed to cut recruiter shortlisting time by 70% using machine learning algorithms."
              githubLink="https://lnkd.in/gWb4zc9s"
            />
          </div>
        </motion.section>

        {/* Achievements */}
        <motion.section 
          className="max-w-5xl mx-auto px-6 py-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-6 h-6 text-blue-500" />
            <h2 className="text-2xl font-bold text-white">Achievements</h2>
          </div>
          <div className="bg-neutral-900 rounded-2xl border border-neutral-800 shadow-sm p-8">
            <ul className="space-y-4">
              <AchievementItem text="Finalist in Google PromptWars Hackathon - Selected among the top 10 finalists, demonstrating exceptional problem-solving and innovation skills." />
              <AchievementItem text="Finalist of Master Union Master X." />
              <AchievementItem text="Finalist of Anveshana Synopsis." />
              <AchievementItem text="Qualified for Code Kshetra finals among 150 teams from 15,000+ participants." />
              <AchievementItem text="My Team secured 5th position in Internal Smart India Hackathon." />
              <AchievementItem text="Participated in 10+ hackathons including Brainwave DTU, Code Cubicle 2 and 3, Technovate hackathon at Sharda University." />
              <AchievementItem text="2 Times Speaker at University" />
            </ul>
          </div>
        </motion.section>

      </main>

      {/* Footer */}
      <footer className="bg-neutral-950 border-t border-neutral-900 py-8 text-center text-neutral-500 text-sm">
        <p>© {new Date().getFullYear()} Rudra Pandey. All rights reserved.</p>
      </footer>
    </div>
  );
}

function SkillCard({ icon, title, skills }: { icon: React.ReactNode, title: string, skills: string[] }) {
  return (
    <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 shadow-sm hover:border-neutral-700 transition-colors">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-neutral-950 rounded-lg border border-neutral-800">
          {icon}
        </div>
        <h3 className="font-bold text-lg text-white">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map(skill => (
          <span key={skill} className="px-3 py-1.5 bg-neutral-950 border border-neutral-800 text-neutral-300 text-sm rounded-lg font-medium">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function ExperienceItem({ title, company, date, points }: { title: string, company: string, date: string, points: string[] }) {
  return (
    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-neutral-950 bg-blue-500/10 text-blue-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
        <Briefcase className="w-4 h-4" />
      </div>
      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-neutral-900 p-6 rounded-2xl border border-neutral-800 shadow-sm hover:border-neutral-700 transition-colors">
        <div className="flex flex-col mb-3">
          <h3 className="font-bold text-lg text-white">{title}</h3>
          <div className="flex items-center justify-between mt-1">
            <span className="text-amber-500 font-medium">{company}</span>
            <span className="text-xs font-semibold text-neutral-400 bg-neutral-950 border border-neutral-800 px-2 py-1 rounded-md">{date}</span>
          </div>
        </div>
        <ul className="space-y-2">
          {points.map((point, i) => (
            <li key={i} className="text-sm text-neutral-400 flex items-start gap-2">
              <ChevronRight className="w-4 h-4 shrink-0 text-neutral-600 mt-0.5" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ProjectCard({ title, tech, desc, demoLink, githubLink }: { title: string, tech: string, desc: string, demoLink?: string, githubLink?: string }) {
  return (
    <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 shadow-sm flex flex-col h-full hover:border-blue-500/50 transition-colors group">
      <h3 className="font-bold text-xl text-white mb-2 group-hover:text-blue-500 transition-colors">{title}</h3>
      <p className="text-xs font-mono text-amber-400 mb-4 bg-amber-500/10 border border-amber-500/20 w-fit px-2 py-1 rounded">{tech}</p>
      <p className="text-neutral-400 text-sm mb-6 flex-grow">{desc}</p>
      <div className="flex items-center gap-3 mt-auto pt-4 border-t border-neutral-800">
        {demoLink && (
          <a href={demoLink} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-sm font-medium text-neutral-300 hover:text-amber-500 transition-colors">
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>
        )}
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-sm font-medium text-neutral-300 hover:text-amber-500 transition-colors">
            <Github className="w-4 h-4" />
            Source Code
          </a>
        )}
      </div>
    </div>
  );
}

function AchievementItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <div className="mt-1 p-1 bg-amber-500/10 text-amber-500 rounded-full shrink-0">
        <Award className="w-4 h-4" />
      </div>
      <p className="text-neutral-300 leading-relaxed">{text}</p>
    </li>
  );
}

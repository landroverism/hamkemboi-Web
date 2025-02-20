import React, { useEffect, useState } from 'react';
import { Circle, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Data imports moved to separate files for clarity but included here for completeness
const techIcons = [
  { name: 'JavaScript', color: '#F7DF1E', angle: 0 },
  { name: 'Python', color: '#3776AB', angle: 45 },
  { name: 'Go', color: '#00ADD8', angle: 90 },
  { name: 'SQL', color: '#4479A1', angle: 135 },
  { name: 'Django', color: '#092E20', angle: 180 },
  { name: 'Linux', color: '#FCC624', angle: 225 },
  { name: 'Node.js', color: '#339933', angle: 270 },
  { name: 'React', color: '#61DAFB', angle: 315 }
];

const experiences = [
  {
    id: 6,
    company: "ClinChoice",
    role: "Full Stack Web Developer(Frontend Based",
    timeline: "Nov 2023 - May 2024",
    description: "At ClinChoice, I am responsible for the development of an internal system that interfaces with, and automatically pipes all company leads from other platforms and all associated websites to the internal CRM for a streamlined and increased leads capture flow. I also design and implement tool for users to find it easy to navigate our loan lending platform using APIs."
  },
  {
    id: 5,
    company: "TechnoBrains Business Solutions",
    role: "Backend Developer(Internship)",
    timeline: "Jan 2022 - Aug 2022",
    description: "Led backend development initiatives and API integrations."
  },
  {
    id: 1,
    company: "Lish AI Labs",
    role: "Full Stack Developer",
    timeline: "Jan 2025 to date",
    description: "Developed and maintained full-stack web applications.Harnessed Project management skills"
  }
];

const projects = [
  {
    title: "Ireporter",
    description: "iReporter is an app that allows users to report incidents like crimes or community issues by capturing and uploading photos, videos, and descriptions in real-time, helping authorities address problems quickly.",
    image: "images/webcapture.jpeg",
    tech: ["HTML5", "CSS3 | SCSS", "React | TypeScript", "Python (Flask)"],
    github: "https://github.com/landroverism/ireporter-new.git"
  },
  {
    title: "Seamless Web App",
    description: " Seamless is a web platform designed to modernize the custom tailoring industry by enabling remote ordering, self-measurements, and direct communication between clients and tailors.",
    image: "images/seamcap.jpeg",
    tech: ["Vue", "HTML5", "CSS3 | SCSS", "Typescript"],
    github: "https://github.com/landroverism/SEAMLESS-web-app.git",
    live: ""
  }
];

const testimonials = [
  {
    text: "To me, Ham came highly recommended. Skeptical as I was, I decided to contract him to build my site. This was the best decision I made. He demonstrated high levels of professionalism and skill in problem solving.",
    author: "Jackie Keya",
    role: "Founder",
    company: "Blended Families",
    image: "https://res.cloudinary.com/smart-code-dev/image/upload/v1/media/client_images/Jackie_gn7mkg"
  },
  {
    text: "Fantastic work! I am just impressed by the quality of his service and working strategy. I hired him for the development of my online store and he satisfied me to the fullest by delivering an exceptional solution.",
    author: "Ibrahim Oduor",
    role: "C.E.O",
    company: "Dafrao International ltd",
    image: "https://res.cloudinary.com/smart-code-dev/image/upload/v1/media/client_images/Ibrahim_fgyoej"
  }
];

function App() {
  const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);
  const [activeExperience, setActiveExperience] = useState(6);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cursor = document.querySelector('.cursor-glow') as HTMLElement;
      if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="cursor-glow fixed pointer-events-none w-64 h-64 -translate-x-1/2 -translate-y-1/2 bg-blue-500/10 rounded-full blur-3xl" />
      
      {/* Navigation */}
      <motion.nav 
  className="fixed w-full p-6 backdrop-blur-sm bg-gray-900/50 z-50"
  initial={{ y: -100 }}
  animate={{ y: 0 }}
  transition={{ duration: 0.5 }}
>
  <div className="max-w-7xl mx-auto flex justify-between items-center">
    {/* Logo that links to the homepage */}
    <a href="/">
      <motion.div 
        className="text-2xl font-bold text-blue-500 cursor-pointer"
        whileHover={{ scale: 1.1 }}
      >
        HK.
      </motion.div>
    </a>

    <div className="flex gap-8">
      {['About', 'Projects', 'Testimonials', 'Contact'].map((item) => (
        <motion.a
          key={item}
          href={`#${item.toLowerCase()}`}
          className="hover:text-blue-400 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {item}
        </motion.a>
      ))}
    </div>
  </div>
</motion.nav>


      <main>
        {/* Hero Section */}
        <motion.section 
          ref={heroRef}
          className="min-h-screen flex items-center justify-center px-6 pt-20"
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <motion.div 
                className="flex items-center gap-2"
                variants={fadeInUp}
              >
                <hr className="w-12 border-blue-500" />
                <span className="text-blue-500">Intro</span>
              </motion.div>
              <motion.h1 
                className="text-5xl font-bold"
                variants={fadeInUp}
              >
                Hi there, I'm
                <span className="text-blue-500"> Ham Kemboi</span>
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-400"
                variants={fadeInUp}
              >
                I am a Moringa(Flatiron) graduate, fullstack developer who enjoys building things that
                live on the internet. I develop exceptional websites and webapps that
                provide intuitive, pixel-perfect user interfaces with efficient and
                modern back-ends.
              </motion.p>
              <motion.div 
                className="flex gap-4"
                variants={fadeInUp}
              >
                <motion.a
                  href="#contact"
                  className="px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get In Touch
                </motion.a>
                <motion.a
                  href="#projects"
                  className="px-6 py-3 border border-blue-500 rounded-lg hover:bg-blue-500/10 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Work
                </motion.a>
              </motion.div>
            </div>

            <motion.div 
              className="relative aspect-square"
              variants={fadeInUp}
            >
              {/* Profile Image Container */}
              <div className="absolute inset-0 m-auto w-64 h-64">
                <div className="relative w-full h-full">
                  <motion.div 
                    className="absolute inset-0 rounded-full overflow-hidden border-4 border-blue-500"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <img
                      src="/images/hammy.jpg"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Tech Icons */}
                  {techIcons.map((tech, index) => {
                    const angle = (index * 360) / techIcons.length;
                    const radius = 160;
                    const x = Math.cos((angle * Math.PI) / 180) * radius;
                    const y = Math.sin((angle * Math.PI) / 180) * radius;

                    return (
                      <motion.div
                        key={tech.name}
                        className={`absolute w-12 h-12 -translate-x-1/2 -translate-y-1/2 transition-all duration-300`}
                        style={{
                          left: `calc(50% + ${x}px)`,
                          top: `calc(50% + ${y}px)`,
                        }}
                        whileHover={{ scale: 1.2 }}
                        animate={hoveredIcon === index ? {
                          x: x * 0.1,
                          y: y * 0.1,
                          scale: 1.2
                        } : {
                          x: 0,
                          y: 0,
                          scale: 1
                        }}
                        onMouseEnter={() => setHoveredIcon(index)}
                        onMouseLeave={() => setHoveredIcon(null)}
                      >
                        <motion.div
                          className="w-full h-full rounded-full flex items-center justify-center text-white relative group"
                          style={{ backgroundColor: tech.color }}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Circle className="w-6 h-6" />
                          <div className="absolute inset-0 rounded-full bg-black/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.div>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 text-sm whitespace-nowrap">
                          {tech.name}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* About Section */}
        <section id="about" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="flex items-center gap-2 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <hr className="w-12 border-blue-500" />
              <span className="text-blue-500">About Me</span>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold">Skills</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Languages, Frameworks, and Databases</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Flask", "JavaScript", "TypeScript", "Python", "Vue", "React", "Node.js", "Django", "PostgreSQL","NextJS"].map((skill) => (
                        <motion.span
                          key={skill}
                          className="px-3 py-1 bg-blue-500/10 rounded-full text-sm"
                          whileHover={{ scale: 1.1 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Cloud, DevOps, and Other Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {["AWS", "Docker", "Git", "CI/CD", "Linux", "REST APIs", "GraphQL"].map((skill) => (
                        <motion.span
                          key={skill}
                          className="px-3 py-1 bg-blue-500/10 rounded-full text-sm"
                          whileHover={{ scale: 1.1 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-8">Experience</h3>
                <div className="flex">
                  <div className="w-1/3 border-r border-gray-700">
                    {experiences.map((exp) => (
                      <motion.button
                        key={exp.id}
                        className={`block w-full text-left px-4 py-3 transition-colors ${
                          activeExperience === exp.id
                            ? "text-blue-500 bg-blue-500/10"
                            : "hover:bg-blue-500/5"
                        }`}
                        onClick={() => setActiveExperience(exp.id)}
                        whileHover={{ x: 5 }}
                      >
                        {exp.company}
                      </motion.button>
                    ))}
                  </div>
                  <div className="w-2/3 p-4">
                    {experiences.map((exp) => (
                      <motion.div
                        key={exp.id}
                        className={`space-y-4 ${
                          activeExperience === exp.id ? "block" : "hidden"
                        }`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                      >
                        <h4 className="text-xl font-bold">{exp.role}</h4>
                        <p className="text-gray-400">{exp.timeline}</p>
                        <p className="text-gray-300">{exp.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-6 bg-gray-800/50">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="flex items-center gap-2 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <hr className="w-12 border-blue-500" />
              <span className="text-blue-500">Projects</span>
            </motion.div>

            <div className="space-y-20">
              {projects.map((project, index) => (
                <motion.div 
                  key={project.title} 
                  className="grid md:grid-cols-2 gap-8 items-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className={`${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                    <motion.div 
                      className="relative aspect-video rounded-lg overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-blue-500/10 backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity" />
                    </motion.div>
                  </div>
                  <div className={`space-y-4 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <p className="text-gray-300">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-1 bg-blue-500/10 rounded-full text-sm"
                          whileHover={{ scale: 1.1 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-400 hover:text-blue-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-5 h-5" />
                        Repository
                      </motion.a>
                      {project.live && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-blue-400 hover:text-blue-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span>→</span>
                          Live Demo
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="flex items-center gap-2 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <hr className="w-12 border-blue-500" />
              <span className="text-blue-500">Testimonials</span>
            </motion.div>

            <div className="relative">
              <div className="overflow-hidden">
                <motion.div 
                  className="flex"
                  animate={{ x: `-${activeTestimonial * 100}%` }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <motion.div 
                        className="max-w-3xl mx-auto text-center space-y-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                      >
                        <motion.div 
                          className="w-20 h-20 mx-auto rounded-full overflow-hidden"
                          whileHover={{ scale: 1.1 }}
                        >
                          <img
                            src={testimonial.image}
                            alt={testimonial.author}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                        <p className="text-xl text-gray-300 italic">"{testimonial.text}"</p>
                        <div>
                          <p className="font-bold">{testimonial.author}</p>
                          <p className="text-gray-400">{testimonial.role} @ {testimonial.company}</p>
                        </div>
                      </motion.div>
                    </div>
                  ))}
                </motion.div>
              </div>
              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      activeTestimonial === index ? 'bg-blue-500' : 'bg-gray-600'
                    }`}
                    onClick={() => setActiveTestimonial(index)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6 bg-gray-800/50">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div 
              className="flex items-center justify-center gap-2 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <hr className="w-12 border-blue-500" />
              <span className="text-blue-500">What's Next?</span>
            </motion.div>

            <motion.div 
              className="max-w-2xl mx-auto space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold">Drop Me a Line</h2>
              <p className="text-gray-300">
                Whether it is to check in, say hi, or contract my services for a gig,
                you can reach me any time. Looking forward to working with you.
              </p>
              <motion.a
                href="mailto:kemboiham3@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Email Me
                <Mail className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-6 px-6 border-t border-gray-800">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} Ham Kemboi. All rights reserved.
            </div>
            <div className="flex gap-6">
              {[
                { icon: Github, href: "https://github.com/landroverism" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/ham-kemboi-916940260/"},
                { icon: Twitter, href: "https://twitter.com/hamkemboi/"},
                { icon: Mail, href: "mailto:kemboiham3@gmail.com" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
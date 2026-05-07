import { useState, useEffect } from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import code from "./assets/code.jpg";
import Education from "./components/Education";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const projects = [
    {
      title: "Xora Ai Saas Page",
      description:
        "Xora is a Modern UI/UX SaaS website developed using React.js and Tailwind CSS",
      tech: ["React", "Tailwind Css"],
      github: "https://github.com/nikhildev-webapp/XORA-Sass-Landing-Page",
      demo: "https://github.com/nikhildev-webapp/XORA-Sass-Landing-Page",
    },
    {
      title: "Travel Website",
      description:
        "This travel website's user interface is designed to inspire exploration and make trip planning simple and engaging. It features a modern, minimalist layout powered by Next.js, TypeScript, and Tailwind CSS.",
      tech: ["Next.Js", "Typescript", "Tailwind CSS"],
      github: "https://github.com/nikhildev-webapp/travel-website",
      demo: "https://github.com/nikhildev-webapp/travel-website",
    },
    {
      title: "Edusity College UI",
      description:
        "The website aims to provide a user-friendly and informative online presence for the college, showcasing its programs, faculty, campus, and admissions information.",
      tech: ["React", "CSS"],
      github: "https://github.com/nikhildev-webapp/-Edusity-College-Website",
      demo: "https://github.com/nikhildev-webapp/-Edusity-College-Website",
    },
   {
      title: "Dynamic Content Builder",
      description:"A powerful, intuitive React.js Web Application that allows usdr to dynamically build and customize personal content pages using draggable and configurable components.",
      tech: ["React", "CSS"],
      github: "https://github.com/nikhildev-webapp/Dynamice-Content-Builder",
      demo: "https://dynamice-content-builder.vercel.app/",
    },
   {
      title: "Candidate Review Dashboard",
      description:"A modern, responsive web application for recruters to review and prioritze job candidate.Built with React, Vite, and Tailwind Css, this dashboard provides a comprehensive interface for evaluating assignments, videos, and overall condidate fits. ",
      tech: ["React", "CSS","Tailwind CSS"],
      github: "https://github.com/nikhildev-webapp/Canddate-Review-Dashboard",
      demo:"https://dapper-frangipane-825164.netlify.app/",
    },
  ];

  const skills = [
    "HTML5", "CSS3/Sass", "JavaScript (ES6+)","TypeScript", "React",
    "Next.Js", "React Native", "Tailwind CSS", "Git","Github",
    "REST APIs","Node.js" 
  ]
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80; // Approximate navbar height
      const elementPosition = element.offsetTop - navHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
    }
  };
  const handleScroll = () => {
    const sections = ["home", "about", "education", "skills", "projects", "contact"];
    const navHeight = 80;

    for (const sectionId of sections) {
      const element = document.getElementById(sectionId);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= navHeight && rect.bottom > navHeight) {
          setActiveSection(sectionId);
          break;
        }
      }
    }
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <nav className="fixed w-full bg-primary/90 backdrop-blur-sm z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-cyan-500 font-bold text-2xl cursor-pointer"
            >
              Portfolio
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {["home", "about", "education", "skills", "projects", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`capitalize ${
                      activeSection === item
                        ? "text-secondary"
                        : "text-textPrimary"
                    } hover:text-secondary transition-colors cursor-pointer`}
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-cyan-200 mb-4 text-xl">Hi, my name is</p>
            <h1 className="text-5xl md:text-7xl font-bold text-cyan-500 mb-4">
              Nikhil kholiya
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold text-secondary mb-6">
              I build things for the web.
            </h2>
            <p className="text-secondary max-w-xl mb-8">
              I am a frontend developer specializing in building exceptional digital experiences.
              Currently, I am focused on building accessible, human-centered products.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 border-2 border-cyan-400 text-secondary hover:border-cyan-500 transition-colors rounded"
            >
              Get In Touch
            </a>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="section-padding">
          <h2 className="text-3xl font-bold text-cyan-500 mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-textSecondary">
              <p className="mb-4">
                Hello! My name is Nikhil, and I enjoy creating things that live on the internet.
                My interest in web development started back in 2023.When i decide to learn how the websites is created
                and start learning Html,Css.
              </p>
              <p>
                Fast-forward to today, and I have had the privilege of working at
                various companies, from startups to large corporations. My main
                focus these days is building accessible, inclusive products and
                digital experiences.
              </p>
            </div>
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-secondary opacity-75 rounded-lg blur"></div>
              <div className="relative bg-primary p-4 rounded-lg">
                <img src={code} alt="Profile" className="rounded-lg w-full " />
              </div>
            </div>
          </div>
        </section>
        
        {/* Education Section */}
        <Education />

        {/* Skills Section */}
        <section id="skills" className="section-padding">
          <h2 className="text-3xl font-bold text-cyan-500 mb-8">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.06, y: -6, boxShadow: "0 14px 40px rgba(2,6,23,0.6)" }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 260, damping: 22, delay: index * 0.1 }}
                className="bg-primary/50 p-4 rounded-lg border border-cyan-500 transition-colors"
              >
                <p className="text-cyan-200 text-center cursor-pointer">
                  {skill}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section-padding">
          <h2 className="text-3xl font-bold text-cyan-500 mb-8">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 hover:cursor-pointer">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.04, y: -10, boxShadow: "0 18px 50px rgba(2,6,23,0.65)" }}
                whileTap={{ scale: 0.99 }}
                transition={{ type: "spring", stiffness: 240, damping: 20, delay: index * 0.1 }}
                className="bg-primary/50 p-4 rounded-lg border border-secondary/20 hover:border-secondary/50 transition-colors"
              >
                <h3 className="text-xl font-bold text-cyan-400 mb-2">
                  {project.title}
                </h3>
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-secondary text-sm px-2 py-1 rounded-full bg-cyan-600 text-white font"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="text-cyan-200 hover:text-secondary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub size={20} />
                  </a>
                  <a
                    href={project.demo}
                    className="text-cyan-200 hover:text-secondary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="section-padding flex flex-col justify-center"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-cyan-500 mb-4">
              Get In Touch
            </h2>
            <p className="text-cyan-200 max-w-md mx-auto mb-8">
              I am currently looking for new opportunities. Whether you have a
              question or just want to say hi, I will try my best to get back to
              you!
            </p>
            <div className="flex justify-center gap-6 mb-8">
              <a
                href="https://github.com/nikhildev-webapp"
                className="text-cyan-500 hover:text-cyan-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/nikhil-kholiya-b220b3259"
                className="text-cyan-500 hover:text-cyan-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiLinkedin size={24} />
              </a>
              <a
                href="mailto:nikhilkholiya59@gmail.com"
                className="text-cyan-500 hover:text-cyan-600  transition-colors"
              >
                <FiMail size={24} />
              </a>
              <a
                href="https://wa.me/917291953428"
                className="text-cyan-500 hover:text-cyan-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={24} />
              </a>
            </div>
            <div className="flex justify-center gap-4">
              <a
                href="mailto:nikhilkholiya59@gmail.com"
                className="inline-block px-8 py-3 border-2 border-cyan-400 text-cyan-100 transition-colors rounded"
              >
                Say Hello
              </a>
              <a
                href="https://wa.me/917291953428"
                className="inline-block px-8 py-3 border-2 border-green-500 text-white bg-green-600 hover:bg-green-700 transition-colors rounded"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App
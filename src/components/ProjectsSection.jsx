import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import SectionTitle from "./SectionTitle";
import { projects } from "../data/portfolioData";

function ProjectsSection() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Work"
          title="Selected projects that reflect my product thinking."
          description="Each project balances usability, visual quality, and a clear product objective to create meaningful experiences for users."
        />

        <div className="project-grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="project-card glass-card"
            >
              <div className="project-header">
                <span className="project-index">0{index+1}</span>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}>
                    <FiGithub size={18} />
                  </a>
                  <a href={project.demo} target="_blank" rel="noreferrer" aria-label={`View demo for ${project.title}`}>
                    <FiArrowUpRight size={18} />
                  </a>
                </div>
              </div>

              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-pill">{tech}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;

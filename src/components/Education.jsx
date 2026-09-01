import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const education = [
  {
    institution: "Delhi University",
    degree: "B.Com. in Computer Application",
    period: "2022 — 2025",
    details:
      "Relevant coursework includes Fundamentals of Computer & IT, Programming in Python, Web Development, and Commerce fundamentals.",
  },
  {
    institution: "DICS Computer Education",
    degree: "Diploma",
    period: "2023 — 2025",
    details: "Focused on practical digital skills and foundational training in modern web and computer-based workflows.",
  },
];

function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Education"
          title="Academic foundations that support my design and development work."
          description="My learning path has combined business understanding, technical exposure, and hands-on project practice to shape a balanced frontend skill set."
        />

        <div className="edu-grid">
          {education.map((edu, index) => (
            <motion.article
              key={edu.institution}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass-card edu-card"
            >
              <span className="edu-period">{edu.period}</span>
              <h3>{edu.institution}</h3>
              <p className="edu-degree">{edu.degree}</p>
              {edu.details && <p className="edu-details">{edu.details}</p>}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;

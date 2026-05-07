

import { motion } from "framer-motion";

const education = [
  {
    institution: "Delhi University",
    degree: "B.Com. in Computer Application",
    period: "2022 — 2025",
    details:
      "Relevant coursework: Fundamentals Of Computer & IT,Programming in Python,Web Developement,Commerce.",
  },
  {
    institution: "DICS COMPUTER EDUCATION",
    degree: "Diploma",
    period: "2023 — 2025",
    details: "Graduated with honors.",
  },
];

function Education() {
  return (
    <section id="education" className="section-padding">
      <h2 className="text-3xl font-bold text-cyan-500 mb-8">Education</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {education.map((edu, idx) => (
          <motion.div
            key={edu.institution}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 24, delay: idx * 0.08 }}
            whileHover={{ scale: 1.03, y: -6, boxShadow: "0 14px 36px rgba(2,6,23,0.6)" }}
            whileTap={{ scale: 0.995 }}
            className="card bg-primary/50 p-4 rounded-lg border border-secondary/20"
          >
            <h3 className="text-xl font-bold text-cyan-400 mb-1">
              {edu.institution}
            </h3>
            <p className="text-secondary mb-2">
              {edu.degree} • <span className="text-cyan-200">{edu.period}</span>
            </p>
            {edu.details && (
              <p className="text-textSecondary">{edu.details}</p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Education;

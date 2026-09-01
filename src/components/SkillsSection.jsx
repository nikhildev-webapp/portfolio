import SectionTitle from "./SectionTitle";
import { skills } from "../data/portfolioData";

function SkillsSection() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Skills"
          title="Tools and technologies I use to build modern products."
          description="I focus on clean frontend development, thoughtful UX patterns, and tools that deliver reliable results across devices and screen sizes."
          align="center"
        />

        <div className="skill-grid">
          {skills.map((skill) => (
            <span key={skill} className="skill-pill">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;

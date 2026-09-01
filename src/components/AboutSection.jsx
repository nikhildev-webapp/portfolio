import code from "../assets/code.jpg";
import SectionTitle from "./SectionTitle";

function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionTitle
          eyebrow="About me"
          title="I build engaging interfaces that feel effortless to use."
          description="I enjoy turning ideas into clear, usable, and visually refined web experiences that help people interact with products confidently."
        />

        <div className="about-grid">
          <div className="about-copy">
            <p>
              Hello! My name is Nikhil, and I enjoy creating things that live on the internet. My interest in web development started when I wanted to understand how digital experiences are built and how design and code come together to solve real problems.
            </p>
            <p>
              Fast-forward to today, I&apos;ve developed a strong foundation in frontend engineering, with a focus on accessible interfaces, responsive design systems, and clean development practices that scale well as products grow.
            </p>
          </div>

          <div className="image-card glass-card">
            <img src={code} alt="Workspace with code" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

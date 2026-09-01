import { motion } from "framer-motion";
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { stats } from "../data/portfolioData";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/nikhildev-webapp", icon: FiGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/nikhil-kholiya-b220b3259", icon: FiLinkedin },
  { label: "Email", href: "mailto:nikhilkholiya59@gmail.com", icon: FiMail },
  { label: "WhatsApp", href: "https://wa.me/917291953428", icon: FaWhatsapp },
];

function HeroSection({ onNavClick }) {
  return (
    <section id="home" className="section hero-section">
      <div className="container hero-layout">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="hero-greeting">Hi, my name is</p>
          <h1 className="hero-title">Nikhil Kholiya</h1>
          <h2 className="hero-subtitle">Frontend Developer building polished digital experiences.</h2>
          <p className="hero-text">
            I design and build accessible, high-performing web interfaces with a strong eye for modern UI/UX, clean architecture, and user-focused details.
          </p>

          <div className="hero-actions">
            <button type="button" className="primary-btn" onClick={() => onNavClick("contact")}>
              Let&apos;s talk
              <FiArrowRight size={18} />
            </button>
            <button type="button" className="secondary-btn" onClick={() => onNavClick("projects")}>
              View projects
            </button>
          </div>

          <div className="social-row" aria-label="Social profiles">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="social-link">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="profile-card glass-card">
            <div className="status-pill">
              <span className="status-dot" />
              Available for work
            </div>

            <div className="profile-panel">
              <div className="mini-label">Focus</div>
              <h3>Modern web experiences</h3>
              <p>Responsive interfaces, clean code, and thoughtful interaction design.</p>
            </div>

            <div className="stat-grid">
              {stats.map((stat) => (
                <div key={stat.label} className="stat-item">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;

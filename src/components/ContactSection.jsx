import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import SectionTitle from "./SectionTitle";

const contactLinks = [
  { label: "GitHub", href: "https://github.com/nikhildev-webapp", icon: FiGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/nikhil-kholiya-b220b3259", icon: FiLinkedin },
  { label: "Email", href: "mailto:nikhilkholiya59@gmail.com", icon: FiMail },
  { label: "WhatsApp", href: "https://wa.me/917291953428", icon: FaWhatsapp },
];

function ContactSection() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact-card glass-card">
          <SectionTitle
            eyebrow="Contact"
            title="Let’s create something meaningful together."
            description="I’m open to product, frontend, and design-driven opportunities where thoughtful experiences matter."
            align="center"
          />

          <div className="contact-actions">
            <a href="mailto:nikhilkholiya59@gmail.com" className="primary-btn">
              Say hello
            </a>
            <a href="https://wa.me/917291953428" target="_blank" rel="noreferrer" className="secondary-btn">
              Chat on WhatsApp
            </a>
          </div>

          <div className="social-row centered">
            {contactLinks.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="social-link large">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;

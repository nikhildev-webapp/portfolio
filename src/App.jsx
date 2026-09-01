import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Education from "./components/Education";
import ThemeToggle from "./components/ThemeToggle";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import { navItems } from "./data/portfolioData";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [navHidden, setNavHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (!element) {
      return;
    }

    const navHeight = 88;
    window.scrollTo({
      top: element.offsetTop - navHeight,
      behavior: "smooth",
    });

    setActiveSection(sectionId);
    setMenuOpen(false);
    setNavHidden(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "education", "skills", "projects", "contact"];
      const navHeight = 88;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (!element) continue;

        const rect = element.getBoundingClientRect();
        if (rect.top <= navHeight && rect.bottom > navHeight) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleNavState = () => {
      const current = window.scrollY;

      if (menuOpen || current <= 20) {
        setNavHidden(false);
      } else {
        setNavHidden(current > lastScrollY.current && current > 90);
      }

      lastScrollY.current = current;
    };

    window.addEventListener("scroll", handleNavState, { passive: true });
    return () => window.removeEventListener("scroll", handleNavState);
  }, [menuOpen]);

  return (
    <div className="page-shell">
      <header className={`topbar ${navHidden ? "topbar-hidden" : "topbar-visible"}`}>
        <div className="container">
          <div className="nav-row">
            <motion.button
              type="button"
              className="brand"
              onClick={() => scrollToSection("home")}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              Nikhil
            </motion.button>

            <nav className="desktop-nav" aria-label="Main navigation">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={activeSection === item.id ? "nav-link active" : "nav-link"}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="nav-actions">
              <ThemeToggle />
              <button
                type="button"
                className="mobile-menu-button"
                aria-label="Toggle navigation menu"
                onClick={() => setMenuOpen((prev) => !prev)}
              >
                {menuOpen ? "✕" : "☰"}
              </button>
            </div>
          </div>

          {menuOpen && (
            <nav className="mobile-nav" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={activeSection === item.id ? "nav-link active" : "nav-link"}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          )}
        </div>
      </header>

      <main>
        <HeroSection onNavClick={scrollToSection} />
        <AboutSection />
        <Education />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;

# Developer Manual

This document explains the portfolio application structure, how it works, and how to update it safely as the project evolves.

## 1. App Overview

This is a modern personal portfolio built using React and Vite. The project follows a component-based architecture and is designed to be:

- Responsive across mobile, tablet, and desktop
- Easy to extend with new sections and content
- Theme-aware with light/dark support
- Performance-conscious with lightweight component structure and minimal re-renders
- Built around reusable UI sections

The portfolio includes the following primary sections:

- Hero / intro
- About me
- Education
- Skills
- Projects
- Contact

## 2. Tech Stack

- React 18
- Vite
- JavaScript
- Tailwind CSS (used for utility-based styling in project setup)
- Framer Motion for animation
- React Icons for icons
- CSS custom properties for theme and global styling

## 3. Project Structure

```bash
src/
├── App.jsx
├── index.css
├── data/
│   └── portfolioData.js
├── components/
│   ├── AboutSection.jsx
│   ├── ContactSection.jsx
│   ├── Education.jsx
│   ├── HeroSection.jsx
│   ├── ProjectsSection.jsx
│   ├── SectionTitle.jsx
│   ├── SkillsSection.jsx
│   └── ThemeToggle.jsx
├── assets/
│   └── code.jpg
└── main.jsx
```

### Main files

- `src/App.jsx`  
  Holds the top-level app layout, nav state, active section logic, and scroll behavior.

- `src/index.css`  
  Contains global styling, app theme variables, hover states, layout patterns, and responsive styles.

- `src/data/portfolioData.js`  
  Central source for navigation labels, skills, project data, and stats.

- `src/components/*`  
  Reusable content blocks that render independent sections of the portfolio.

## 4. How the App Works

### Navigation behavior

The app uses scroll-aware navigation to set the active section while the user moves through the page.

- `activeSection` tracks the currently visible section
- `scrollToSection()` scrolls smoothly to the target section
- the navbar is hidden and shown based on scroll direction
- the mobile menu stays accessible and remains visible when open

### Theme toggling

The theme is managed by `ThemeToggle.jsx`.

- Theme state is stored in localStorage
- `data-theme` is assigned to the root document element
- Light/dark styling is controlled through CSS variables in `src/index.css`

### Content-driven sections

The app is designed so content is easy to edit without rewriting layout code.

- Update personal details in `src/data/portfolioData.js`
- Update project cards there as well
- Modify section structure in the component files when needed

## 5. How to Change the App Content

### Update personal information

Open `src/data/portfolioData.js` and change:

- `navItems`
- `skills`
- `projects`
- `stats`

Example:

```js
export const skills = [
  "HTML5",
  "CSS3 / Sass",
  "React",
  "Tailwind CSS",
];
```

### Update project cards

In the same file, edit each project object:

```js
{
  title: "My Project",
  description: "Short summary of the app",
  tech: ["React", "Tailwind CSS"],
  github: "https://github.com/your-user/project",
  demo: "https://your-demo-link.com"
}
```

### Update the hero section

Edit `src/components/HeroSection.jsx` to change:

- Name
- Intro text
- CTA buttons
- Social links
- Stats card content

### Update about section

Edit `src/components/AboutSection.jsx` to change:

- Intro copy
- image
- section headline and description

### Update education section

Edit `src/components/Education.jsx` to change:

- institutions
- degree names
- education periods
- additional academic details

### Update contact links

Edit the social and contact links in:

- `src/components/HeroSection.jsx`
- `src/components/ContactSection.jsx`

## 6. How to Add a New Section

1. Create a new component in `src/components/`.
2. Import it into `src/App.jsx`.
3. Place it where you want in the main page flow.
4. Add any necessary styling inside `src/index.css`.
5. If the section should be in the navbar, add it to `navItems` in `src/data/portfolioData.js`.

Example pattern:

```jsx
import SectionTitle from "./SectionTitle";

function NewSection() {
  return (
    <section id="new-section" className="section">
      <div className="container">
        <SectionTitle
          eyebrow="New"
          title="Section title"
          description="Section description"
        />
      </div>
    </section>
  );
}

export default NewSection;
```

Then in `App.jsx`:

```jsx
import NewSection from "./components/NewSection";

<NewSection />
```

## 7. Styling Guidelines

The app uses CSS variables in `src/index.css` to keep the design consistent.

### Theme variables

Main variables include:

- `--bg`
- `--bg-strong`
- `--text`
- `--text-strong`
- `--muted`
- `--accent`
- `--accent-strong`
- `--border`
- `--shadow`

These variables are defined in `:root` and overridden for `[data-theme="light"]`.

### Recommended styling approach

- Keep layout rules in CSS classes
- Reuse `.glass-card`, `.section`, `.container`, and `.primary-btn`
- Preserve performance by avoiding heavy animations across too many elements
- Use smooth transitions on hover states for a polished UI

## 8. Development Commands

From the project root, run:

```bash
npm install
npm run dev
```

To build production assets:

```bash
npm run build
```

To run linting:

```bash
npm run lint
```

## 9. Best Practices for Future Changes

- Keep content data separate from UI logic
- Prefer updating `src/data/portfolioData.js` for text and project data
- Reuse existing section components instead of duplicating markup
- Keep class names consistent with the styling system
- Test the app on mobile and desktop after major UI changes
- Keep animations subtle and purposeful

## 10. Notes for the Developer

This portfolio is intentionally structured to be easy to maintain. If the developer wants to add new experiences, certifications, testimonials, or services, the recommended path is:

- add new data in `portfolioData.js`
- create or reuse a matching section component
- update the global styling in `index.css`
- ensure responsive layout remains intact

This keeps the app scalable without making the codebase hard to manage.

## 11. Quick Reference

Common editing points:

- Portfolio content: `src/data/portfolioData.js`
- Main page structure: `src/App.jsx`
- Global design: `src/index.css`
- Hero copy: `src/components/HeroSection.jsx`
- About copy: `src/components/AboutSection.jsx`
- Skills: `src/components/SkillsSection.jsx`
- Projects: `src/components/ProjectsSection.jsx`
- Contact: `src/components/ContactSection.jsx`
- Education: `src/components/Education.jsx`

This manual should be updated whenever the project structure or styling approach changes.

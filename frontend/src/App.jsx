import { lazy, Suspense, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowRight, ArrowUpRight, Download, Github, Linkedin, Mail, Menu, X, Code2, BriefcaseBusiness, GraduationCap, Trophy, Sun, Moon, Phone, MapPin } from 'lucide-react';
import { profile, skills, projects, experience, achievements, education, certifications } from './data/portfolio.js';
import ProjectCard from './components/ProjectCard.jsx';
import ContactForm from './components/ContactForm.jsx';

const Scene = lazy(() => import('./components/Scene.jsx'));

const nav = [['About', '#about'], ['Projects', '#projects'], ['Skills', '#skills'], ['Experience', '#experience'], ['Contact', '#contact']];

function SectionHeading({ eyebrow, title, copy }) {
  return <div className="section-heading"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{copy && <p className="muted heading-copy">{copy}</p>}</div>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [light, setLight] = useState(false);
  const reduceMotion = useReducedMotion();
  return (
    <div className={light ? 'app light' : 'app'}>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Yaswanth home"><span className="brand-mark">Y</span><span>Mopuri Yaswanth<span className="brand-dot">.</span></span></a>
        <button className="icon-button menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          {nav.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <button className="icon-button theme-toggle" onClick={() => setLight(!light)} aria-label={light ? 'Switch to dark theme' : 'Switch to light theme'}>{light ? <Moon size={17} /> : <Sun size={17} />}</button>
        </nav>
      </header>

      <main id="main">
        <section className="hero section-shell" id="home">
          <div className="hero-copy">
            <motion.p className="availability" initial={{ opacity: 0 }} animate={{ opacity: 1 }}><span className="status-dot" /> Open to entry-level software opportunities</motion.p>
            <motion.h1 initial={{ opacity: 0, y: reduceMotion ? 0 : 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
              Hi, I'm <span className="gradient-text">Mopuri Yaswanth.</span><br />I build software that <span className="outline-text">solves problems.</span>
            </motion.h1>
            <p className="hero-description">{profile.summary}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowRight size={17} /></a>
              <a className="button button-secondary" href={profile.resumePath} download><Download size={17} /> Download resume</a>
            </div>
            <div className="social-links">
              <a href={profile.github} target="_blank" rel="noreferrer"><Github size={18} /> GitHub <ArrowUpRight size={13} /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn <ArrowUpRight size={13} /></a>
              <a href={`mailto:${profile.email}`}><Mail size={18} /> Email</a>
              <a href={`tel:${profile.phone}`}><Phone size={17} /> {profile.phone}</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <Suspense fallback={<div className="scene-fallback"><Code2 size={58} /></div>}><Scene /></Suspense>
            <div className="profile-photo-frame"><img className="profile-photo" src={profile.photoPath} alt="Mopuri Yaswanth professional profile photo" /><span className="photo-caption">JAVA DEVELOPER</span></div>
            <div className="floating-label label-top"><Code2 size={16} /> Java · Spring Boot</div>
            <div className="floating-label label-bottom"><span className="status-dot" /> Building and learning</div>
            <div className="hero-caption">JAVA DEVELOPER <span> / </span> SOFTWARE ENGINEER</div>
          </div>
          <a className="scroll-cue" href="#about"><ArrowDown size={15} /> Scroll to explore</a>
        </section>

        <section className="section-shell section-block" id="about">
          <SectionHeading eyebrow="01 / ABOUT" title="Engineer by mindset." copy="A quick introduction to what I bring to a team." />
          <div className="about-grid">
            <motion.div className="about-panel" whileInView={{ opacity: [0, 1], y: [18, 0] }} viewport={{ once: true }}>
              <p className="about-lead">I enjoy turning requirements into <span className="gradient-text">working applications</span> — from backend APIs and relational data to usable interfaces.</p>
              <p className="muted">My experience includes a six-month Java full-stack internship and projects involving ordering workflows, vehicle service management, and smart-grid attack detection. I value clear code, steady learning, and practical problem solving.</p>
              <div className="location-line">⌁ {profile.location}</div>
            </motion.div>
            <div className="stats-grid">
              <div className="stat-card"><BriefcaseBusiness /><strong>6 months</strong><span>Internship</span></div>
              <div className="stat-card"><Trophy /><strong>2nd place</strong><span>GDG Innohacks 2K25</span></div>
              <div className="stat-card"><GraduationCap /><strong>8.41 / 10</strong><span>B.Tech CGPA</span></div>
              <div className="stat-card"><Code2 /><strong>4 projects</strong><span>Featured work</span></div>
            </div>
          </div>
        </section>

        <section className="section-shell section-block" id="projects">
          <SectionHeading eyebrow="02 / SELECTED WORK" title="Projects with a purpose." copy="Real projects built around practical problems—from booking workflows and food ordering to job discovery and smart-grid security." />
          <div className="projects-grid">{projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}</div>
        </section>

        <section className="section-shell section-block" id="skills">
          <SectionHeading eyebrow="03 / TOOLKIT" title="Tools I work with." copy="Grouped by how I use them across application development." />
          <div className="skills-grid">{skills.map((group, index) => <motion.div className="skill-card" key={group.group} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}><h3>{group.group}</h3><div className="tag-list">{group.items.map(item => <span className="tag skill-tag" key={item}>{item}</span>)}</div></motion.div>)}</div>
          <div className="certifications"><h3>Certifications</h3>{certifications.map(cert => <p key={cert}><span className="cert-check">✓</span>{cert}</p>)}</div>
        </section>

        <section className="section-shell section-block" id="experience">
          <SectionHeading eyebrow="04 / JOURNEY" title="Learning by building." copy="Internship experience, academic foundations, and a hackathon achievement that reflects how I work with a team." />
          <div className="timeline">
            {experience.map(item => <article className="timeline-item" key={item.organization}><div className="timeline-marker" /><div className="timeline-content"><span className="timeline-date">{item.period}</span><h3>{item.role}</h3><p className="accent-text">{item.organization}</p><ul>{item.bullets.map(b => <li key={b}>{b}</li>)}</ul><div className="tag-list experience-tags">{item.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div></div></article>)}
            <article className="timeline-item"><div className="timeline-marker" /><div className="timeline-content"><span className="timeline-date">{education.period}</span><h3>{education.degree}</h3><p className="accent-text">{education.institution}</p><p className="muted">{education.score}</p></div></article>
            {achievements.map(item => <article className="timeline-item" key={item.title}><div className="timeline-marker" /><div className="timeline-content"><span className="timeline-date">{item.date}</span><h3>{item.title}</h3><p className="muted">{item.description}</p></div></article>)}
          </div>
        </section>

        <section className="section-shell section-block contact-section" id="contact">
          <div className="contact-intro"><SectionHeading eyebrow="05 / CONTACT" title="Let's build something useful." copy="Have a suitable entry-level opportunity or want to discuss a project? Send me a message." /><a className="email-big" href={`mailto:${profile.email}`}>{profile.email} <ArrowUpRight size={19} /></a><a className="contact-phone" href={`tel:${profile.phone}`}><Phone size={16} /> {profile.phone}</a><a className="contact-linkedin" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /> Connect on LinkedIn <ArrowUpRight size={14} /></a><p className="muted">I’m open to entry-level Java development opportunities, collaborative projects, and conversations about building reliable software.</p></div>
          <ContactForm />
        </section>
      </main>
      <footer className="site-footer"><a className="brand" href="#home"><span className="brand-mark">Y</span><span>Mopuri Yaswanth<span className="brand-dot">.</span></span></a><p>Designed and built with React, motion, and curiosity.</p><span>© {new Date().getFullYear()} {profile.name} · Built with React</span></footer>
    </div>
  );
}

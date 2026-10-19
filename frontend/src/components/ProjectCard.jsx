import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Activity, Utensils, Wrench, BriefcaseBusiness } from 'lucide-react';

const iconMap = { wrench: Wrench, utensils: Utensils, activity: Activity, briefcase: BriefcaseBusiness };

export default function ProjectCard({ project, index }) {
  const Icon = iconMap[project.icon] || Activity;
  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -7 }}
    >
      <div className="project-cover"><img src={project.image} alt={project.imageAlt} loading="lazy" /></div>
      <div className="project-top">
        <div className="project-icon"><Icon size={23} aria-hidden="true" /></div>
        <span className="project-number">0{index + 1}</span>
      </div>
      <p className="eyebrow">{project.type}</p>
      <h3>{project.title}</h3>
      <p className="muted">{project.description}</p>
      <ul className="detail-list">{project.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
      <div className="tag-list">{project.stack.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
      <div className="project-links">
        {project.repo ? <a href={project.repo} target="_blank" rel="noreferrer"><Github size={16} /> Repository <ArrowUpRight size={15} /></a> : <span className="link-placeholder">Repository link coming soon</span>}
        {project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={15} /></a>}
      </div>
    </motion.article>
  );
}

import { useState } from 'react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { getProjects } from '../utils/siteData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Projects.css';

const Projects = () => {
  const projects = getProjects();
  const [activeCategory, setActiveCategory] = useState('all');

  // Extract unique categories from projects
  const categories = [
    { id: 'all', name: 'ALL', icon: '★' },
    ...Array.from(new Set(projects.map(p => p.category))).map(cat => ({
      id: cat,
      name: cat.toUpperCase(),
      icon: '◆'
    }))
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="projects-page">
      <div className="container">
        {/* Header */}
        <section className="projects-header">
          <h1 className="page-title glitch" data-text="MY PROJECTS">
            MY PROJECTS
          </h1>
          <p className="page-subtitle">
            Blockchain • DLT • Web3 • Smart Contracts
          </p>
        </section>

        {/* Filter */}
        <section className="projects-filter">
          <div className="filter-buttons">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`filter-btn ${activeCategory === category.id ? 'filter-btn--active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                <span className="filter-btn__icon">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </section>

        {/* Projects Grid */}
        <section className="projects-list">
          <div className="projects-count">
            <span className="text-primary">
              {filteredProjects.length}
            </span>
            {' '}PROJECT{filteredProjects.length !== 1 ? 'S' : ''} FOUND
          </div>
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                title={project.title}
                className={`project-item ${project.featured ? 'project-item--featured' : ''}`}
              >
                <div className="project-emoji">{project.image}</div>
                {project.featured && (
                  <div className="project-badge">
                    <span className="blink">★</span> FEATURED
                  </div>
                )}
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                </div>
                <div className="project-actions">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button variant="primary" size="small">
                        VIEW ON GITHUB
                      </Button>
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="small">
                        LIVE DEMO →
                      </Button>
                    </a>
                  )}
                </div>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="no-projects">
              <Card className="no-projects-card">
                <div className="no-projects-content">
                  <div className="no-projects-icon">
                    <FontAwesomeIcon icon={faSearch} />
                  </div>
                  <h3 className="text-primary">NO PROJECTS FOUND</h3>
                  <p>Try selecting a different category.</p>
                  <Button variant="secondary" onClick={() => setActiveCategory('all')}>
                    SHOW ALL
                  </Button>
                </div>
              </Card>
            </div>
          )}
        </section>

        {/* CTA */}
        <section className="projects-cta">
          <Card className="cta-card retro-card--glow">
            <div className="cta-content">
              <h2 className="cta-title text-primary">INTERESTED IN COLLABORATION?</h2>
              <p className="cta-description">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your visions.
              </p>
              <Button variant="primary" size="large">
                LET'S TALK
              </Button>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Projects;

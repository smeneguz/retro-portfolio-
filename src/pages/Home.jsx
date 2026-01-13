import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import PixelCharacter from '../components/game/PixelCharacter';
import { getProjects, getSkills } from '../utils/siteData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChain, faCode, faBook } from '@fortawesome/free-solid-svg-icons';
import './Home.css';

const Home = () => {
  const projects = getProjects();
  const skills = getSkills();
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero__content">
            <div className="hero__text">
              <div className="hero__greeting">
                <span className="hero__greeting-text">HELLO, I'M</span>
              </div>
              <h1 className="hero__title glitch" data-text="SILVIO MENEGUZZO">
                SILVIO MENEGUZZO
              </h1>
              <div className="hero__subtitle">
                <span className="typing-effect">PhD in Blockchain & DLT</span>
                <span className="cursor blink">_</span>
              </div>
              <p className="hero__description">
                Researching and building the future of decentralized systems.
                Specialized in blockchain technology, distributed ledger systems,
                and smart contract security.
              </p>
              <div className="hero__cta">
                <Link to="/projects">
                  <Button variant="primary" size="large">
                    VIEW PROJECTS
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="secondary" size="large">
                    GET IN TOUCH
                  </Button>
                </Link>
              </div>
              <div className="hero__stats">
                <div className="stat">
                  <div className="stat__value text-primary">PhD</div>
                  <div className="stat__label">Blockchain</div>
                </div>
                <div className="stat">
                  <div className="stat__value text-secondary">10+</div>
                  <div className="stat__label">Projects</div>
                </div>
                <div className="stat">
                  <div className="stat__value text-accent">∞</div>
                  <div className="stat__label">Ideas</div>
                </div>
              </div>
            </div>
            <div className="hero__character">
              <PixelCharacter animate={true} />
              <div className="hero__pixel-border"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="featured-projects">
        <div className="container">
          <h2 className="section-title">
            <span className="section-title__icon">★</span>
            FEATURED PROJECTS
            <span className="section-title__icon">★</span>
          </h2>
          <div className="projects-grid">
            {featuredProjects.map((project) => (
              <Card key={project.id} title={project.title} className="project-card">
                <div className="project-card__emoji">{project.image}</div>
                <p className="project-card__description">{project.description}</p>
                <div className="project-card__tech">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-card__links">
                  <Button variant="ghost" size="small">VIEW</Button>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: 'var(--spacing-xl)' }}>
            <Link to="/projects">
              <Button variant="primary">SEE ALL PROJECTS →</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <div className="container">
          <h2 className="section-title">
            <span className="section-title__icon">◆</span>
            SKILLS & EXPERTISE
            <span className="section-title__icon">◆</span>
          </h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3 className="skill-category__title text-primary">BLOCKCHAIN</h3>
              <div className="skill-list">
                {skills.blockchain.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <FontAwesomeIcon icon={faChain} /> {skill}
                  </div>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3 className="skill-category__title text-secondary">PROGRAMMING</h3>
              <div className="skill-list">
                {skills.programming.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <FontAwesomeIcon icon={faCode} /> {skill}
                  </div>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3 className="skill-category__title text-accent">RESEARCH</h3>
              <div className="skill-list">
                {skills.research.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <FontAwesomeIcon icon={faBook} /> {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <Card className="cta-card retro-card--glow">
            <div className="cta-content">
              <h2 className="cta-title">READY TO START A PROJECT?</h2>
              <p className="cta-text">
                Let's collaborate on building innovative blockchain solutions.
                Whether it's research, development, or consultation - I'm here to help!
              </p>
              <div className="cta-buttons">
                <Link to="/contact">
                  <Button variant="primary" size="large">
                    CONTACT ME
                  </Button>
                </Link>
                <Link to="/blog">
                  <Button variant="secondary" size="large">
                    READ BLOG
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;

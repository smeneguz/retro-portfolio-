import { getPersonalInfo, getEducation, getExperience, getResearchInterests, getSkills } from '../utils/siteData';
import { getPublications, getTalks } from '../utils/siteData';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faFlask, faBook, faDownload } from '@fortawesome/free-solid-svg-icons';
import './About.css';

const About = () => {
  const personal = getPersonalInfo();
  const education = getEducation();
  const experience = getExperience();
  const researchInterests = getResearchInterests();
  const skills = getSkills();
  const publications = getPublications();
  const talks = getTalks();

  return (
    <div className="about">
      <div className="container">
        {/* Header */}
        <section className="about-header">
          <h1 className="page-title glitch" data-text="ABOUT ME">
            ABOUT ME
          </h1>
          <p className="page-subtitle">
            RESEARCHER • DEVELOPER • BLOCKCHAIN ENTHUSIAST
          </p>
        </section>

        {/* Bio Section */}
        <section className="bio-section">
          <Card title="WHO AM I?" glitch={true}>
            <div className="bio-content">
              <div className="bio-avatar">
                <div className="pixel-avatar">
                  <div className="pixel-avatar__frame">
                    <FontAwesomeIcon icon={faGraduationCap} />
                  </div>
                </div>
              </div>
              <div className="bio-text">
                <p>
                  {personal.bio}
                </p>
                <p>
                  I have practical experience in full-stack and blockchain development, project leadership in European initiatives, and community organisation.
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* Education Section */}
        <section className="education-section">
          <h2 className="section-title">
            <FontAwesomeIcon icon={faGraduationCap} className="section-title__icon" />
            EDUCATION
            <FontAwesomeIcon icon={faGraduationCap} className="section-title__icon" />
          </h2>
          <div className="timeline">
            {education.map((edu) => (
              <div key={edu.id} className="timeline-item">
                <div className="timeline-marker"></div>
                <Card className="timeline-card">
                  <h3 className="text-primary">{edu.degree}</h3>
                  <p className="timeline-date text-secondary">{edu.period}</p>
                  <p className="timeline-institution">{edu.institution}</p>
                  <p className="timeline-location">{edu.location}</p>
                  <p className="timeline-description">{edu.description}</p>
                  {edu.url && (
                    <a href={edu.url} target="_blank" rel="noopener noreferrer" className="timeline-link">
                      View Program →
                    </a>
                  )}
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* Research Interests */}
        <section className="research-section">
          <h2 className="section-title">
            <FontAwesomeIcon icon={faFlask} className="section-title__icon" />
            RESEARCH INTERESTS
            <FontAwesomeIcon icon={faFlask} className="section-title__icon" />
          </h2>
          <div className="research-grid">
            {researchInterests.map((interest, index) => (
              <Card key={interest.id} className="research-card">
                <h3 className={`text-${['primary', 'secondary', 'accent', 'success', 'primary'][index % 5]}`}>
                  {interest.title}
                </h3>
                <p>{interest.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Publications */}
        <section className="publications-section">
          <h2 className="section-title">
            <FontAwesomeIcon icon={faBook} className="section-title__icon" />
            PUBLICATIONS
            <FontAwesomeIcon icon={faBook} className="section-title__icon" />
          </h2>
          {publications.slice(0, 5).map((pub) => (
            <Card key={pub.id} className="publication-card">
              <div className="publication-item">
                <h3 className="publication-title">
                  {pub.title}
                </h3>
                <p className="publication-venue text-secondary">
                  {pub.venue}, {pub.year}
                </p>
                <p className="publication-authors">
                  {pub.authors}
                </p>
                {pub.doi && (
                  <a href={pub.doi} target="_blank" rel="noopener noreferrer" className="timeline-link">
                    View Publication →
                  </a>
                )}
              </div>
            </Card>
          ))}
        </section>

        {/* Download CV */}
        <section className="cv-section">
          <Card className="cv-card retro-card--glow">
            <div className="cv-content">
              <h2 className="cv-title text-primary">DOWNLOAD MY CV</h2>
              <p className="cv-description">
                Want to know more about my academic and professional background?
              </p>
              <a href={personal.cvPdf} download>
                <Button variant="primary" size="large">
                  <FontAwesomeIcon icon={faDownload} /> DOWNLOAD CV (PDF)
                </Button>
              </a>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default About;

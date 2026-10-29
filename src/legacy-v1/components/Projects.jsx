import { projects } from '../data.js';

export default function Projects() {
  return (
    <section id="projects" className="project-experience-container">
      <h2>
        <small>Recent</small>
        Projects
      </h2>
      <p className="hover-instruction">(Hover over photos to see project details)</p>
      <div className="bento-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <img src={project.image} alt={project.title} />
            <div className="project-overlay">
              <h3>{project.title}</h3>
              <ul>
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

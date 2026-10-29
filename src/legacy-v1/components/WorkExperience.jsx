import { jobs } from '../data.js';

export default function WorkExperience() {
  return (
    <section id="work-experience" className="work-experience container">
      <h2>
        <small>Recent</small>
        Work Experience
      </h2>
      {jobs.map((job) => (
        <div className="work-card" key={job.title}>
          <img src={job.image} alt={job.imageAlt} />
          <div className="work-content">
            <h3>{job.title}</h3>
            <p className="work-meta">
              {job.organization} · {job.location}
              <br />
              <span>{job.dates}</span>
            </p>
            <ul>
              {job.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
}

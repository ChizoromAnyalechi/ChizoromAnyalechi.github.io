import { Fragment } from 'react';
import { skills } from '../data.js';

export default function Skills() {
  return (
    <section id="skills" className="skills container">
      <h2>
        <small>About me</small>
        Skills
      </h2>
      <div className="holder-blue">
        <div className="left-column">
          {skills.map((group) => (
            <Fragment key={group.category}>
              <h3>{group.category}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Fragment>
          ))}
        </div>
        <div className="right-column">
          <h3>A bit about me</h3>
          <p>
            Hi, I'm Chizorom Anyalechi, a Computer Engineering student with a strong interest in building and
            understanding intelligent systems through practical engineering and software development. I enjoy analyzing
            complex problems, thinking through how systems work, and turning ideas into functional, real-world solutions
            using code and technology.
          </p>
          <p>
            I am deeply passionate about robotics and artificial intelligence, especially how they can be applied to
            automate tasks, enhance efficiency, and improve everyday life. I'm driven by the idea of using smart systems
            and adaptive technologies to solve real human problems and make technology more accessible, reliable, and
            impactful.
          </p>
        </div>
      </div>
    </section>
  );
}

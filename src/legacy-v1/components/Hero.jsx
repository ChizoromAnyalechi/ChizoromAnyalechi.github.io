import { links } from '../data.js';

export default function Hero() {
  return (
    <section className="hero container">
      <div className="hero-blue">
        <div>
          <h1>
            <small> Hi I'm</small>
            Chizorom Anyalechi-Bachelor of Computer Engineering at University of Guelph
          </h1>
          <p>
            I am a Computer Engineering student with a strong passion for problem-solving and building innovative
            solutions in software technologies and robotics. I enjoy tackling complex engineering challenges and
            applying my experience to develop efficient, reliable, and scalable systems. In my free time, I focus on
            designing and creating technologies that make everyday tasks easier and provide meaningful value for others.
            <span>My main interests are robotics, software and computer systems.</span>
          </p>
          <div className="call-to-action">
            <a href={links.resume} className="button black" target="_blank" rel="noopener">
              View Resume
            </a>
            <a href={links.email} className="button white">
              Contact Me
            </a>
          </div>
          <div className="social-links">
            <a href={links.github} target="_blank" rel="noopener">
              <img src="/imgs/github.png" alt="GitHub" width="48" />
            </a>
            <a href={links.linkedin} target="_blank" rel="noopener">
              <img src="/imgs/linkedin.png" alt="LinkedIn" width="48" />
            </a>
          </div>
        </div>
      </div>
      <div className="hero-yellow">
        <img src="/imgs/ChizoromAnyalechi.jpg" alt="Chizo" width="100%" />
      </div>
    </section>
  );
}

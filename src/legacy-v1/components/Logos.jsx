import { logos } from '../data.js';

export default function Logos() {
  return (
    <section className="logos container">
      <div className="marquee">
        <div className="track">
          {logos.map((logo) => (
            <img key={logo.alt} src={logo.src} alt={logo.alt} width="128" />
          ))}
        </div>
      </div>
    </section>
  );
}

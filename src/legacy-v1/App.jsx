import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
// import Logos from './components/Logos.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import WorkExperience from './components/WorkExperience.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {/* Logo marquee is turned off, same as before. Uncomment to show it. */}
        {/* <Logos /> */}
        <Skills />
        <Projects />
        <WorkExperience />
      </main>
      <Footer />
    </>
  );
}

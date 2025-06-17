import AnimatedBackground from './components/AnimatedBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Internships from './components/Internships';
import Leadership from './components/Leadership';
import Projects from './components/Projects';
import Interests from './components/Interests';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-x-hidden">
      <AnimatedBackground />
      
      <div className="relative z-10">
        <Header />
        
        <main>
          <Hero />
          <About />
          <Education />
          <Skills />
          <Internships />
          <Leadership />
          <Projects />
          <Interests />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;
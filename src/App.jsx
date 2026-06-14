import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import About from './sections/About';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text">
        <Navbar />
        <main>
          <Hero />
          <Projects />
          <About />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

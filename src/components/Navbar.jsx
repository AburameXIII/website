import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section
      const sections = navLinks.map((link) => link.href.slice(1));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'glass bg-light-surface/80 dark:bg-dark-bg/80 shadow-lg shadow-black/5 dark:shadow-black/20'
          : 'bg-transparent'
        }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-2 text-lg font-bold tracking-tight text-light-text dark:text-dark-text"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-500 text-sm font-black text-white transition-transform duration-300 group-hover:scale-110">
              D
            </span>
            <span className="hidden sm:inline">Daniel Brandao</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 ${activeSection === link.href.slice(1)
                    ? 'text-accent-500'
                    : 'text-light-text-secondary hover:text-light-text dark:text-dark-text-secondary dark:hover:text-dark-text'
                  }`}
              >
                {link.label}
                {activeSection === link.href.slice(1) && (
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-accent-500" />
                )}
              </a>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="ml-4 flex h-9 w-9 items-center justify-center rounded-lg border border-light-border text-light-text-secondary transition-all duration-200 hover:border-accent-500 hover:text-accent-500 dark:border-dark-border dark:text-dark-text-secondary dark:hover:border-accent-400 dark:hover:text-accent-400"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-light-border text-light-text-secondary dark:border-dark-border dark:text-dark-text-secondary"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-light-border text-light-text-secondary dark:border-dark-border dark:text-dark-text-secondary"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${isOpen ? 'max-h-64 pb-4' : 'max-h-0'
            }`}
        >
          <div className="flex flex-col gap-1 border-t border-light-border pt-4 dark:border-dark-border">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${activeSection === link.href.slice(1)
                    ? 'bg-accent-500/10 text-accent-500'
                    : 'text-light-text-secondary hover:bg-light-surface-hover dark:text-dark-text-secondary dark:hover:bg-dark-surface-hover'
                  }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

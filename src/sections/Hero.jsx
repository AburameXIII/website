import { ArrowDown, Mail } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '../components/Icons';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Hero() {
  const sectionRef = useScrollReveal();

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4"
    >
      {/* Animated Gradient Background */}
      <div className="animate-gradient absolute inset-0 bg-gradient-to-br from-accent-600/20 via-purple-600/10 to-cyan-600/10 dark:from-accent-600/10 dark:via-purple-600/5 dark:to-cyan-600/5" />

      {/* Subtle Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Decorative Orbs */}
      <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-accent-500/10 blur-[128px]" />
      <div className="absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-purple-500/10 blur-[128px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        {/* Status Badge */}
        <div className="reveal mb-8 inline-flex items-center gap-2 rounded-full border border-accent-500/30 bg-accent-500/10 px-4 py-1.5">
          <span className="text-sm">🎰</span>
          <span className="text-xs font-medium text-accent-500 dark:text-accent-400">
            Crafting immersive gaming experiences
          </span>
        </div>

        {/* Heading */}
        <h1 className="reveal reveal-delay-1 mb-6 text-4xl font-bold leading-tight tracking-tight text-light-text sm:text-5xl md:text-6xl lg:text-7xl dark:text-dark-text">
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-accent-500 to-purple-500 bg-clip-text text-transparent">
            Daniel Brandao
          </span>
        </h1>

        {/* Subtitle */}
        <p className="reveal reveal-delay-2 mb-4 text-lg font-medium text-accent-500 sm:text-xl dark:text-accent-400">
          Lead Game Developer
        </p>

        {/* Bio */}
        <p className="reveal reveal-delay-3 mx-auto mb-10 max-w-xl text-base leading-relaxed text-light-text-secondary sm:text-lg dark:text-dark-text-secondary">
          I design and develop engaging slot games and interactive gaming
          experiences. From math models to polished front-end animations, I bring
          game concepts to life.
        </p>

        {/* CTA Buttons */}
        <div className="reveal reveal-delay-4 mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#projects"
            onClick={handleScrollToProjects}
            className="group inline-flex items-center gap-2 rounded-xl bg-accent-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-500/25 transition-all duration-300 hover:bg-accent-600 hover:shadow-xl hover:shadow-accent-500/30"
          >
            View My Work
            <ArrowDown
              size={16}
              className="transition-transform duration-300 group-hover:translate-y-0.5"
            />
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 rounded-xl border border-light-border px-6 py-3 text-sm font-semibold text-light-text transition-all duration-300 hover:border-accent-500 hover:text-accent-500 dark:border-dark-border dark:text-dark-text dark:hover:border-accent-400 dark:hover:text-accent-400"
          >
            Get In Touch
          </a>
        </div>

        {/* Social Links */}
        <div className="reveal reveal-delay-4 flex items-center justify-center gap-3">
          <a
            href="https://github.com/AburameXIII"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-light-border text-light-text-secondary transition-all duration-200 hover:border-accent-500 hover:text-accent-500 dark:border-dark-border dark:text-dark-text-secondary dark:hover:border-accent-400 dark:hover:text-accent-400"
            aria-label="GitHub"
          >
            <GitHubIcon size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-brandao-9309b9153"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-light-border text-light-text-secondary transition-all duration-200 hover:border-accent-500 hover:text-accent-500 dark:border-dark-border dark:text-dark-text-secondary dark:hover:border-accent-400 dark:hover:text-accent-400"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={18} />
          </a>
          <a
            href="mailto:daniffb_29@hotmail.com"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-light-border text-light-text-secondary transition-all duration-200 hover:border-accent-500 hover:text-accent-500 dark:border-dark-border dark:text-dark-text-secondary dark:hover:border-accent-400 dark:hover:text-accent-400"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-medium tracking-widest text-light-text-secondary/50 uppercase dark:text-dark-text-secondary/50">
            Scroll
          </span>
          <div className="h-8 w-5 rounded-full border-2 border-light-text-secondary/30 dark:border-dark-text-secondary/30">
            <div className="mx-auto mt-1 h-2 w-1 animate-bounce rounded-full bg-accent-500" />
          </div>
        </div>
      </div>
    </section>
  );
}

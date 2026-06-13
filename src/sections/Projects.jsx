import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Projects() {
  const sectionRef = useScrollReveal();

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative px-4 py-24 sm:py-32"
    >
      {/* Section Header */}
      <div className="mx-auto mb-16 max-w-6xl text-center">
        <span className="reveal mb-4 inline-block rounded-full bg-accent-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-accent-500 uppercase dark:text-accent-400">
          Portfolio
        </span>
        <h2 className="reveal reveal-delay-1 mb-4 text-3xl font-bold tracking-tight text-light-text sm:text-4xl dark:text-dark-text">
          Featured Projects
        </h2>
        <p className="reveal reveal-delay-2 mx-auto max-w-xl text-base text-light-text-secondary dark:text-dark-text-secondary">
          From high-performance slot games to personal passion projects — here's a
          selection of work I'm proud of.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

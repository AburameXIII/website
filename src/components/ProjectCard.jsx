import { ExternalLink, Layers } from 'lucide-react';
import { GitHubIcon } from './Icons';

export default function ProjectCard({ project, index }) {
  // Generate a consistent gradient for each card based on index
  const gradients = [
    'from-indigo-500/20 via-purple-500/20 to-pink-500/20',
    'from-cyan-500/20 via-blue-500/20 to-indigo-500/20',
    'from-emerald-500/20 via-teal-500/20 to-cyan-500/20',
    'from-orange-500/20 via-rose-500/20 to-pink-500/20',
  ];

  const iconColors = [
    'text-indigo-400',
    'text-cyan-400',
    'text-emerald-400',
    'text-orange-400',
  ];

  return (
    <div className="reveal group relative overflow-hidden rounded-2xl border border-light-border bg-light-surface transition-all duration-500 hover:-translate-y-1 hover:border-accent-500/50 hover:shadow-xl hover:shadow-accent-500/5 dark:border-dark-border dark:bg-dark-surface dark:hover:border-accent-400/50 dark:hover:shadow-accent-500/10">
      {/* Card Image / Gradient Placeholder */}
      <div
        className={`relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br ${gradients[index % gradients.length]}`}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <>
            {/* Decorative pattern */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute left-4 top-4 h-20 w-20 rounded-full border border-white/10" />
              <div className="absolute bottom-4 right-4 h-32 w-32 rounded-full border border-white/10" />
              <div className="absolute right-12 top-12 h-12 w-12 rounded-full border border-white/10" />
            </div>

            {/* Project icon */}
            <div
              className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm ${iconColors[index % iconColors.length]}`}
            >
              <Layers size={28} />
            </div>
          </>
        )}

        {/* Hover overlay with links */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/60 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition-transform hover:scale-110 hover:bg-white/30"
              aria-label={`View ${project.title} source code`}
            >
              <GitHubIcon size={18} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition-transform hover:scale-110 hover:bg-white/30"
              aria-label={`View ${project.title} live demo`}
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6">
        <h3 className="mb-2 text-lg font-semibold text-light-text dark:text-dark-text">
          {project.title}
        </h3>
        <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-light-text-secondary dark:text-dark-text-secondary">
          {project.description}
        </p>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-accent-500/10 px-3 py-1 text-xs font-medium text-accent-500 dark:text-accent-400"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Links (always visible) */}
      <div className="flex items-center gap-4 border-t border-light-border px-6 py-3 dark:border-dark-border">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium text-light-text-secondary transition-colors hover:text-accent-500 dark:text-dark-text-secondary dark:hover:text-accent-400"
          >
            <GitHubIcon size={14} />
            Source Code
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium text-light-text-secondary transition-colors hover:text-accent-500 dark:text-dark-text-secondary dark:hover:text-accent-400"
          >
            <ExternalLink size={14} />
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

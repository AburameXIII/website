import {
  Briefcase,
  GraduationCap,
  Download,
  MapPin,
  Calendar,
} from 'lucide-react';
import { workExperience, education, skills } from '../data/experience';
import { useScrollReveal } from '../hooks/useScrollReveal';

const categoryLabels = {
  language: 'Languages',
  frontend: 'Frontend',
  backend: 'Backend',
  devops: 'DevOps',
  gamedevelopment: 'Game Development',
};

const categoryColors = {
  language: 'bg-purple-500/10 text-purple-500 dark:text-purple-400',
  frontend: 'bg-cyan-500/10 text-cyan-500 dark:text-cyan-400',
  backend: 'bg-emerald-500/10 text-emerald-500 dark:text-emerald-400',
  devops: 'bg-orange-500/10 text-orange-500 dark:text-orange-400',
  gamedevelopment: 'bg-red-500/10 text-red-500 dark:text-red-400',
};

function TimelineItem({ item, isExperience = true }) {
  return (
    <div className="reveal group relative pl-8">
      {/* Timeline dot */}
      <div className="absolute left-0 top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-accent-500 bg-light-surface transition-colors group-hover:bg-accent-500 dark:bg-dark-surface">
        <div className="h-1.5 w-1.5 rounded-full bg-accent-500 transition-colors group-hover:bg-white" />
      </div>

      {/* Timeline line */}
      <div className="absolute left-[9px] top-6 h-[calc(100%+1rem)] w-px bg-light-border dark:bg-dark-border" />

      {/* Content */}
      <div className="rounded-xl border border-light-border bg-light-surface p-5 transition-all duration-300 hover:border-accent-500/30 hover:shadow-lg hover:shadow-accent-500/5 dark:border-dark-border dark:bg-dark-surface dark:hover:border-accent-400/30">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <h3 className="font-semibold text-light-text dark:text-dark-text">
            {isExperience ? item.role : item.degree}
          </h3>
        </div>

        <div className="mb-3 flex flex-wrap items-center gap-3 text-sm text-light-text-secondary dark:text-dark-text-secondary">
          <span className="flex items-center gap-1">
            {isExperience ? <Briefcase size={13} /> : <GraduationCap size={13} />}
            {isExperience ? item.company : item.institution}
          </span>
          {item.location && (
            <span className="flex items-center gap-1">
              <MapPin size={13} />
              {item.location}
            </span>
          )}
          <span className="flex items-center gap-1">
            <Calendar size={13} />
            {item.period}
          </span>
        </div>

        <p className="mb-3 text-sm leading-relaxed text-light-text-secondary dark:text-dark-text-secondary">
          {item.description}
        </p>

        {/* Tech badges for work experience */}
        {isExperience && item.techStack && (
          <div className="flex flex-wrap gap-1.5">
            {item.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-accent-500/10 px-2 py-0.5 text-xs font-medium text-accent-500 dark:text-accent-400"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function About() {
  const sectionRef = useScrollReveal();

  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative bg-light-surface/50 px-4 py-24 sm:py-32 dark:bg-dark-surface/30"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="reveal mb-4 inline-block rounded-full bg-accent-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-accent-500 uppercase dark:text-accent-400">
            Background
          </span>
          <h2 className="reveal reveal-delay-1 mb-4 text-3xl font-bold tracking-tight text-light-text sm:text-4xl dark:text-dark-text">
            About Me
          </h2>
          <p className="reveal reveal-delay-2 mx-auto max-w-xl text-base text-light-text-secondary dark:text-dark-text-secondary">
            My professional journey, education, and the tools I work with every day.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-3">
          {/* Left Column: Timeline */}
          <div className="lg:col-span-2">
            {/* Work Experience */}
            <div className="mb-12">
              <h3 className="reveal mb-6 flex items-center gap-2 text-lg font-semibold text-light-text dark:text-dark-text">
                <Briefcase size={18} className="text-accent-500" />
                Experience
              </h3>
              <div className="relative flex flex-col gap-6">
                {workExperience.map((item) => (
                  <TimelineItem key={item.id} item={item} isExperience />
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="reveal mb-6 flex items-center gap-2 text-lg font-semibold text-light-text dark:text-dark-text">
                <GraduationCap size={18} className="text-accent-500" />
                Education
              </h3>
              <div className="relative flex flex-col gap-6">
                {education.map((item) => (
                  <TimelineItem
                    key={item.id}
                    item={item}
                    isExperience={false}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Skills + Resume Download */}
          <div>
            {/* Skills */}
            <div className="reveal mb-8">
              <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold text-light-text dark:text-dark-text">
                Skills & Tools
              </h3>
              <div className="space-y-5">
                {Object.entries(groupedSkills).map(([category, categorySkills]) => (
                  <div key={category}>
                    <p className="mb-2 text-xs font-semibold tracking-wider text-light-text-secondary uppercase dark:text-dark-text-secondary">
                      {categoryLabels[category] || category}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {categorySkills.map((skill) => (
                        <span
                          key={skill.name}
                          className={`rounded-lg px-3 py-1.5 text-xs font-medium ${categoryColors[skill.category]}`}
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Resume Download */}
            <div className="reveal">
              <a
                href={`${import.meta.env.BASE_URL}CV.pdf`}
                download
                className="group flex w-full items-center justify-center gap-2 rounded-xl border-2 border-dashed border-light-border px-6 py-4 text-sm font-semibold text-light-text-secondary transition-all duration-300 hover:border-accent-500 hover:text-accent-500 dark:border-dark-border dark:text-dark-text-secondary dark:hover:border-accent-400 dark:hover:text-accent-400"
              >
                <Download
                  size={18}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5"
                />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

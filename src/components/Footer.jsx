import { GitHubIcon, LinkedInIcon } from './Icons';

const socialLinks = [
  { icon: GitHubIcon, href: 'https://github.com/AburameXIII', label: 'GitHub' },
  { icon: LinkedInIcon, href: 'https://www.linkedin.com/in/daniel-brandao-9309b9153', label: 'LinkedIn' },
];


export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-light-border bg-light-surface dark:border-dark-border dark:bg-dark-surface">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-accent-500 text-xs font-black text-white">
              D
            </span>
            <span className="text-sm font-semibold text-light-text dark:text-dark-text">
              Daniel
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-light-border text-light-text-secondary transition-all duration-200 hover:border-accent-500 hover:text-accent-500 dark:border-dark-border dark:text-dark-text-secondary dark:hover:border-accent-400 dark:hover:text-accent-400"
                aria-label={link.label}
              >
                <link.icon size={16} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="flex items-center gap-1 text-xs text-light-text-secondary dark:text-dark-text-secondary">
            © {currentYear} Daniel
          </p>
        </div>
      </div>
    </footer>
  );
}

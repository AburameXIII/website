import { useState } from 'react';
import { Send, Mail, MapPin, Loader2, CheckCircle } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '../components/Icons';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Contact() {
  const sectionRef = useScrollReveal();
  const [formState, setFormState] = useState('idle'); // idle | sending | success | error
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState('sending');

    try {
      const response = await fetch('https://formspree.io/f/mdavyonw', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormState('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setFormState('idle'), 4000);
      } else {
        setFormState('error');
        setTimeout(() => setFormState('idle'), 4000);
      }
    } catch {
      setFormState('error');
      setTimeout(() => setFormState('idle'), 4000);
    }
  };

  const inputClasses =
    'w-full rounded-xl border border-light-border bg-light-bg px-4 py-3 text-sm text-light-text placeholder:text-light-text-secondary/50 transition-all duration-200 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20 dark:border-dark-border dark:bg-dark-bg dark:text-dark-text dark:placeholder:text-dark-text-secondary/50 dark:focus:border-accent-400 dark:focus:ring-accent-400/20';

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative px-4 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="reveal mb-4 inline-block rounded-full bg-accent-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-accent-500 uppercase dark:text-accent-400">
            Contact
          </span>
          <h2 className="reveal reveal-delay-1 mb-4 text-3xl font-bold tracking-tight text-light-text sm:text-4xl dark:text-dark-text">
            Let's Work Together
          </h2>
          <p className="reveal reveal-delay-2 mx-auto max-w-xl text-base text-light-text-secondary dark:text-dark-text-secondary">
            Have a project in mind or want to discuss an opportunity? I'd love to
            hear from you.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-12 lg:grid-cols-5">
          {/* Contact Form */}
          <div className="reveal lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-xs font-semibold tracking-wider text-light-text-secondary uppercase dark:text-dark-text-secondary"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-xs font-semibold tracking-wider text-light-text-secondary uppercase dark:text-dark-text-secondary"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@email.com"
                    required
                    className={inputClasses}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-xs font-semibold tracking-wider text-light-text-secondary uppercase dark:text-dark-text-secondary"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  required
                  rows={5}
                  className={`${inputClasses} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={formState === 'sending'}
                className="group inline-flex items-center gap-2 rounded-xl bg-accent-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-500/25 transition-all duration-300 hover:bg-accent-600 hover:shadow-xl hover:shadow-accent-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formState === 'sending' ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending...
                  </>
                ) : formState === 'success' ? (
                  <>
                    <CheckCircle size={16} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                    Send Message
                  </>
                )}
              </button>

              {formState === 'error' && (
                <p className="text-sm text-red-400">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="reveal reveal-delay-2 lg:col-span-2">
            <div className="space-y-6">
              <div>
                <h3 className="mb-4 text-sm font-semibold tracking-wider text-light-text-secondary uppercase dark:text-dark-text-secondary">
                  Get in touch
                </h3>
                <div className="space-y-3">
                  <a
                    href="mailto:daniffb_29@hotmail.com"
                    className="flex items-center gap-3 rounded-xl border border-light-border p-4 text-sm text-light-text transition-all duration-200 hover:border-accent-500/50 hover:bg-accent-500/5 dark:border-dark-border dark:text-dark-text dark:hover:border-accent-400/50"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-500/10">
                      <Mail size={18} className="text-accent-500 dark:text-accent-400" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-xs text-light-text-secondary dark:text-dark-text-secondary">
                        daniffb_29@hotmail.com
                      </p>
                    </div>
                  </a>

                  <div className="flex items-center gap-3 rounded-xl border border-light-border p-4 text-sm text-light-text dark:border-dark-border dark:text-dark-text">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-500/10">
                      <MapPin size={18} className="text-accent-500 dark:text-accent-400" />
                    </div>
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-xs text-light-text-secondary dark:text-dark-text-secondary">
                        London, United Kingdom
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-sm font-semibold tracking-wider text-light-text-secondary uppercase dark:text-dark-text-secondary">
                  Social Links
                </h3>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/AburameXIII"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-light-border text-light-text-secondary transition-all duration-200 hover:border-accent-500 hover:text-accent-500 dark:border-dark-border dark:text-dark-text-secondary dark:hover:border-accent-400 dark:hover:text-accent-400"
                    aria-label="GitHub"
                  >
                    <GitHubIcon size={18} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/daniel-brandao-9309b9153"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-light-border text-light-text-secondary transition-all duration-200 hover:border-accent-500 hover:text-accent-500 dark:border-dark-border dark:text-dark-text-secondary dark:hover:border-accent-400 dark:hover:text-accent-400"
                    aria-label="LinkedIn"
                  >
                    <LinkedInIcon size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


import React, { useState } from 'react';
import { Profile } from '../types';
import { Icons } from '../constants';

const ContactPage: React.FC = () => {
  const profile: Profile = {
    name: "Aathilingam",
    title: "Software Developer",
    tagline: "Hello. I'm Aathilingam",
    bio: "With 4+ years of building large-scale SaaS and high-performance APIs (Laravel, Lumen, and MSS), specialized in building optimized architecture, and complex third-party integrations.",
    email: "aathilingam1999@gmail.com",
    github: "https://github.com/aathik7",
    linkedin: "https://www.linkedin.com/in/aathilingam",
    resumeUrl: "#",
    avatarUrl: "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  };
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const subject = `Portfolio Contact - ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailtoLink = `mailto:aathilingam1999@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start max-w-6xl mx-auto py-16 md:py-24 px-4 animate-fade-in-up">
      {/* Left Column */}
      <div className="space-y-8">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-text-primary-light dark:text-text-primary-dark">
          Let's build something cool together<span className="text-primary">.</span> <Icons.rocket className="inline-block w-10 h-10 ml-2 text-primary" />
        </h1>
        <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision. Feel free to reach out.
        </p>
        <div>
          <h3 className="text-xl font-bold mb-4 text-text-primary-light dark:text-text-primary-dark">Other ways to connect</h3>
          <div className="space-y-3">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-3 group text-text-secondary-light dark:text-text-secondary-dark">
              <Icons.mail className="w-6 h-6 group-hover:text-primary transition-colors" />
              <span className="group-hover:text-primary transition-colors">{profile.email}</span>
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group text-text-secondary-light dark:text-text-secondary-dark">
              <Icons.github className="w-6 h-6 group-hover:text-primary transition-colors" />
              <span className="group-hover:text-primary transition-colors">GitHub</span>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group text-text-secondary-light dark:text-text-secondary-dark">
              <Icons.linkedin className="w-6 h-6 group-hover:text-primary transition-colors" />
              <span className="group-hover:text-primary transition-colors">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      {/* Right Column: Form */}
      <div className="bg-background-secondary-light dark:bg-background-secondary-dark p-8 rounded-lg shadow-lg border border-border-color-light dark:border-border-color-dark">
        <h2 className="text-2xl font-bold mb-6 text-text-primary-light dark:text-text-primary-dark">Send me a message</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1 text-text-secondary-light dark:text-text-secondary-dark">Your Name</label>
            <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-2 bg-background-primary-light dark:bg-background-primary-dark border border-transparent rounded-lg focus:ring-2 focus:ring-primary focus:outline-none text-text-primary-light dark:text-text-primary-dark" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1 text-text-secondary-light dark:text-text-secondary-dark">Your Email</label>
            <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-2 bg-background-primary-light dark:bg-background-primary-dark border border-transparent rounded-lg focus:ring-2 focus:ring-primary focus:outline-none text-text-primary-light dark:text-text-primary-dark" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1 text-text-secondary-light dark:text-text-secondary-dark">Your Message</label>
            <textarea name="message" id="message" required rows={5} value={formData.message} onChange={handleChange} className="w-full px-4 py-2 bg-background-primary-light dark:bg-background-primary-dark border border-transparent rounded-lg focus:ring-2 focus:ring-primary focus:outline-none text-text-primary-light dark:text-text-primary-dark"></textarea>
          </div>
          <button type="submit" className="w-full bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;

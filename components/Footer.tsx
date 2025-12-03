
import React from 'react';
import { Icons } from '../constants';
import { Profile } from '../types';

const Footer: React.FC = () => {
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

  return (
    <footer className="border-t border-solid border-border-color-light dark:border-border-color-dark mt-auto bg-background-secondary-light dark:bg-background-secondary-dark">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-4 sm:px-10 py-6 max-w-[1080px] mx-auto">
        <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors">
            <Icons.github className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors">
            <Icons.linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href={`mailto:${profile.email}`} className="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors">
            <Icons.mail className="h-6 w-6" />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
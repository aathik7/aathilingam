
import React, { useState, useEffect } from 'react';
import { Vlog } from '../types';
import VlogCard from '../components/VlogCard';

const VlogPage: React.FC = () => {
  const vlogs: Vlog[] = [
    {
      "id": 1,
      "title": "Building a React Component Library from Scratch",
      "description": "A step-by-step guide on how to create, test, and publish your own React component library using Storybook and Rollup.",
      "thumbnail": "https://picsum.photos/seed/vlog1/600/400",
      "videoUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "tags": ["React", "Storybook", "TypeScript", "NPM"],
      "date": "May 15, 2024"
    },
    {
      "id": 2,
      "title": "Mastering CSS Grid for Modern Web Layouts",
      "description": "An in-depth tutorial on CSS Grid, covering everything from the basics to advanced techniques for complex, responsive layouts.",
      "thumbnail": "https://picsum.photos/seed/vlog2/600/400",
      "videoUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "tags": ["CSS", "Frontend", "UI/UX", "Web Design"],
      "date": "April 22, 2024"
    },
    {
      "id": 3,
      "title": "Deep Dive into Node.js Event Loop",
      "description": "Unlock the power of asynchronous JavaScript by understanding the core concepts of the Node.js event loop and its phases.",
      "thumbnail": "https://picsum.photos/seed/vlog3/600/400",
      "videoUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "tags": ["Node.js", "JavaScript", "Backend", "Performance"],
      "date": "March 10, 2024"
    },
    {
      "id": 4,
      "title": "Getting Started with Docker for Web Developers",
      "description": "Learn how to containerize your web applications with Docker for consistent development and deployment environments.",
      "thumbnail": "https://picsum.photos/seed/vlog4/600/400",
      "videoUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "tags": ["Docker", "DevOps", "Backend", "Deployment"],
      "date": "February 1, 2024"
    }
  ];
  const loading = false;

  const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl font-bold text-center mb-4 text-text-primary-light dark:text-text-primary-dark">{children}</h2>
  );

  return (
    <div className="py-16 md:py-24">
      <SectionTitle>Vlogs & Tech Talks</SectionTitle>
      <p className="text-center text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto mb-12 px-4">
        Exploring new technologies, sharing insights, and documenting my journey in the world of software development.
      </p>

      {loading ? (
        <div className="text-center">Loading vlogs...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          {vlogs.map(vlog => (
            <VlogCard key={vlog.id} vlog={vlog} />
          ))}
        </div>
      )}
    </div>
  );
};

export default VlogPage;
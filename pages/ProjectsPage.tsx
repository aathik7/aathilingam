
import React, { useState, useMemo, useEffect } from 'react';
import { Project } from '../types';
import ProjectCard from '../components/ProjectCard';

const ProjectsPage: React.FC = () => {
  const projects: Project[] = [
    {
      "id": 1,
      "title": "E-commerce Analytics Dashboard",
      "description": "A comprehensive dashboard for visualizing sales data, customer behavior, and product performance in real-time.",
      "image": "https://picsum.photos/seed/project1/600/400",
      "tags": ["React", "D3.js", "Node.js", "PostgreSQL"],
      "category": "Frontend",
      "liveUrl": "#",
      "githubUrl": "#"
    },
    {
      "id": 2,
      "title": "AI-Powered Chatbot",
      "description": "A conversational AI platform for customer support, leveraging natural language processing to resolve queries instantly.",
      "image": "https://picsum.photos/seed/project2/600/400",
      "tags": ["Python", "TensorFlow", "Flask", "React"],
      "category": "AI",
      "githubUrl": "#"
    },
    {
      "id": 3,
      "title": "SaaS Subscription Manager",
      "description": "A platform for businesses to manage user subscriptions and recurring payments seamlessly with Stripe integration.",
      "image": "https://picsum.photos/seed/project3/600/400",
      "tags": ["Node.js", "Stripe", "React", "MongoDB"],
      "category": "Backend",
      "liveUrl": "#"
    },
    {
      "id": 4,
      "title": "Backend API for Mobile App",
      "description": "A robust and scalable RESTful API serving data to a cross-platform mobile application, built with Go.",
      "image": "https://picsum.photos/seed/project4/600/400",
      "tags": ["Go", "PostgreSQL", "Docker", "JWT"],
      "category": "Backend",
      "githubUrl": "#"
    },
    {
      "id": 5,
      "title": "ML Model Deployment Pipeline",
      "description": "A CI/CD pipeline for deploying and managing machine learning models, ensuring scalability and reliability.",
      "image": "https://picsum.photos/seed/project5/600/400",
      "tags": ["Python", "Scikit-learn", "AWS", "Kubernetes"],
      "category": "AI",
      "githubUrl": "#"
    },
    {
      "id": 6,
      "title": "Real-time Collaborative Editor",
      "description": "A web-based text editor that allows multiple users to collaborate on documents in real-time, similar to Google Docs.",
      "image": "https://picsum.photos/seed/project6/600/400",
      "tags": ["React", "WebSockets", "Node.js", "Redis"],
      "category": "Frontend",
      "liveUrl": "#",
      "githubUrl": "#"
    }
  ];
  const [filter, setFilter] = useState('All');
  const loading = false;

  const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl font-bold text-center mb-4 text-text-primary-light dark:text-text-primary-dark">{children}</h2>
  );

  const categories = useMemo(() => {
    if (loading) return ['All'];
    return ['All', ...new Set(projects.map(p => p.category))]
  }, [projects, loading]);

  const filteredProjects = useMemo(() => {
    if (loading) return [];
    if (filter === 'All') {
      return projects;
    }
    return projects.filter(p => p.category === filter);
  }, [filter, projects, loading]);

  return (
    <div className="py-16 md:py-24 animate-fade-in-up">
      <SectionTitle>My Work</SectionTitle>
      <p className="text-center text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto mb-12 px-4">
        A selection of my work. Filter by category to see more.
      </p>

      {/* Filter Tabs */}
      <div className="flex justify-center flex-wrap gap-2 mb-12 px-4">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-5 py-2 rounded-full font-medium text-sm transition-colors ${filter === category
                ? 'bg-primary text-white'
                : 'bg-background-secondary-light dark:bg-background-secondary-dark text-text-primary-light dark:text-text-primary-dark hover:bg-border-color-light dark:hover:bg-border-color-dark'
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      {loading ? (
        <div className="text-center">Loading projects...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
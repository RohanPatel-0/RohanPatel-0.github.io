import './index.scss';
import Loader from 'react-loaders';
import ProjectCard from './project-cards';
import { useState, useEffect } from 'react';
const Projects = () => {
    const projectsData = [
        {
          title: 'Tomato Disease Detector',
          description: 'The tomato disease detection web application is a machine learning-based project tht aims to assist gardners in identifying diseases in tomato plants.  The project employs a convolutional neural network to analyze uploaded images of tomato plants and provide real-time preductions regarding the health condition of the plants.',
          stack: 'Python, TensorFlow, Neural Networks, WSGI, Oracle Cloud, HTML/CSS, Flask',
          githublink: "https://github.com/RohanPatel-0/tomato-disease-detector",
        },
        {
          title: 'Binomial Pricing Model',
          description: 'This model aims to calculate the price of an American style option using C and basic statistics concepts such as expected value and binomials.',
          stack: 'C',
          githublink: "https://github.com/RohanPatel-0/binomial-pricing"
        },
        {
          title: 'Binary Path Anonymizer',
          description: 'Automate the process of converting absolute paths in binary files to relative paths with the Path Anonymizer. This Python script identifies and replaces path-like strings in binary files, enhancing security and portability espcecially in languages such as C++ and Rust.',
          stack: 'Python, Command Line, Memory Mapping',
          githublink: "https://github.com/RohanPatel-0/path_anonymizer",
        }
      ];

  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Simulate loading time (remove this in your actual code)
    const delay = setTimeout(() => {
      setProjects(projectsData);
      setLoading(false);
    }, 100);

    return () => clearTimeout(delay);
  }, []);

  return (
    <>
      <div className="projects-container">
            {/* Render project cards */}
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                stack={project.stack}
                githublink={project.githublink}
              />
            ))}
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Projects;
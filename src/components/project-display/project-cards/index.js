import './index.scss'
const ProjectCard = ({ title, description, githublink, stack }) => {
    return (
      <div className="project-card">
        <h3>{title}</h3>
        <h4>{stack}</h4>
        <p>{description}</p>
        <a href={githublink} target="_blank" rel="noopener noreferrer" className="btn">Learn More</a>
      </div>
    );
  };
  
  export default ProjectCard;
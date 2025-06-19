import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.css';

const Card = ({ 
  src,
  gitHub,
  name,
  about,
  link,
  toolImg,
  tech = []
}) => {
  return (
    <div className="card dark:bg-dark bg-lighter">
      <div className="Work-Img">
        <img src={src} alt={name} className="Projects-img" />
      </div>
      
      <div className="Card-ToolsImg">
        {toolImg.map((img, index) => (
          <img key={index} src={`./images/Tools/${img}`} alt={img} className="Card-Tools-img" />
        ))}
      </div>
      
      <div className="card-content">
        <span className="Project-Name fs-5">{name}</span>
        <p className="project-description">{about}</p>
        
        {tech && tech.length > 0 && (
          <div className="tech-tags">
            {tech.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        )}
      </div>
      
      <div className="Links d-flex flex-row justify-content-start gap-2">
        {link && (
          <a
            href={link}
            target="_blank"
            className="card-btn demo-btn"
            rel="noopener noreferrer"
          >
            <img src="./images/link.png" alt="Link Icon" className="btn-icon" />
            <span>Demo</span>
          </a>
        )}
        {gitHub && (
          <a
            href={gitHub}
            target="_blank"
            className="card-btn github-btn"
            rel="noopener noreferrer"
          >
            <img src="./images/github-logo.png" alt="GitHub Icon" className="btn-icon" />
            <span>GitHub</span>
          </a>
        )}
      </div>
    </div>
  );
}

export default Card;

import 'bootstrap/dist/css/bootstrap.min.css';
import './VlogCard.css';

const Card = ({ src, gitHub, name, about, link, vlogImg }) => {
  return (
    <div className="Vlog-card-container">
  <div className="Vlog-card">
    <div className="Vlog-Work-Img">
      <img src={src} alt={name} className="Vlog-Projects-img" />
      <img src={vlogImg} alt="Tech Logo" className="Vlog-Tools-img" />
    </div>

    <div className="Vlog-card-content">
      <span className="Vlog-Project-Name">{name}</span>
      <p className="Vlog-About">{about}</p>

      {/* <div className="Vlog-Tags">
        {["React", "Google Cloud Console", "JavaScript"].map((tech, index) => (
          <span className="Vlog-Tag" key={index}>{tech}</span>
        ))}
      </div> */}

      <div className="Vlog-Links">
        <a href={link} target="_blank" className="Vlog-Btn">
          <img src="./images/link.png" alt="Link" />
          Demo
        </a>
      </div>
    </div>
  </div>
</div>

  )
}

export default Card;

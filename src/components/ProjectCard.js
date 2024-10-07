import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, sourceLink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="Project"/>
        <div className="proj-txtx">
        <h4>{title}</h4>
        <span>{description}</span>
        <a href={sourceLink} target="_blank" rel="noopener noreferrer">Source</a>
        </div>
      </div>
    </Col>
  )
}
import style from '../sections/Projects/ProjectStyle.module.css'

const ProjectCard = ({ src,link,h3,p }) => {
  return (
    <a href={link} target="_blank">
        <img className={style.img} src={src} alt={`${h3}` } />
        <h3>{h3}</h3>
        <p>{p}</p>
    </a>
  );
}

export default ProjectCard
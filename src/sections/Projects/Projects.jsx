import style from './ProjectStyle.module.css'
import SDAST from '../../assets/S|DAST.png'
import ED from '../../assets/E_D.png'
import ProjectCard from '../../common/ProjectCard'


function Projects() {
  return (
    <section id="project" className={style.container}>
        <h1 className='sectionTitle'> Projects</h1>
        <div className={style.projectContainer}>
            <ProjectCard  src={ED} link='#hello' h3='En|Decoder' p='Tool'/>
            <ProjectCard  src={SDAST} link='#hello' h3='WebShaz' p='SAST|DAST Tool '/>
            <ProjectCard  src={SDAST} link='#hello' h3='SDAST' p='Streamin app'/>
            <ProjectCard  src={SDAST} link='#hello' h3='SDAST' p='Streamin app'/>
        </div>
    </section>
  )
}

export default Projects
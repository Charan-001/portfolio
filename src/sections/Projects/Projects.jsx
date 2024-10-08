import style from './ProjectStyle.module.css'
import SDAST from '../../assets/S|DAST.png'
import ED from '../../assets/E_D.png'
import info from '../../assets/info.png'
import ProjectCard from '../../common/ProjectCard'


function Projects() {
  return (
    <section id="project" className={style.container}>
        <h1 className='sectionTitle'> Projects</h1>
        <div className={style.projectContainer}>
            <ProjectCard  src={ED} link='https://github.com/Charan-001/En-Decoder' h3='En|Decoder' p='Tool'/>
            <ProjectCard  src={SDAST} link='https://github.com/Charan-001/WebShaz' h3='WebShaz' p='SAST|DAST Tool '/>
            <ProjectCard  src={info} link='https://github.com/Charan-001/InfoGather' h3='InfoGather' p='Tool'/>
           
        </div>
    </section>
  )
}

export default Projects
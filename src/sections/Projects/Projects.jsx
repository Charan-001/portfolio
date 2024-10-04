import style from './ProjectStyle.module.css'
import viberr from '../../assets/viberr.png'
import ProjectCard from '../../common/ProjectCard'


function Projects() {
  return (
    <section id="project" className={style.container}>
        <h1 className='sectionTitle'> Projects</h1>
        <div className={style.projectContainer}>
            <ProjectCard  src={viberr} link='#hello' h3='En|Decoder' p='Tool'/>
            <ProjectCard  src={viberr} link='#hello' h3='WebShaz' p='SAST|DCA Tool '/>
            <ProjectCard  src={viberr} link='#hello' h3='Viberr' p='Streamin app'/>
            <ProjectCard  src={viberr} link='#hello' h3='Viberr' p='Streamin app'/>
        </div>
    </section>
  )
}

export default Projects
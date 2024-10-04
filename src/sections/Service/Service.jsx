import style from './ServiceStyle.module.css'
import viberr from '../../assets/viberr.png'
import ServiceCard from '../../common/ServiceCard'


function Projects() {
  return (
    <section id="service" className={style.container}>
        <h1 className='sectionTitle'> Service</h1>
        <div className={style.serviceContainer}>
            <ServiceCard  src={viberr} h3='Web Development'/>
            <ServiceCard  src={viberr} h3='Ethical Hacking'/>
           
        </div>
    </section>
  )
}

export default Projects
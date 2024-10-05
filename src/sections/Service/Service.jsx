import style from './ServiceStyle.module.css'
import py from '../../assets/python.png'
import web from '../../assets/web.png'
import hack from '../../assets/hack.png'
import ServiceCard from '../../common/ServiceCard'


function Projects() {
  return (
    <section id="service" className={style.container}>
        <h1 className='sectionTitle'> Service</h1>
        <div className={style.serviceContainer}>
            <ServiceCard  src={web} h3='Web Development'/>
            <ServiceCard  src={hack} h3='Hacking'/>
            <ServiceCard  src={py} h3='Python Projects'/>
           
        </div>
    </section>
  )
}

export default Projects
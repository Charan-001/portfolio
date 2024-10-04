import style from '../sections/Service/ServiceStyle.module.css'

const ServiceCard = ({ src,h3 }) => {
  return (
    <a >
        <img className={style.img} src={src} alt={`${h3}`} />
        <h3>{h3}</h3>
        
    </a>
  );
}

export default ServiceCard
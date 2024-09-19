import style from '../sections/Skills/SkillStyle.module.css'

function SkillList({src,skill}) {
  return (
    <span className={style.spn}>
        <img src={src} alt="CheckMark Icon" />
        <p>{skill}</p>
    </span>
  )
}

export default SkillList
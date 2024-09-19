import style from './SkillStyle.module.css'
import checkMarkDark from '../../assets/checkmark-dark.svg'
import  checkMarkLight from '../../assets/checkmark-light.svg'
import SkillList from '../../common/SkillList'
import { useTheme } from "../../common/ThemeContent";
const Skills = () => {
    const { theme } = useTheme();

    const checkMark = theme === 'light' ? checkMarkLight : checkMarkDark
  return (

    <section id='skill' className={style.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={style.skillList}>
            <SkillList src={checkMark} skill='HTML' />
            <SkillList src={checkMark} skill='CSS' />
            <SkillList src={checkMark} skill='JavaScript' />
            <SkillList src={checkMark} skill='React' />
            <SkillList src={checkMark} skill='Bootstrap' />
        </div>
        <hr />
        <div className={style.skillList}>
            <SkillList src={checkMark} skill='PHP' />
            <SkillList src={checkMark} skill='Python' />
            <SkillList src={checkMark} skill='C' />
            <SkillList src={checkMark} skill='MySQL' />
            <SkillList src={checkMark} skill='Git' />
        </div>
        <hr />
        <div className={style.skillList}>
            <SkillList src={checkMark} skill='Kali Linux' />
            <SkillList src={checkMark} skill='Burpsuite' />
            <SkillList src={checkMark} skill='Maltego' />
            <SkillList src={checkMark} skill='Wireshark' />
            <SkillList src={checkMark} skill='Nmap' />
        </div>
        </section>
  )
}

export default Skills
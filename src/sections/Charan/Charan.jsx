import style from "./charanStyle.module.css";
import Profileimg from "../../assets/charan.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from  "../../assets/twitter-light.svg";
import linkedinLight from  "../../assets/linkedin-light.svg";
import githubLight from  "../../assets/github-light.svg";
import twitterDark from "../../assets/twitter-dark.svg"
import linkedinDark from "../../assets/linkedin-dark.svg"
import githubDark from "../../assets/github-dark.svg"
import CV from "../../assets/cv.pdf"
import { useTheme } from "../../common/ThemeContent";

function Charan() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark
  const githubIcon = theme === 'light' ? githubLight : githubDark
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark

  return (
    <section id="hero" className={style.Container}>
      <div className={style.colorModeContainer}>
        <img className={style.profile} src={Profileimg} alt="Profile picture" />
        <img
          className={style.colormode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={style.info}>
        <h1>CHARAN</h1>
        <h2>Hacker and Developer</h2>
        <span>
          <a href="https://twitter.com/" target="_blank">
          <img src={twitterIcon} alt="" />
          </a>
          <a href="https://github.com/" target="_blank">
          <img src={githubIcon} alt="Github Icon" />
          </a>
          <a href="https://linkedin.com/" target="_blank">
          <img src={linkedinIcon} alt="Linkedin Icon" />
          </a>
        </span>
         <p className={style.description}> Hacking is Passion and Developing is Profession </p>
        <a href={CV} download>
          <button className={style.hover}>Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Charan;

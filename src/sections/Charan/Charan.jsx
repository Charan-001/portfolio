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
import CV from "../../assets/CV.pdf"
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
          <a href="https://x.com/_Ch4r4n_?t=VP9e0G0C7mlDehC9ZbR5cg&s=09" target="_blank">
          <img src={twitterIcon} alt="" />
          </a>
          <a href="https://github.com/Charan-001/" target="_blank">
          <img src={githubIcon} alt="Github Icon" />
          </a>
          <a href="https://www.linkedin.com/in/charan-k-3a7653249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
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

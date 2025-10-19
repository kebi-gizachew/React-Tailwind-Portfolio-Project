import { useContext} from "react"
import PropContext from "../Hooks/PropContext";
import Header from "../components/Header";
import AboutSection from "../components/AboutSection";
import code from "/assets/images/code.jpg"

function About() {
  const {theme, darkMode} = useContext(PropContext)

  return (
    <div className="about-container" style={{backgroundColor:darkMode ? "black": "white",color: theme.color}}>
      <Header />
      <div className="about-main">
        <div className="about-header">
    <h1 className="about-title">
            About <span style={{color:"#FF6600"}}>Me</span>
          </h1>
          <div className="about-line"></div>
        </div>
        <div className="about-content">
          <div className="about-image">
            <img src={code} alt="Kebron Gizachew"/>
          </div>
          <AboutSection/>
        </div>
      </div>
    </div>
  )
}

export default About
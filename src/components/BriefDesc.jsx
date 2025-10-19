import { NavLink} from "react-router-dom"
import {FaGithub, FaLinkedin } from "react-icons/fa";
import {MdEmail } from "react-icons/md"
import {useContext } from "react"
import PropContext from "../Hooks/PropContext";

function BriefDescription() {
  const {theme, darkMode} = useContext(PropContext)
  return (
    <div className="bg-transparent text-left flex flex-col w-[25%] h-[200px] justify-center gap-[10px] mt-[20px] transition-all duration-300 ease-in-out mr-0 max-[768px]:w-[100%] max-[768px]:h-auto max-[768px]:text-center max-[768px]:items-center max-[768px]:mt-[20px]" style={{color:theme.color }}>
      <p className="text-[#ff6600] text-[39px] mb-[10px] max-[768px]:text-[28px] max-[768px]:w-full">Hello, I'm</p>
      <h1 className="text-[90px] mb-0 mt-0 max-[768px]:text-[60px] max-[768px]:w-full">Kebron Gizachew</h1>
      <p className="text-[38px] mb-0 max-[768px]:text-[24px]">Fontend Developer in training</p>
    <p className="text-[30px] mb-[10px]  max-w-[800px] max-[768px]:text-[20px]  max-[768px]:max-w-[100%]">
        I create beautiful and responsive websites using Javascript, HTML, and CSS.
      </p>
      <NavLink to="/about" className="bg-[#ff6600] text-white py-[20px] px-0 rounded-[5px] text-center w-[400px] decoration-none text-[35px] mt-[10px] max-[768px]:w-[90%] max-[768px]:text-[25px] max-[768px]:py-[15px] max-[768px]:px-0">
        Learn More
      </NavLink>
      <div className="flex gap-[30px] text-[40px] w-[400px] justify-evenly mt-[40px] w-[100%] gap-[20px] text-[30px]">
        <a style={{ color: darkMode ? "white" : "black" }}
        href="https://github.com/kebi-gizachew" target="_blank" rel="noreferrer">
          <FaGithub/>
        </a>
        <a style={{color:darkMode ? "white" : "black"}} href="https://www.linkedin.com/in/kebron-selamu-496580371?utm_source=sh
        are&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"
          rel="noreferrer">
          <FaLinkedin/>
        </a>
        <a style={{color:darkMode?"white": "black"}} href="mailto:kebisel21@gmail.com">
          <MdEmail/>
      </a>
      </div>
    </div>
  )
}

export default BriefDescription
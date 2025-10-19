import { useContext} from "react"
import PropContext from "../Hooks/PropContext";
import Header from "../components/Header";
import AboutSection from "../components/AboutSection";
import code from "/assets/images/code.jpg"

function About() {
  const {theme, darkMode} = useContext(PropContext)

  return (
    <div className="h-screen gap-[20px] m-auto w-screen pl-[30px] pt-0 pr-[30px] transition-all duration-300 ease-in-out overflow-hidden max-[768px]:h-auto max-[768px]:pl-[10px] max-[768px]:pr-[10px]" style={{backgroundColor:darkMode ? "black": "white",color: theme.color}}>
      <Header />
      <div className="flex flex-col items-center justify-center gap-[10px] h-[70vh] w-full max-[768px]:h-auto max-[768px]:gap-[15px]">
        <div className="flex flex-col justify-center items-center">
    <h1 className="text-[50px] mt-[90px] mb-[20px] max-[768px]:text-[36px] max-[768px]:mt-[40px] max-[768px]:mb-[15px]">
            About <span style={{color:"#FF6600"}}>Me</span>
          </h1>
          <div className="w-[150px] bg-[#ff6600] h-[10px] max-[768px]:w-[100px] h-[8px]"></div>
        </div>
        <div className="flex m-auto justify-evenly items-center gap-[20px] w-[80%] h-[70%] flex-wrap max-[768px]:flex-col max-[768px]:w-full max-[768px]:gap-[15px]">
          <div className="w-[30%] h-full border-4 border-[#ff6600] mt-[20px] rounded-[10px] flex items-center justify-center p-0 shadow-[0_4px_8px_rgba(0, 0, 0, 0.1)] max-[768px]:w-[80%] max-[768px]:h-auto max-[768px]:mt-[10px]">
            <img src={code} className="w-full h-full m-0 max-[768px]:h-auto" alt="Kebron Gizachew"/>
          </div>
          <AboutSection/>
        </div>
      </div>
    </div>
  )
}

export default About
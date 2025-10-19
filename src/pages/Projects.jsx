import {useContext, useState } from "react";
import PropContext from "../Hooks/PropContext";
import Header from "../components/Header"
import Scroll from "../components/Scroll"
import ProjectWhole from "../components/projectWhole";
import Footer from "../components/Footer";

function Projects() {
  const {theme } = useContext(PropContext)
  const [now, setNow] = useState("All")

  return (
    <div className="h-auto gap-[20px] m-auto w-screen min-h-screen pl-[30px] pt-[20px] transition-all duration-500 ease-in-out max-[600px]:pl-[10px] max-[600px]:pt-[10px] max-[600px]:gap-10" style={{backgroundColor:theme.backgroundColor, color:theme.color }}>
      <Header/>
      <div className="flex flex-col justify-center items-center pb-[40px] md:pb-[20px]">
        <h1 className="mt-[60px] text-[50px] md:text-[30px] mt-[30px] text-center">
          My <span className="text-[#FF6600]">Projects</span>
        </h1>
        <div className="w-[150px] bg-[#FF6600] h-[10px] md:w-[100px] md:h-[6px]"></div>
        <Scroll now={now} setNow={setNow} />
      </div>
      <ProjectWhole now={now} setNow={setNow} />
      <Footer />
    </div>
  )
}

export default Projects;
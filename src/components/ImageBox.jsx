import {useContext } from "react";
import PropContext from "../Hooks/PropContext";

function ImageBox() {
  const {theme } = useContext(PropContext);
  return (
    <div
      className="w-[30%] h-[30%] rounded-[50%] overflow-hidden mt-[20px] shadow-[0_4px_8px_rgba(0,0,0,0.1)] max-[600px]:w-[60%]  max-[600px]:h-[60%]  max-[600px]:mt-[10px]"
      style={{border:`10px solid #${theme.circleBorder}`}}>
      <img src="/assets/images/kebron.jpg" alt="Profile Picture" className="w-[100%] h-[100%] object-cover transition-all duration-300 ease-in-out max-[600px]:w-[100%]  max-[600px]:h-[100%]"/>
    </div>
  )
}

export default ImageBox
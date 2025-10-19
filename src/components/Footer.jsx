import {useContext } from "react";
import PropContext from "../Hooks/PropContext";

function Footer() {
  const {theme } = useContext(PropContext);

  return (
    <footer
      className="w-screen h-[150px] flex justify-center items-center py-[10px] px-0 transition-all duration-300 ease-in-out flex-col mt-[30px] gap-[5px] max-[768px]:h-auto max-[768px]:py-[20px] max-[768px]:px-[10px] max-[768px]:gap-[10px]"
      style={{borderTop: `2px solid #${theme.circleBorder}`,
        background:theme.backgroundColor,
        color:theme.color}}>
      <h2 className="text-[#ff6600] m-0 text-[60px] max-[768px]:text-[40px]">Kebron Gizachew</h2>
      <p className="text-[20px] m-0 mt-[20px] max-[768px]:text-[16px] mt-[10px] text-center">© 2024 Kebron Gizachew. All rights reserved.</p>
    </footer>
  )
}

export default Footer
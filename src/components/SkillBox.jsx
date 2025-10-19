import {useContext } from "react"
import PropContext from "../Hooks/PropContext"

function SkillBox(props) {
    const {theme }=useContext(PropContext);

    return (
        <div className="border-2 border-[#ff6600] rounded-[20px] p-[20px] m-[10px] w-[180px] h-[80px] flex justify-center items-center text-center shadow-[0_4px_8px_rgba(0, 0, 0, 0.1)] text-#ff6600 transition-all duration-300 ease-in-out max-[768px]:w-[120px] max-[768px]:h-[50px] max-[768px]:p-[10px]"
            style={{background:`#${theme.circleBorder}`}}>
            <p className="text-[30px] font-bold max-[768px]:text-[20px]">{props.lan}</p>
    </div>
    )
}

export default SkillBox
import {useContext } from 'react'
import PropContext from '../Hooks/PropContext'

function Scroll(props) {
    const {theme } = useContext(PropContext);

    return (
        <div
            className="flex gap-[20px] w-[400px] justify-evenly items-center h-[70px] rounded-[20px] shadow-[0_4px_8px_rgba(0, 0, 0, 0.1)] p-[10px] mt-[30px] transition-all duration-300 ease-in-out max-[768px]:w-full max-[768px]:gap-[10px] max-[768px]:h-[50px] max-[768px]:p-[5px]"
            style={{backgroundColor:`#${theme.circleBorder}`, color:theme.color}}>
            <button className="bg-transparent border-none text-[20px] cursor-pointer max-[768px]:text-[16px] hover:scale-[1.4] active:text-[#ff6600] active:scale-[1.4]" style={{color: theme.color }}
                onClick={()=>props.setNow("All")}>
                All
            </button>
            <button className="bg-transparent border-none text-[20px] cursor-pointer max-[768px]:text-[16px] hover:scale-[1.4] active:text-[#ff6600] active:scale-[1.4]" style={{color:theme.color}}
                onClick={()=>props.setNow("Game")}>
                Game
            </button>
            <button className="bg-transparent border-none text-[20px] cursor-pointer max-[768px]:text-[16px] hover:scale-[1.4] active:text-[#ff6600] active:scale-[1.4]"
                style={{color: theme.color }}
                onClick={()=>props.setNow("App")}>
                App
            </button>
            <button className="bg-transparent border-none text-[20px] cursor-pointer max-[768px]:text-[16px] hover:scale-[1.4] active:text-[#ff6600] active:scale-[1.4]" style={{ color: theme.color }}
                onClick={() => props.setNow("UI/UX")}>
                UI/UX
            </button>
    </div>
    )
}

export default Scroll
import {useContext } from 'react'
import PropContext from '../Hooks/PropContext'

function Scroll(props) {
    const {theme } = useContext(PropContext);

    return (
        <div
            className="scroll-container"
            style={{backgroundColor:`#${theme.circleBorder}`, color:theme.color}}>
            <button className="scroll-button" style={{color: theme.color }}
                onClick={()=>props.setNow("All")}>
                All
            </button>
            <button className="scroll-button" style={{color:theme.color}}
                onClick={()=>props.setNow("Game")}>
                Game
            </button>
            <button className="scroll-button"
                style={{color: theme.color }}
                onClick={()=>props.setNow("App")}>
                App
            </button>
            <button className="scroll-button" style={{ color: theme.color }}
                onClick={() => props.setNow("UI/UX")}>
                UI/UX
            </button>
    </div>
    )
}

export default Scroll
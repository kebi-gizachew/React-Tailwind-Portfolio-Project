import {useContext } from "react"
import PropContext from "../Hooks/PropContext"

function SkillBox(props) {
    const {theme }=useContext(PropContext);

    return (
        <div className="skill-box"
            style={{background:`#${theme.circleBorder}`}}>
            <p className="skill-box-text">{props.lan}</p>
    </div>
    )
}

export default SkillBox
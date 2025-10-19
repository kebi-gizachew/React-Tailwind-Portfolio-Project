import {useContext } from "react";
import PropContext from "../Hooks/PropContext"

function ContactBox(props) {
  const {theme } = useContext(PropContext);

  return (
    <div className="contact-box">
      <div className="contact-icon">{props.icon}</div>
      <div className="contact-text">
        <p className="contact-main">{props.main}</p>
      <p className="contact-info" style={{color:theme.color}}>
          {props.info}
      </p>
      </div>
    </div>
  )
}

export default ContactBox
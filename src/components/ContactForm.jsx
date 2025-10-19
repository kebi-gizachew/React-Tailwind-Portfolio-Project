import {useContext} from "react"
import PropContext from "../Hooks/PropContext";

function ContactForm() {
  const {theme, darkMode} = useContext(PropContext);

  return (
    <div className="contact-form-container" style={{backgroundColor:darkMode ? "#1d2b40ff" :"#f9f9f9ff",color: theme.color, border: `1px solid #9f9e9eff`}}>
      <h1 className="contact-form-title">Send Me a Message</h1>
    <form className="contact-form">
      <div className="form-row">
          <label className="form-label" style={{color:theme.color }}>Name:</label>
          <input placeholder="Your Name" type="text" className="form-input" style={{background:`#${theme.circleBorder}`,color: theme.color,border: `1px solid #8c8b8bff`}}/>
          <label className="form-label" style={{ color: theme.color }}>
            Email:
          </label>
          <input placeholder="Your Email" type="email" className="form-input"
            style={{
              background:`#${theme.circleBorder}`,
              color:theme.color,
              border:`1px solid #8c8b8bff`}}/>
        </div>
        <label className="form-label" style={{color:theme.color }}>
          Subject:
        </label>
        <input placeholder="Subject"
          type="text"
          className="form-input subject-input"
          style={{
            background: `#${theme.circleBorder}`,
            color:theme.color,
            border: `1px solid #8c8b8bff`,
          }}/>

        <label className="form-label"
          style={{color:theme.color }}>
          Message:
        </label>
        <textarea placeholder="Your Message" rows="5" className="form-textarea"
          style={{
            background:`#${theme.circleBorder}`,
            color:theme.color,
            border: `1px solid #8c8b8bff`,
          }}/>
        <button type="submit" className="submit-btn">
          Send Message
        </button>
      </form>
    </div>
  )
}

export default ContactForm
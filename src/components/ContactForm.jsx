import {useContext} from "react"
import PropContext from "../Hooks/PropContext";

function ContactForm() {
  const {theme, darkMode} = useContext(PropContext);

  return (
    <div className="flex flex-col justify-center h-[800px] w-[45%] rounded-[20px] transition-all duration-300 ease-in-out pt-[20px] pr-[40px] pb-[10px] pl-[40px] max-[768px]:w-[90%] max-[768px]:h-auto max-[768px]:p-[20px] mt-[100px]" style={{backgroundColor:darkMode ? "#1d2b40ff" :"#f9f9f9ff",color: theme.color, border: `1px solid #9f9e9eff`}}>
      <h1 className="text-[50px] mb-[40px] mt-[70px] max-[768px]:text-[36px] max-[768px]:mt-[40px] max-[768px]:mb-[20px]">Send Me a Message</h1>
    <form className="flex flex-col w-full gap-[10px] h-full pt-0 pb-[20px]">
      <div className="flex mb-[10px] max-[768px]:flex-col max-[768px]:gap-[10px]">
          <label className="mb-[10px] text-[25px] mr-[20px] max-[768px]:text-[20px] max-[768px]:mr-0" style={{color:theme.color }}>Name:</label>
          <input placeholder="Your Name" type="text" className="p-[10px] mb-[10px] rounded-[5px] w-[100%] h-[65%] mr-[20px] text-[20px] max-[768px]:w-full max-[768px]:mr-0 " style={{background:`#${theme.circleBorder}`,color: theme.color,border: `1px solid #8c8b8bff`}}/>
          <label className="mb-[10px] text-[25px] mr-[20px] max-[768px]:text-[20px] max-[768px]:mr-0" style={{ color: theme.color }}>
            Email:
          </label>
          <input placeholder="Your Email" type="email" className="p-[10px] mb-[10px] rounded-[5px] w-[100%] h-[65%] mr-[20px] text-[20px] max-[768px]:w-full max-[768px]:mr-0 h-[70px] w-[97%] mb-[30px] max-[768px]:w-full"
            style={{
              background:`#${theme.circleBorder}`,
              color:theme.color,
              border:`1px solid #8c8b8bff`}}/>
        </div>
        <label className="mb-[10px] text-[25px] mr-[20px] max-[768px]:text-[20px] max-[768px]:mr-0" style={{color:theme.color }}>
          Subject:
        </label>
        <input placeholder="Subject"
          type="text"
          className="p-[10px] mb-[10px] rounded-[5px] w-[40%] h-[65%] mr-[20px] text-[20px] max-[768px]:w-full max-[768px]:mr-0 h-[70px] w-[97%] mb-[30px] max-[768px]:w-full"
          style={{
            background: `#${theme.circleBorder}`,
            color:theme.color,
            border: `1px solid #8c8b8bff`,
          }}/>

        <label className="mb-[10px] text-[25px] mr-[20px] max-[768px]:text-[20px] max-[768px]:mr-0"
          style={{color:theme.color }}>
          Message:
        </label>
        <textarea placeholder="Your Message" rows="5" className="p-[10px] mb-[20px] rounded-[5px] text-[20px] max-[768px]-w-full"
          style={{
            background:`#${theme.circleBorder}`,
            color:theme.color,
            border: `1px solid #8c8b8bff`,
          }}/>
        <button type="submit" className="p-[10px] rounded-[15px] border-none bg-[#ff6600] text-[#fff] font-bold cursor-pointer w-[80%] h-[80%]m-auto text-[30px] max-[768px]:w-full max-[768px]:h-[60px] max-[768px]:text-[24px] m-auto mb-[50px]">
          Send Message
        </button>
      </form>
    </div>
  )
}

export default ContactForm
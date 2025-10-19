import {useContext } from "react";
import PropContext from "../Hooks/PropContext"

function ContactBox(props) {
  const {theme } = useContext(PropContext);

  return (
    <div className="w-[400px] h-[150px] bg-transparent flex rounded-[30px] border-1 border-[#9f9e9eff] justify-around items-center p-0 max-[768px]:w-full max-[768px]:h-auto max-[768px]:flex-col max-[768px]:p-[20px] max-[768px]:gap-[15px] max-[768px]:items-center max-[768px]:justify-center max-[768px]:pl-[-60px]">
      <div className="bg-[#fadfcdff] w-[80px] h-[80px] rounded-[50%] flex justify-center items-center text-[40px] text-[#ff6600] mr-[-50px] max-[768px]:w-[60px] max-[768px]:h-[60px] max-[768px]:text-[30px] max-[768px]:mr-0">{props.icon}</div>
      <div className="p-0 h-full w-[70%] flex-col text-left justify-center max-[768px]:w-full max-[768px]:text-center max-[768px]:items-center ml-[40px]">
        <p className="text-[#908f8fff] text-[30px] font-bold mt-[35px] ml-0 text-left mb-[5px] max-[768px]:text-[22px] max-[768px]:mt-[10px] max-[768px]:mb-[5px] max-[768px]:text-center">{props.main}</p>
      <p className="text-[25px] m-auto max-[768px]:text-[18px] max-[768px]:mt-0 max-[768px]:text-center max-[768px]:m-auto" style={{color:theme.color}}>
          {props.info}
      </p>
      </div>
    </div>
  )
}

export default ContactBox
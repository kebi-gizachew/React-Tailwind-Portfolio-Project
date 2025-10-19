import {useContext} from "react";
import PropContext from "../Hooks/PropContext";
import ContactForm from "../components/ContactForm"
import ContactInfo from "../components/ContactIn";
import Footer from "../components/Footer"
import Header from "../components/Header"

function Contact() {
  const {theme} = useContext(PropContext)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen p-[20px] transition-all duration-300 ease-in-out h-full mt-[0px] max-[768px]:min-h-auto max-[768px]:h-auto max-[768px]:p-0 max-[768px]:w-full" style={{backgroundColor:theme.backgroundColor, color:theme.color }}>
      <Header />
      <h1 className="text-[60px] font-bold mb-[20px] mt-[100px] max-[768px]:text-[36px] max-[768px]:mt-[50px] max-[768px]:mb-[10px] max-[768px]:text-center">
        Get In <span style={{color:"#FF6600" }}>Touch</span>
      </h1>
      <div className="w-[150px] bg-[#FF6600] h-[10px] mb-[-40px] max-[768px]:w-[130px] max-[768px]:h-[6px] max-[768px]:mb-[20px]"></div>
      <div className="flex justify-center items-center flex-wrap w-[80%] gap-[50px] pb-[50px] max-[768px]:flex-col max-[768px]:w-full max-[768px]:gap-[25px] max-[768px]:pb-[30px]">
        <ContactInfo />
        <ContactForm/>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact;
import {useContext} from "react";
import PropContext from "../Hooks/PropContext";
import ContactForm from "../components/ContactForm"
import ContactInfo from "../components/ContactIn";
import Footer from "../components/Footer"
import Header from "../components/Header"

function Contact() {
  const {theme} = useContext(PropContext)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen p-[20px] transition-all duration-300 ease-in-out h-full mt-[0px] md:p-10 md:min-h-auto md:h-auto" style={{backgroundColor:theme.backgroundColor, color:theme.color }}>
      <Header/>
      <h1 className="text-[60px] font-bold mb-[20px] mt-[100px] md:text-[36px] md:mt-[50px] md:mb-[15px] text-center">
        Get In <span style={{color:"#FF6600" }}>Touch</span>
      </h1>
      <div className="w-[150px] bg-[#FF6600] h-[10px] mb-[-40px] md:w-[130px] md:h-[6px] md:mb-[-20px]"></div>
      <div className="flex justify-center items-center flex-wrap w-[80%] gap-[50px] pb-[50px] md:flex-col md:w-full md:gap-[25px] md:pb-[30px]">
        <ContactInfo />
        <ContactForm/>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact;
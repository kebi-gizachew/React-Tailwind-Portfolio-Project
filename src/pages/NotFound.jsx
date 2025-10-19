import {useContext} from "react";
import PropContext from "../Hooks/PropContext";
import Header from "../components/Header";

function PageNotFound() {
  const {theme, darkMode} = useContext(PropContext);

  return (
    <>
      <div className="overflow-hidden h-full w-screen md:text-[18px]" style={{backgroundColor: theme.backgroundColor }}>
        <Header/>
        <div className={darkMode?"text-[#ff6600] min-h-screen flex justify-center items-center text-[24px] transition-all duration-300 ease-in-out bg-[#0c112eff] md:text-[50px] md:w-[80%] md:h[30vh] md:rounded[150px_0px]":"text-#ff6600 min-h-screen flex justify-center items-center text-[24px] transition-all duration-300 ease-in-out bg-[#fef6f2ff] md:text-[50px] md:w-[80%] md:h-[30vh] md:rounded-[150px_0px]"}>
          <div className={darkMode?"text-center text-[100px] font-bold w-[40%] h-[40vh]  rounded-[300px_0px_0_0] shadow-[0_4px_8px_rgba(0,0,0,0.1)] flex justify-center items-center bg-[#01041dff]":"text-center text-[100px] font-bold w-[40%] h-[40vh]  rounded-[300px_0px_0_0] shadow-[0_4px_8px_rgba(0,0,0,0.1)] flex justify-center items-center bg-[#f8ddbcff]"}>
            404 - Page Not Found
          </div>
        </div>
      </div>
    </>
  )
}

export default PageNotFound;
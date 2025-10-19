import {useContext,useEffect } from 'react';
import {FaMoon, FaSun } from 'react-icons/fa';
import NavBar from './NavBar';
import PropContext from '../Hooks/PropContext';

function Header() {
  const {theme, darkMode, setDarkMode} = useContext(PropContext);

  const handleToggle = () => {
    setDarkMode(!darkMode);
  }
  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? '#121212' : '#ffffff';
  },[darkMode]);

  return (
    <header className="w-screen text-[30px] flex justify-between items-center py-[10px] px-[100px] sticky top-0 transition-all duration-300 ease-in-out h-[130px] ml-[-30px] max-[768px]:flex-col max-[768px]:items-center max-[768px]:py-[10px] max-[768px]:px-[20px] max-[768px]:h-auto max-[768px]:m-auto"
      style={{background: theme.backgroundColor,
        borderBottom: `2px solid #${theme.circleBorder}`}}>
      <h1 className="text-[#ff6600] text-[60px] ml-[100px] max-[768px]:text-[40px] max-[768px]:ml-0 max-[768px]:mb-[10px]">Portfolio</h1>
      <div className="flex items-center gap-[20px] max-[768px]:gap-[10px] max-[768px]:flex-wrap max-[768px]:justify-center">
        <NavBar />
        <button onClick={handleToggle} className="font-[34px] cursor-pointer bg-none border-none max-[768px]:text-[28px]"
          style={{color:darkMode ?'white' : 'black' }}>{darkMode ?<FaSun /> :<FaMoon />}
        </button>
      </div>
    </header>
  )
}

export default Header
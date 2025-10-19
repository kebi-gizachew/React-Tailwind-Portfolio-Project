import {useContext} from 'react';
import PropContext from '../Hooks/PropContext'
import Header from '../components/Header'
import BriefDescription from '../components/BriefDesc';
import ImageBox from '../components/ImageBox';
import Footer from '../components/Footer'

function Home() {
  const {theme} = useContext(PropContext);

  return (
    <div className="flex flex-col min-h-screen w-screen items-center justify-between transition-all duration-500 ease-in-out md:p-[10px]" style={{backgroundColor:theme.backgroundColor,color:theme.color }}>
      <Header />
      <div className="flex justify-around w-screen h-full items-center max-[768px]:flex-col max-[768px]:gap-[80px]">
        <BriefDescription />
        <ImageBox />
      </div>
      <Footer />
    </div>
  )
}

export default Home;
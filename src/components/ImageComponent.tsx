// import image from '../assets/backGroundImage.jpg';
import HeroSection from './HeroSection/HeroSection';
import MouseCircle from './MouseCircle';
import Header from './Header/Header';


function ImageComponent() {
 

  

  return (
    <div
      className="w-full h-[500vh] flex flex-col items-center"
      style={{ backgroundImage: "url('/src/assets/backGroundImage.jpg')", width: "100%", backgroundSize: "fit" }}
    >
      <div className='w-full justify-center items-center'>
      <Header />
      </div>
  
      <div className='w-[70%] justify-center items-center'>
      <HeroSection />
      </div>



{/* 1E1345 */}





      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-50">
        <MouseCircle />
      </div>
    </div>
  )
}

export default ImageComponent

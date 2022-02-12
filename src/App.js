import "./App.css";
import { useState } from "react";
import Slider from "react-slick";
import pic1 from "./assets/Consulting-rafiki.png";
import pic2 from "./assets/Creative writing-rafiki.png";
import pic3 from "./assets/Football Goal-rafiki.png";
import pic4 from "./assets/Researchers-rafiki.png";
import pic5 from "./assets/User research-rafiki.png";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const images = [pic1, pic2, pic3, pic4, pic5];

function App() {

  const NextArrow = ({onClick}) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    )
  }

  const PrevArrow = ({onClick}) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    )
  }

const [imgIndex,setImgIndex] = useState(0)

const settings = {
  infinite:true,
  lazyLoad: true,
  speed: 300,
  slidesToShow:3,
  centerMode: true,
  centerPadding: 0,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  beforeChange: (current, next) => setImgIndex(next), 
};


  return (
    <div className="App">
      <h1>React 3D Slider</h1>
      <Slider {...settings}>
        {images.map((img, idx) => (
     
          <div className={idx === imgIndex ? "slide activeSlide" : "slide"}>
                 
            <img src={img} alt={idx} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default App;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";
import img1 from "../../Assets/Images/slick images/1.jpg";
import img2 from "../../Assets/Images/slick images/2.jpg";
import img3 from "../../Assets/Images/slick images/3.jpg";
import img4 from "../../Assets/Images/slick images/4.jpg";
import img5 from "../../Assets/Images/slick images/5.jpg";
import img6 from "../../Assets/Images/slick images/6.jpg";
import img7 from "../../Assets/Images/slick images/7.jpg";
import img8 from "../../Assets/Images/slick images/8.jpg";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  // Add more image objects as needed
];


const MuiSlickSlider = () => {
  const settings = {
    arrow: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplayspeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
   

  };
  

  return (
    <div
      style={{
        width: "80%",
        margin: "auto",
        marginTop: "50px",
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      }}
    >
      <Slider
        {...settings}
        style={{
          width: "100%",
          height: "208px",
          margin: "auto",
        }}
      >
        {images.map((image) => (
          <Box key={image.id} style={{}}>
            <div style={{ width: "313px", height: "208px" }}>
              <img
                style={{ width: "100%", height: "100%" }}
                src={image}
                alt="banner"
              />
            </div>
          </Box>
        ))}
      </Slider>
    </div>
  );
};

export default MuiSlickSlider;

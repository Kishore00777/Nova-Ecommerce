import React from "react";
// import img from "../../Assets/Images/Nova Banner.svg";
// import image from "../../Assets/Images/Nov.svg";
import png from "../../Assets/Images/Nova Banner.svg"

import { Box } from "@mui/material";
function Header() {
  return (
    <>
      {/* <Box sx={{ width: "100%", margin: "auto", marginTop: "75px" }}>
        <img
          style={{ width: "100%", }}
          src={img}
          alt="jean"
          loading="lazy"
        />
      </Box> */}
      {/* <Box sx={{ width: "100%", margin: "auto", marginTop: "70px" }}>
        <img
          style={{ width: "100%", }}
          src={image}
          alt="jean"
          loading="lazy"
        />
      </Box> */}
      <Box sx={{ width: "100%", height:'100%', marginTop: "70px" }}>
        <img
          style={{ width: "100%", }}
          src={png}
          alt="jean"
          loading="lazy"
        />
      </Box>
      
    </>
  );
}
export default Header;

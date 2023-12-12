import React, { useEffect, useState } from "react";
// import Manage from "./Manage";
import Product from "../Components/Product/products";
import Loader from "../Components/Home/Loader";
import Header from "../Components/Home/Header";
export default function Home() {
  const [loaded, setLoaded] = useState(false);

  const loading = () => {
    setTimeout(() => {
      setLoaded(true);
    }, 2500);
  };
  const error = () => {
    console.log("error on loading");
  };
  useEffect(() => {
    loading();
  }, []);
  return (
    <>
      
      {/* <SlickCarousel/> */}
      
      {loaded ? (
        <>
          <Header />
          <div style={{marginTop:'10px',  padding:'30px'  }}>
          <Product />
          </div>
          
          {/* <Manage /> */}
        </>
      ) : (
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          // width:'50%',
          marginLeft:'auto',marginRight:'auto'         
        }}><Loader onLoad={loading} onError={error} /></div>
      )}
    </>
  );
}

import { Box, Card, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
// import image from '../../Assets/Images/pro img.jpg'

function Product() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get("http://localhost:3005/api/post");

        setProduct(response.data);
      } catch (err) {
        console.error("error getting products", err);
      }
    };
    getProduct();
  }, []);
  const discount = (price, actualPrice) => {
    const discountAmount = actualPrice - price;
    const discountPercentage = (discountAmount / actualPrice) * 100;

    return discountPercentage.toFixed(0); // Round to two decimal places
  };
  return (
    <>
      <Grid container   >
        {product.map((e, index) => (
          <Grid style={{marginTop:'30px', marginLeft:'40px',}}   item xs={12} sm={6} md={4} lg={3} xl={2} key={index}>
            <Card
              sx={{
                width: "250px",
                // width: "250px",
                // height: "350px",
                // margin: "25px",
                
                borderRadius: "3px",
                // border:'1px solid rgba(0, 0, 0, 0.3)'
                boxShadow: "0.05px 0.05px 10px  rgba(0, 0, 0, 0.3)",
              }}
            >
              <Box sx={{ width: "250px", height: "250px" }}>
                {/* Assuming the 'image' property exists in your product object */}
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={`http://localhost:3005/${e.image}`}
                  alt="product"
                  loading="lazy"
                />
              </Box>
              <Box sx={{ height: "70px",display:'flex',flexDirection:'column',alignItems:'center'}}>
                <Typography
                  sx={{
                    fontWeight: "500",
                    fontSize: "18px",
                    marginTop: "10px",
                  }}
                >
                  {e.title}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "700",
                    fontSize: "15px",
                    marginBottom: "2px",
                  }}
                >
                  {`₹${e.price}`}&nbsp;&nbsp;
                  <del
                    style={{
                      fontWeight: "500",
                      color: "#adb5bd",
                      fontSize: "14px",
                    }}
                  >{`₹${e.actualPrice}`}</del>&nbsp;
                  <span style={{ color: "#2dc653",fontSize: "13.5px", }}>{discount(e.price, e.actualPrice)}% off</span>
                </Typography>
                {/* <Typography style={{display:'none'}}>{e.productId}</Typography> */}
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
export default Product;

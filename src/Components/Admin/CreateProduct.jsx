import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

function CreateProduct() {
  const [product, setProduct] = useState({
    title: "",
    price: "",
    actualPrice: "",
  });
  const [image, setImage] = useState(null);

  const handleProduct = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const selectImage = (e) => {
    setImage(e.target.files[0]);
  };

  const CreateProduct = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3005/api/post",
        {
          title: product.title,
          price: product.price,
          actualPrice: product.actualPrice,
          image: image,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("created product sucessfully", response.data);
      setProduct({ title: "", price: "", actualPrice: "" });
      setImage((event)=>{
        event.target.files=null
      });
    } catch (err) {
      console.error("error posting data", err);
    }
  };


  return (
    <>
      <style>{styles}</style>
      <Form
      
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "10px",
          width: "100%",
          // border: "1px solid #e0dede",
          borderRadius: "15px",

          // marginLeft: "280px",
          // marginTop: "94px",
        }}
      >
        <Form.Group style={{ margin: "5px" }}>
          <Form.Label className="label">{"Title:"}</Form.Label>
          <Form.Control
            style={{ width: "250px", marginLeft: "10px" }}
            className="control"
            type="text"
            placeholder="Enter Title"
            name="title"
            value={product.title}
            onChange={handleProduct}
          />
        </Form.Group>
        <Form.Group style={{ margin: "5px" }}>
          <Form.Label className="label">{"Price:"}</Form.Label>
          <Form.Control
            style={{ width: "250px", marginLeft: "10px" }}
            className="control"
            type="text"
            placeholder="Enter price"
            name="price"
            value={product.price}
            onChange={handleProduct}
          />
        </Form.Group>
        <Form.Group style={{ margin: "5px" }}>
          <Form.Label className="label">
            {"ActualPrice:"}
            <Form.Control
              style={{ width: "250px", marginLeft: "10px" }}
              className="control"
              type="text"
              placeholder="Enter actualPrice"
              name="actualPrice"
              value={product.actualPrice}
              onChange={handleProduct}
            />
          </Form.Label>
        </Form.Group>

        <Form.Group style={{ margin: "5px" }}>
          <Form.Label className="label">{"Product image:"}</Form.Label>
          <Form.Control
            style={{ width: "50%", marginLeft: "10px" }}
            className="control button"
            Label="choose"
            type="file"
            onChange={selectImage}
          />
        </Form.Group>

        <Button variant="contained" className=" button" onClick={CreateProduct}>
          {"Submit"}
        </Button>
      </Form>
    </>
  );
}
export default CreateProduct;
const styles = `
.label {
  font-size: 17px;
  font-weight: bold;
  color: #573b8a;  // Text color
  margin-bottom: 8px;  // Adjust as needed
  margin-right:15px;
}

.control {
  border-radius: 4px;
  border: 1px solid #e0dede;  // Border color
  
  height: 15px;  // Adjust as needed
  background: #e0dede;
  padding: 10px;
  outline: none;
  margin-bottom: 12px;  // Adjust as needed
}

.button {
 width:10%;
 padding: 10px;
  margin: 12px auto ;
  color: #fff;
  background: #573b8a;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.2s ease-in;
}

.button:hover {
  background-color: #6d44b8;
}
// .control button{
//   width:50%;
//   height:30%;
// }
`;
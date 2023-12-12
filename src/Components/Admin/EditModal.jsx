import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Button, Form } from "react-bootstrap";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  height: "80%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function EditModal({ onHide, show, modeldata }) {
  const [product, setProduct] = useState(modeldata);
  const [image, setImage] = useState(null);

  const handleProduct = (e) => {
    const { value, name } = e.target;
    console.log(name, value);
    setProduct({ ...product, [name]: value });
  };

  const selectImage = (e) => {
    setImage(e.target.files[0]);
  };

  const updatedProduct = async () => {
    try {
      const response = await axios.put(
        `http://localhost:3005/api/post/${product._id}`,
        {
          _id: product._id,
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
      setProduct({
        
        title: "",
        price: "",
        actualPrice: "",
        
      });
      setImage(null);
    } catch (err) {
      console.error("error posting data", err);
    }
  };
  // const [show, setShow] = useState(false);
  // // const handleOpen = () => setShow(true);
  // const handleClose = () => setShow(false);

  return (
    <div>
      <Modal
        open={show}
        onClose={onHide}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <>
            <style>{styles}</style>
            <Form
              onSubmit={updatedProduct}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: "10px",
                width: "100%",
                border: "1px solid #e0dede",
                borderRadius: "15px",

                // marginLeft: "280px",
                // marginTop: "94px",
              }}
            >
              <Form.Group style={{ margin: "5px" }}>
                <Form.Label className="label">{"Title"}</Form.Label>
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
                <Form.Label className="label">{"Price"}</Form.Label>
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
                  {"ActualPrice"}
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
                <Form.Label className="label">{"Product image"}</Form.Label>
                <Form.Control
                  style={{ width: "250px", marginLeft: "10px" }}
                  className="control button"
                  Label="choose"
                  type="file"
                  onChange={selectImage}
                />
              </Form.Group>

              <Button
                variant="contained"
                onClick={()=>{updatedProduct();
                  onHide();}}
                className="control button"
              >
                {"Submit"}
              </Button>
              <Button className="control button" onClick={onHide}>
                {"Close"}
              </Button>
            </Form>
          </>
        </Box>
      </Modal>
    </div>
  );
}
const styles = `
.label {
  font-size: 17px;
  font-weight: 500;
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
 width:40%;
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
.control button{
  width:50%;
  height:30%;
}
    `;

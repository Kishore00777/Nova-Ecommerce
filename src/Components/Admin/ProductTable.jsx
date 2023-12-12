import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import { IoTrashSharp } from "react-icons/io5";
import { MdEditDocument } from "react-icons/md";
import { IoMdImages } from "react-icons/io";
import { MdMoreHoriz } from "react-icons/md";
import axios from "axios";
import EditModal from "./EditModal";

export default function ProductTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(8);
  const [product, setProduct] = useState([]);

  const getProduct = async () => {
    try {
      const response = await axios.get("http://localhost:3005/api/post");
      setProduct(response.data);
    } catch (err) {
      console.error("error getting products", err);
    }
  };

  const deleteProduct = async (_id) => {
    console.log("Deleting product with ID:", _id);
    try {
      const response = await axios.delete(
        `http://localhost:3005/api/post/${_id}`
      );
      console.log("Product deleted successfully:", response.data);
    } catch (error) {
      console.error("Error on deleting product:", error);
    }
    setTimeout(() => {
      getProduct();
    }, 500);
  };
  useEffect(() => {
    getProduct();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const [modeldata, setModelData] = useState({
   
    
  });
  const [showModal, setShowModal] = useState(false);
  const handleOpen = (e) => {
    console.log("Data from table:", e);
    setShowModal(true);
    setModelData(e);
  };
  
  const handleClose = () => {
    setShowModal(false);
    setTimeout(() => {
      getProduct();
    }, 500);
  }

  const discount = (price, actualPrice) => {
    const discountAmount = actualPrice - price;
    const discountPercentage = (discountAmount / actualPrice) * 100;

    return discountPercentage.toFixed(0); // Round to two decimal places
  };
  

  return (
    <>
      {showModal&&<EditModal show={showModal} onHide={handleClose} modeldata={modeldata}  />}
      <style>{styles}</style>
      <Paper>
        <TableContainer>
          <Table
            aria-label="simple table"
            style={{ minWidth: "1200px", maxWidth: "1200px" }}
          >
            <TableHead>
              <TableRow>
                <TableCell align="center" className="head">
                  Id
                </TableCell>
                <TableCell align="center" className="head">
                  Title
                </TableCell>
                <TableCell align="center" className="head">
                  Price
                </TableCell>
                <TableCell align="center" className="head">
                  ActualPrice
                </TableCell>
                <TableCell align="center" className="head">
                  Images
                </TableCell>
                <TableCell align="center" className="head">
                  Edit
                </TableCell>
                <TableCell align="center" className="head">
                  Delete
                </TableCell>
                <TableCell align="center" className="head">
                  View
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {product
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((e) => (
                  <TableRow
                    key={e._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center" style={{ color: "#d90429" }}>
                      "<span  style={{ color: "#0e9594" }}>{e._id}</span>"
                    </TableCell>
                    <TableCell align="center">{e.title}</TableCell>
                    <TableCell align="center">₹{e.price}</TableCell>
                    <TableCell align="center" style={{ color: "#adb5bd" }}>
                      <del>₹{e.actualPrice}</del>&nbsp;&nbsp;
                      <span style={{ color: "#2dc653" }}>{discount(e.price, e.actualPrice)}% off</span>
                    </TableCell>
                    <TableCell align="center">
                      <IoMdImages className="icons images" />
                    </TableCell>
                    <TableCell align="center">
                      <MdEditDocument
                        onClick={()=>{handleOpen(e)}}
                        className="icons edit"
                      />
                    </TableCell>
                    <TableCell align="center">
                      <IoTrashSharp
                        onClick={() => deleteProduct(e._id)}
                        className="icons delete"
                      />
                    </TableCell>
                    <TableCell align="center">
                      <MdMoreHoriz className="icons more" />
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={product.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}
const styles = `

.icons{
  cursor:pointer;
  font-size:1.5em;
}
.images{
  color:#ee9b00;
}
.images:hover{
  color:#f2542d;
}
.edit{
  color:#013a63;
}
.edit:hover{
  color:#8338ec;
}
.delete{
  color:#c1121f;
}
.delete:hover{
  color:#d90429;
}
.more{
  color:#8338ec;
}
.more:hover{
  color:#d90429;
}
.head {
  font-weight: bold;
  font-size: 17px;
  color: #3c096c;
  font-family: Oswald;
}
`;

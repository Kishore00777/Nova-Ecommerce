import {  Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NavBar from "./Components/Home/NavBar";
import Admin from "./pages/Admin";
import CreateProduct from "./Components/Admin/CreateProduct";
import ProductTable from "./Components/Admin/ProductTable";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <>
      <NavBar />
      
      
      <Routes>
        <Route path="/Nova-Ecommerce" element={<Home />} />
        <Route path="/Nova/Products" element={<ProductPage />} />
        <Route  path="/Admin" element={<Admin />}>
        <Route index element={<CreateProduct />} />
          <Route path="CreateProduct" element={<CreateProduct />} />
          <Route path="ProductTable" element={<ProductTable />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

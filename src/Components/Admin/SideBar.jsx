import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";

const SideMenu = () => {
  return (
    <>
      <Sidebar
        width="180px"
        backgroundColor="white"
        style={{
          height: "100%",
          position: "fixed",
          marginTop:'70px'
          
        }}
      >
        <Menu>
          {/* <SubMenu label="Products">
            <MenuItem component={<Link to="CreateProduct" />}> New Product </MenuItem>
            <MenuItem component={<Link to="ProductTable" />}> ProductTable </MenuItem>
          </SubMenu> */}
          <MenuItem component={<Link to="CreateProduct" />}> New Product </MenuItem>
            <MenuItem component={<Link to="ProductTable" />}> ProductTable </MenuItem>
          <MenuItem >
            
            Documentation
          </MenuItem>
          <MenuItem> Calendar </MenuItem>
        </Menu>
      </Sidebar>
    </>
  );
};

export default SideMenu;

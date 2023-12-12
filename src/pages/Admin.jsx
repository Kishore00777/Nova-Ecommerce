import React from "react";
import Sidebar from "../Components/Admin/SideBar";
import { Outlet } from "react-router-dom";

function Admin() {
  return (
    <>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div
          style={{
            width: "100%",
            height:'100%',
            marginLeft: "10%",
            marginTop: "8%",
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Outlet />
        </div>
      </div>
    </>
  );
}
export default Admin;

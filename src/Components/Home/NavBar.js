import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link,  } from "react-router-dom";
// import AdbIcon from '@mui/icons-material/Adb';

// const pages = ["Products", "Pricing", "Blog"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  return (
    <AppBar
      position="fixed"
      style={{
        backgroundColor: "white",
        boxShadow: "0.05px 0.05px 10px  rgba(0, 0, 0, 0.3)",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontSize: "25px",
              fontWeight: "bolder",
              letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
            }}
          >
            NOVA
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                color: "black",
              }}
            >
              <MenuItem style={{ color: "black" }} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link
                    to="/Nova-Ecommerce"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    Home
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem style={{ color: "black" }} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link
                    to="/Nova/Products"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    Products
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem style={{ color: "black" }} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link
                    to="/Nova/About"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    About
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem style={{ color: "black" }} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link
                    to="/Nova/Blog"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    Blog
                  </Link>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          {/* responsive */}
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontSize: "25px",
              fontWeight: "bolder",
              letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
            }}
          >
            NOVA
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link to="/Nova-Ecommerce" style={{ textDecoration: "none" }}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: "block", color: "black" }}
              >
                Home
              </Button>
            </Link>
            <Link to="/Nova/Products" style={{ textDecoration: "none" }}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: "block", color: "black" }}
              >
                Products
              </Button>
            </Link>
            <Link to="/Nova/About" style={{ textDecoration: "none" }}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: "block", color: "black" }}
              >
                About
              </Button>
            </Link>
            <Link to="/Nova/Blog" style={{ textDecoration: "none" }}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: "block", color: "black" }}
              >
                Blog
              </Button>
            </Link>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Welcome to Nova">
              <IconButton sx={{ p: 0 }}>
                {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
                <Avatar
                  alt="User Avatar"
                  style={{ backgroundColor: "black", fontWeight: "400" }}
                >
                  <Link
                    to="/Admin"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    N
                  </Link>
                </Avatar>
              </IconButton>
            </Tooltip>
            {/* <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;

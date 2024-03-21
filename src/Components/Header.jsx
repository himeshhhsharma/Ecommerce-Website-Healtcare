import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import LogoImage from "../assets/Images/header-logo.png";
import TextField from "@mui/material/TextField";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Grid } from "@mui/material";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import { useState, useEffect } from "react";


const pages = ["Home", "Shop By Products", "Shop By Solution", "Contact Us"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const MyCollection = [
  {
    label: "First Picture",
    imgPath: "../assets/Images/banner1.png",
  },
  {
    label: "First Picture",
    imgPath: "../assets/Images/banner2.png",
  },
  {
    label: "First Picture",
    imgPath: "../assets/Images/banner3.png",
  },
  {
    label: "First Picture",
    imgPath: "../assets/Images/banner4.png",
  },
  {
    label: "First Picture",
    imgPath: "../assets/Images/banner5.png",
  },

];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const CollectionSize = MyCollection.length;
  const theme = useTheme();
  const [index, setActiveStep] = React.useState(0);

  // Function to go to the next picture 
  const goToNextPicture = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });

  const isSticky = (e) => {
    const header = document.querySelector('.grid-container');
    const scrollTop = window.scrollY;
    scrollTop >= 250 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
  };


  return (
    <>
      <AppBar
        className="main-appbar"
        position="static"
        sx={{ background: "#fff" }}
      >
        <Grid container className="grid-container">
          <Grid item lg={6} display={"flex"} gap={4} justifyContent={"center"} className="pages-nav">
            {pages.map((page) => (
              <Button
                className="pages-nav-link"
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: "block", color: "black" }}
              >
                {page}
              </Button>
            ))}
          </Grid>
          <Grid item m={2} lg={1}>
            <img
              src={LogoImage}
              height={"100%"}
              width={"100%"}
            />
          </Grid>
          <Grid item m={2} lg={2} >
            <TextField
              label="Search"
              id="outlined-size-small"
              defaultValue="Search"
              size="small"
              className="search-field"
              InputProps={{
                sx: {
                  '&:focus': {
                    borderColor: 'black',
                  },
                },
              }}
            />
          </Grid>
          <Grid item>
            <ShoppingCartIcon />
          </Grid>
          {/* <Grid item className="profile">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          </IconButton>
        </Grid> */}
          <Grid item>
            <Button className="login-btn" variant="contained" sx={{
              color: "white", backgroundColor: "#006038", '&:hover': {
                backgroundColor: '#fd7e14',
                color: '#006038',
                transition: '0.4s ease-in'
              },
            }}>Login</Button>
          </Grid>
        </Grid>
      </AppBar>
      <Grid container className="header-moving">
        <Grid item lg={6} className="header-moving-item">
          <Typography>FLAT 10% OFF ON ALL RANGE ABOVE ₹ 599, USE CODE: KAYNA10</Typography>
        </Grid>
      </Grid>

    </>
  );
}
export default Header;

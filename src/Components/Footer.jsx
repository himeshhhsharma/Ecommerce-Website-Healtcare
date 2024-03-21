import React from 'react'
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/material";
import LogoImage from "../assets/Images/header-logo.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {
    return (
        <>
            <Box className="footer-box"></Box>
            <Grid container lg={12} md={12} sm={12} className="footer-container">
                <Grid item lg={4.5} className="footer-container-c1 f-c-c1" sx={{ flexDirection: "column", gap: "30px" }}>
                    <Box className="f-c-c1-r1">
                        <img
                            src={LogoImage}
                            height={"100%"}
                            width={"100%"}
                        />
                    </Box>
                    <Box className="f-c-c1-r2">
                        <Typography className="f-c-c1-r2-typo">
                            Herb Plants "We believed that the success of an organization depends on quality of products and goods. Kayna have made their products with 100% Natural ingredients which do not cause any side-effects.
                        </Typography>
                    </Box>
                    <Box className="f-c-c1-r3">
                        <Typography className="f-c-c1-r3-typo">
                            Follow Us
                        </Typography>
                    </Box>
                    <Box className="f-c-c1-r4">
                        <YouTubeIcon className="social-icns" sx={{ fontSize: "2rem" }} />
                        <InstagramIcon className="social-icns" sx={{ fontSize: "2rem" }} />
                        <XIcon className="social-icns" sx={{ fontSize: "2rem" }} />
                        <FacebookIcon className="social-icns" sx={{ fontSize: "2rem" }} />
                    </Box>
                </Grid>
                <Grid item lg={2} className=" f-c-c2" sx={{flexDirection:"column"}}>
                    <Box className="f-c-c2-r">Home</Box>
                    <Box className="f-c-c2-r">Shop</Box>
                    <Box className="f-c-c2-r">Skin Care</Box>
                    <Box className="f-c-c2-r">Body Care</Box>
                    <Box className="f-c-c2-r">Hair Care</Box>
                </Grid>
                <Grid item lg={2} className=" f-c-c2" sx={{flexDirection:"column"}}>
                    <Box className="f-c-c2-r">LEGAL STUFF</Box>
                    <Box className="f-c-c2-r">TERMS & CONDITIONS</Box>
                    <Box className="f-c-c2-r">RETURN POLICY</Box>
                    <Box className="f-c-c2-r">PRIVACY POLICY</Box>
                    <Box className="f-c-c2-r">SHIPPING & DELIVERY POLICY</Box>
                    <Box className="f-c-c2-r">ABOUT US</Box>
                    <Box className="f-c-c2-r">BLOG</Box>
                    <Box className="f-c-c2-r">CONTACT US
                    </Box>
                    
                </Grid>
                <Grid item lg={2} className="f-c-c2" sx={{flexDirection:"column"}}>
                <Box className="f-c-c2-r">CONTACTS</Box>
                    <Box className="f-c-c2-r">48/31 Kunwar Vinod Market, Mahaveer Chowk, Muzaffarnagar, Uttar Pradesh 251001

                    </Box>
                    <Box className="f-c-c2-r">PHONE :
                        09897541092</Box>
                    <Box className="f-c-c2-r">EMAIL :
                        KAYNAHEALTHCAREOFFICIAL@GMAIL.COM</Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer
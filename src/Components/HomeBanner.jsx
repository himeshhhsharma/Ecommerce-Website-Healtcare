import React from 'react';
import { Box } from "@mui/material";


const HomeBanner = (props) => {
   let img=props.img;
  return (
    <>
    <Box className="banner-box">
        <img className='banner-box-img' src={img}/>
    </Box>
    </>
  )
}

export default HomeBanner
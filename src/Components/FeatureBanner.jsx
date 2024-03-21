import React from 'react'
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/material";


const FeatureBanner = ({ props }) => {
    // const { hname, name, img } = props;
    console.log(props)
    return (
        <>
            <Box className="kayna-home-features-banner-box">
                <Grid container className="kayna-home-features-banner-container" sx={{flexDirection:"column"}}>
                    <Grid item className="kayna-home-features-banner-heading">
                        {props[0].name}
                    </Grid>
                    <Grid item className='kayna-home-features-banner-container-flex'>
                        <Grid item className="kayna-home-features-banner-item" lg={2.5} md={6} sx={{ flexDirection: "column" }}>
                            <Box className="home-features-banner-item-box">
                                <img src={props[2].img1} />
                            </Box>
                            <Typography className="kayna-home-features-banner-item-name" sx={{ fontSize: "4rem" }}>
                                <p className="typo-p">{props[1].name1}</p>
                            </Typography>
                        </Grid>
                        <Grid item className="kayna-home-features-banner-item" lg={2.5} md={6} sx={{ flexDirection: "column" }}>
                            <Box className="home-features-banner-item-box">
                                <img src={props[2].img2} />
                            </Box>
                            <Typography className="kayna-home-features-banner-item-name"><p className="typo-p">{props[1].name2}</p></Typography>
                        </Grid>
                        <Grid item className="kayna-home-features-banner-item" lg={2.5} md={6} sx={{ flexDirection: "column" }}>
                            <Box className="home-features-banner-item-box">
                                <img src={props[2].img3} />
                            </Box>
                            <Typography className="kayna-home-features-banner-item-name"><p className="typo-p">{props[1].name3}</p></Typography>
                        </Grid>
                        <Grid item className="kayna-home-features-banner-item" lg={2.5} md={6} sx={{ flexDirection: "column" }}>
                            <Box className="home-features-banner-item-box">
                                <img src={props[2].img4} />
                            </Box>
                            <Typography className="kayna-home-features-banner-item-name"><p className="typo-p">{props[1].name4}</p></Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default FeatureBanner
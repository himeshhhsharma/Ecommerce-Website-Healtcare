import React from 'react'
import { Box } from "@mui/material";
import { Grid, Typography } from "@mui/material";
import Card from './Card';
const CardCart = ({ cardinfo, number }) => {
    return (
        <>
            <Box className="card-cart-heading">
                <Typography className='card-cart-heading-typo' sx={{ fontSize: "2rem" }}>Hair Care Range</Typography>
            </Box>
            <Box className="card-cart-section">
            <Grid container className="card-row">
                {cardinfo.slice(0, number).map((items, index) => {
                    return (
                        <Grid key={index} className="single-card-grid" lg={4} md={6}>
                            <Card cardItems={items} />
                        </Grid>
                    )
                })}
            </Grid>
            </Box>
        </>
    )
}

export default CardCart
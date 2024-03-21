import { Box, Typography } from '@mui/material';
import React from 'react'
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';

const Card = ({ cardItems }) => {
    const [isClicked, setIsClicked] = useState(false);
    return (
        <>
            <div className='single-card-item'>
                {console.log(cardItems)}
                {/* <div>Card</div> */}
                <Box className="img-box">
                    <img src={`${cardItems?.img}`} />
                    <FavoriteIcon
                        className={`wishlist-icon ${isClicked ? 'clicked' : ''}`}
                        onClick={() => setIsClicked(!isClicked)}
                        sx={{ fontSize: "2rem" }}
                    />
                </Box>
                <Box className="card-item-name">

                    <Typography className='single-card-content' sx={{ fontSize: "40px" }}>
                        {cardItems?.name}
                    </Typography>
                </Box>
                <Box>
                    <Typography className='single-card-content' sx={{ color: "rgba(39, 39, 39, 0.767)", fontSize: "1rem", fontWeight: "700" }}>
                        {cardItems?.weight}
                    </Typography>
                    <Typography className='single-card-content' sx={{ color: "rgba(39, 39, 39, 0.767)", fontSize: "1rem", fontWeight: "700" }}>
                        {cardItems?.des}
                    </Typography>
                    <Typography className='single-card-content single-card-price' style={{ color: '#006038', fontSize: "1.4rem", fontWeight: "500", marginTop: "10px", marginBottom: "5px" }}>
                        {cardItems?.price}
                    </Typography>
                </Box>
                <Box>
                    <Grid item>
                        <Button className="login-btn" variant="contained" sx={{
                            color: "white", backgroundColor: "#006038",
                            '&:hover': {
                                backgroundColor: '#fd7e14',
                                color:"#006038",
                                transition: '0.4s ease-in'
                            },
                        }}>Add To Cart</Button>
                    </Grid>
                </Box>
            </div>
        </>
    )
}

export default Card;
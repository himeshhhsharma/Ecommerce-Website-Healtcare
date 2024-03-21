import React, { useState } from 'react';
import { Grid, Typography, Button, IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const KaynaLovedCrousel= ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => prevIndex === 0 ? items.length - 1 : prevIndex - 1);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  return (
    <Grid container justifyContent="center" alignItems="center">
      <IconButton onClick={handlePrev}>
        <ChevronLeftIcon />
      </IconButton>
      <Grid item xs={12} md={8} lg={6}>
        <Grid container justifyContent="center">
          {items.map((item, index) => (
            <Grid
              key={index}
              item
              xs={12}
              style={{
                display: index === activeIndex ? 'block' : 'none',
                textAlign: 'center'
              }}
            >
              {item}
            </Grid>
          ))}
        </Grid>
      </Grid>
      <IconButton onClick={handleNext}>
        <ChevronRightIcon />
      </IconButton>
    </Grid>
  );
};

export default KaynaLovedCrousel;

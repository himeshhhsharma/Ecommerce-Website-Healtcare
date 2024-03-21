import React from "react";
import Card from "./Card";
import { Grid } from "@mui/material";

const CardSection = ({ cardinfo,number }) => {
  return (
    <>
      <Grid container className="card-row">
        {cardinfo.slice(0, number).map((items, index) => (
          <Grid key={index} className="single-card-grid" lg={4} md={6}>
            <Card cardItems={items} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default CardSection;

import React from 'react'
import { Grid, Typography } from '@mui/material';

const AboutContent = ({children}) => {
    return (
      <Grid sx={{ backgroundColor: "#F5F5F5" }} padding={5} xs item>
        <Typography align='center' style={{ color: "#2D2727" }} variant="h5">
          {children}
        </Typography>
      </Grid>
    );
}

export default AboutContent
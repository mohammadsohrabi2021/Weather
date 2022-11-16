import { Grid, Typography } from '@mui/material';
import React from 'react';

const Header = () => {
    return (
        <Grid item xs={12} textAlign={'center'}>
            <Typography variant={'h5'}>
                Weather App
            </Typography>
        </Grid>
    );
};

export default Header;
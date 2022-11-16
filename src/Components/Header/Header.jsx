import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
const Header = () => {
    return (
        <Container>
            <Grid item xs={12} display={'flex'} justifyContent={'space-between'} alignItems={'center'} color={'#fff'} py={2}>
                <Typography variant={'h5'}>
                    {'وضعیت آب و هوا'}
                </Typography>
                <ThunderstormIcon />
            </Grid>
        </Container>
    );
};

export default Header;
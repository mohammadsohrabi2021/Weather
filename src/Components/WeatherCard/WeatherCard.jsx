import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import {Link} from "react-router-dom";

const WeatherCard = () => {
    return (
        <Grid container item xs={12} p={2} dir={'rtl'}>
        <Grid item xs={12} md={3} bgcolor={'primary.main'} borderRadius={2} color={'common.white'} p={2}>
            <Typography variant={'body1'}>
                شهر: {cityWeather.name}
            </Typography>
            <Typography variant={'body1'}>
                سرعت باد: {cityWeather?.wind?.speed}
            </Typography>
            <Typography variant={'body1'}>
                میزان ابری بودن: {cityWeather?.clouds?.all}
            </Typography>
            <Typography variant={'body1'}>
                دما: {cityWeather?.main?.temp}
            </Typography>
            <Typography variant={'body1'}>
                وضعیت هوا: {cityWeather?.weather?.[0]?.description}
            </Typography>
            <Link to={`/weather/${city}`}>
                <Button sx={{bgcolor:'common.white'}}>
                    {'مشاهده 4 روز آینده'}
                </Button>
            </Link>
        </Grid>
    </Grid>
    );
};

export default WeatherCard;
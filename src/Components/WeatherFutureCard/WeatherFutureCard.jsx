import { Grid, Typography } from '@mui/material';
import React from 'react';

const WeatherFutureCard = ({ cityWeatherFuture, index }) => {
    return (
        <Grid item bgcolor={'gray'} xs={12} sm={8} md={5} borderRadius={3} p={2} boxShadow={10} color={'#fff'} m={2} >
            <Grid item>
                <Typography variant={'body1'} pt={5} textAlign={'center'}>
                    وضعیت هوا: {cityWeatherFuture?.[index]?.weather?.[0]?.description}
                </Typography>
            </Grid>
            <Grid item display={'flex'} justifyContent={'space-around'} py={3} >
                <Typography variant={'body1'}>
                    <Typography>
                        {' سرعت باد:'}
                    </Typography>
                    {cityWeatherFuture?.[index]?.wind?.speed}
                </Typography>
                <Typography variant={'body1'}>
                    <Typography>
                        {'میزان ابری بودن:'}
                    </Typography>
                    {cityWeatherFuture?.[index]?.clouds?.all}
                </Typography>
                <Typography variant={'body1'}>
                    <Typography>
                        {'دما:'}
                    </Typography>
                    {cityWeatherFuture?.[index]?.main?.temp}
                </Typography>
            </Grid>

        </Grid>

    );
};

export default WeatherFutureCard;
import { Grid, Typography } from '@mui/material';
import React from 'react';
import background from '../../assets/image/image3.jpg'

const WeatherFutureCard = ({ cityWeatherFuture, index }) => {
    const Styles = {
        paperContainer: {
            height: 200,
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }
    };
    return (
        <Grid  item sx={Styles.paperContainer} xs={12} sm={8} md={5} borderRadius={3} p={2} boxShadow={10} color={'#fff'} m={2} >
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
                    {cityWeatherFuture?.[index]?.wind?.speed}m/s
                </Typography>
                <Typography variant={'body1'}>
                    <Typography>
                        {'میزان ابری بودن:'}
                    </Typography>
                    {cityWeatherFuture?.[index]?.clouds?.all}%
                </Typography>
                <Typography variant={'body1'}>
                    <Typography>
                        {'دما:'}
                    </Typography>
                    {cityWeatherFuture?.[index]?.main?.temp}°C 
                </Typography>
            </Grid>

        </Grid>

    );
};

export default WeatherFutureCard;
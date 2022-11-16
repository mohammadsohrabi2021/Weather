import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from "react-router-dom";
import background from '../../assets/image/sunset.jpg'

const WeatherCard = ({ cityWeather, city }) => {
    const styles = {
        paperContainer: {
            height: 300,
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }
    };
    return (
        <Grid container item xs={12} p={2} display={'flex'} justifyContent={'center'}>
            <Grid item xs={12} sm={6} md={5} borderRadius={2} sx={styles.paperContainer} p={2}>
                <Typography variant={'body1'} textAlign={'center'} pt={2}>
                    {cityWeather.name}
                </Typography>
                <Typography variant={'body1'} pt={5} textAlign={'center'}>
                    وضعیت هوا: {cityWeather?.weather?.[0]?.description}
                </Typography>
                <Grid item display={'flex'} justifyContent={'space-around'} py={3} boxShadow={10} borderRadius={3}>
                    <Typography variant={'body1'}>
                        <Typography>
                            {' سرعت باد:'}
                        </Typography>
                        {cityWeather?.wind?.speed}
                    </Typography>
                    <Typography variant={'body1'}>
                        <Typography>
                            {'میزان ابری بودن:'}
                        </Typography>
                        {cityWeather?.clouds?.all}
                    </Typography>
                    <Typography variant={'body1'}>
                        <Typography>
                            {'دما:'}
                        </Typography>
                        {cityWeather?.main?.temp}
                    </Typography>
                </Grid>
                <Grid display={'flex'} justifyContent={'center'} mt={2} >
                    <Link to={`/weather/${city}`}>
                        <Button variant='outlined' sx={{color:'#000',fontWeight:'bold'}}>
                            {'مشاهده 4 روز آینده'}
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default WeatherCard;
import { Button, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { handleGetFiveDayWeather } from '../../Api/Api'
import WeatherFutureCard from '../../Components/WeatherFutureCard/WeatherFutureCard'
import Header from '../../Components/Header/Header'
import { styles } from '../../Data/DataBackground'
const daysIndex = [0, 8, 16, 24, 32]


const SinglePage = () => {
    const [cityWeatherFuture, setCityWeatherFuture] = useState({})
    const { city } = useParams()

    const handleGetData = async () => {
        const data = await handleGetFiveDayWeather(city)
        setCityWeatherFuture(data)
    }

    useEffect(() => {
        handleGetData()
    }, [])

    return (
        <Grid>
            <Header />

            <Grid xs={12} sx={styles.paperContainer} display={'flex'} flexDirection={'column'} pt={3}>
                <Container>
                    <Typography variant='h3'>
                        {city}
                    </Typography>
                    <Typography variant='h6' py={3}>
                        {'آب و هوای چند روز آینده'}
                    </Typography>
                    <Link to={'/'}>
                        <Button variant='outlined'>
                            {'بازگشت به صفحه اصلی'}
                        </Button>
                    </Link>
                </Container>
            </Grid>
            <Grid>
                {daysIndex.map(index => <WeatherFutureCard key={index} index={index}
                    cityWeatherFuture={cityWeatherFuture} />)}
            </Grid>
        </Grid>
    )
};

export default SinglePage;
import { Grid } from '@mui/material';
import React,{useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {handleGetFiveDayWeather} from '../../Api/Api'
import WeatherFutureCard from '../../Components/WeatherFutureCard/WeatherFutureCard'


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
            <Grid>
                {city}
            </Grid>
            <Grid>
                {daysIndex.map(index => <WeatherFutureCard key={index} index={index}
                    cityWeatherFuture={cityWeatherFuture} />)}
            </Grid>
        </Grid>
    )
};

export default SinglePage;
import { Grid,CircularProgress } from '@mui/material';
import React,{useEffect, useState} from 'react';
import {handleGetOneDayWeather} from '../../Api/Api'
import Header from '../../Components/Header/Header'
import SelectCity from '../../Components/SelectCity/SelectCity'
import WeatherCard from '../../Components/WeatherCard/WeatherCard'

const Home = () => {
    const [loading, setLoading] = useState(true)
    const [city, setCity] = useState('tehran');
    const [cityWeather, setCityWeather] = useState({})

    const handleGetData = async () => {
        const data = await handleGetOneDayWeather(city)
        setCityWeather(data)
        setLoading(false)
    }

    useEffect(() => {
        handleGetData()
    }, [city])
    if (loading) {
        return <Grid container item xs={12} alignItems={'center'} justifyContent={'center'} mt={5}>
            <CircularProgress />
        </Grid>
    }
    return(
        <Grid container>
            <Header/>
            <SelectCity currency={city} setCurrency={setCity}/>
            <WeatherCard cityWeather={cityWeather} city={city}/>
        </Grid>
    )
};

export default Home;
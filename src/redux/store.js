import { configureStore } from '@reduxjs/toolkit';
import  WeatherSlice  from './reducer/reducer';
export const store = configureStore({
    reducer: {
        weather:WeatherSlice
    },
  })

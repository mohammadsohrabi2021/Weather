import { createSlice } from "@reduxjs/toolkit";
const initialState = []
export const WeatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        addCity: (state, action) => {
            state.push(action.payload)
        },
        deleteCity: (state, action) => {
            const index = state.findIndex(city => city.name === action.payload)
            state.splice(index, 1)
        }
    }
})
export const { addCity, deleteCity } = WeatherSlice.actions
export default WeatherSlice.reducer
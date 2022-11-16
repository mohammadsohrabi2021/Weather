import { Grid, TextField } from '@mui/material';
import React from 'react';
import Cities from '../../Data/Data'
const SelectCity = ({city, setCurrency}) => {

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    return (
        <Grid item xs={12} textAlign={'center'}>
             <TextField select value={city} onChange={handleChange} SelectProps={{native: true}} variant="filled">
                {Cities.map((c) => (
                    <option key={c.title} value={c.title}>
                        {c.name}
                    </option>
                ))}
            </TextField>
        </Grid>
    );
};

export default SelectCity;
import { Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { Cities } from '../../Data/Data'
import background from '../../assets/image/sunset.jpg'
const SelectCity = ({ city, setCurrency }) => {

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };
    const styles = {
        paperContainer: {
            height: 300,
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }
    };

    return (
        <Grid item container xs={12} sx={styles.paperContainer} display={'flex'} flexDirection={'column'} pt={3}>
            <Container>
                <Grid item>
                    <Typography variant='h3'>
                        {'شهر های ایران'}
                    </Typography>
                </Grid>
                <Grid item  py={2}>
                    <Typography>
                        {'شهر های مورد نظر خود را جهت مشاهده وضعیت آب و هوا مشاهده کنید!'}
                    </Typography>
                </Grid>
                <Grid>
                    <TextField  sx={{width:'40%'}} select value={city} onChange={handleChange} SelectProps={{ native: true }} variant="filled" >
                        {Cities.map((c) => (
                            <option key={c.title} value={c.title}>
                                {c.name}
                            </option>
                        ))}
                    </TextField>
                </Grid>
            </Container>
        </Grid>
    );
};

export default SelectCity;
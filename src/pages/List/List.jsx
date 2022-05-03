import MultiActionAreaCard from '../../components/Card/Card';
import { Grid } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

const List = () => {
  const cars = useSelector((state) => state.cars);

  return (
    <Grid container marginY={2}>
      {cars.map((car, index) => (
        <Grid key={index} item xs={12} md={6} lg={4}>
          <Grid margin={2}>
            <MultiActionAreaCard path={car.url} name={car.name} />
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
}

export default List;
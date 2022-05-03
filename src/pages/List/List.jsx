import MultiActionAreaCard from '../../components/Card/Card';
import { Grid } from '@mui/material';
import React from 'react';
// import { useSelector } from 'react-redux';


const List = () => {
  // const cars = useSelector((state) => state.cars);

  const cars = [
    {
      name: 'Ferrari',
      url:
        'https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },
    {
      name: 'Mercedes',
      url:
        'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },
    {
      name: 'Audi',
      url:
        'https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    }
  ];

  return (
    <Grid container marginY={2}>
      {cars.map((car, index) => (
        <Grid key={index} item xs={12} md={6} lg={4}>
          <Grid margin={2}>
            <MultiActionAreaCard path={car.url} name={car.name}/>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
}

export default List;
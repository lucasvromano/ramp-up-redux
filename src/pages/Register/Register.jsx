import React from 'react';
import { useState } from 'react';
import { TextField, Button, Box, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addCar } from '../../store/cars/index';
import { hideMessage, showMessage } from '../../store/layout/index';

const emptyFormValue = {
  url: '',
  name: ''
}

const Register = () => {
  const [formData, setFormData] = useState(emptyFormValue);
  const dispatch = useDispatch();

  const handleFormData = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(addCar(formData));
    setFormData(emptyFormValue);
    dispatch(showMessage());

    setTimeout(() => {
      dispatch(hideMessage());
    }, 3000)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        marginY={6}>

        <Grid item xs={8}>
          <h2>Registrar Veículo</h2>

          <Box marginBottom={2}>
            <TextField
              fullWidth
              onChange={handleFormData}
              value={formData.url}
              name="url"
              label={"Url da Imagem"}
            />
          </Box>

          <Box marginBottom={2}>
            <TextField
              fullWidth
              onChange={handleFormData}
              value={formData.name}
              name="name"
              label={"Nome"}
            />
          </Box>

          <Button type='submit'>Salvar</Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default Register;
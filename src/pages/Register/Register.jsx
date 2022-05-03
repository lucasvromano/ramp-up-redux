import React from 'react';
import { useState } from 'react';
import { TextField, Button, Box, Grid } from '@mui/material';

const emptyFormValue = {
  url: '',
  name: ''
}

const Register = () => {
  const [formData, setFormData] = useState(emptyFormValue);

  const handleFormData = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData);
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
import * as React from 'react';
import { useSelector } from 'react-redux';

import { Alert } from '@mui/material';

const AlertMessage = () => {

  const isShow = useSelector(state => state.layout.showMessage);

  return (
    <>
      {isShow && (
        <Alert severity="success">
          Cadastro realizado com sucesso!
        </Alert>
      )}
    </>
  );
}


export default AlertMessage;
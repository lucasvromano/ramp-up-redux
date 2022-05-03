import AppBar from './components/AppBar/AppBar';
// import Button from '@mui/material/Button';
// import List from './pages/List/List';

import RouterConfig from './pages/routes';

import './App.css';

const App = () => {
  return (
    <>
      <AppBar />
      <RouterConfig />
    </>
  );
}

export default App;

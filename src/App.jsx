import AppBar from './components/AppBar/AppBar';
import AlertMessage from './components/AlertMessage/AlertMessage';
import RouterConfig from './pages/routes';

import './App.css';

const App = () => {
  return (
    <>
      <AppBar />
      <AlertMessage />
      <RouterConfig />
    </>
  );
}

export default App;

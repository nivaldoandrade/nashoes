import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';

import Routes from './routes';

import { store, persistor } from './store';

import { Header } from './components/Header';

import GlobalStyle from './styles/global';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Header />
          <Routes />
          <ToastContainer theme="dark" autoClose={2500} />
        </PersistGate>
        <GlobalStyle />
      </Provider>
    </BrowserRouter>
  );
}

export default App;

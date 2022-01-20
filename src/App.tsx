import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Routes from './routes';

import store from './store';

import { Header } from './components/Header';

import GlobalStyle from './styles/global';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <Routes />
        <GlobalStyle />
      </Provider>
    </BrowserRouter>
  );
}

export default App;

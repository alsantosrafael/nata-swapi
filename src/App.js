import { BrowserRouter } from 'react-router-dom';
import { GlobalStorage } from './GlobalContext';
import GlobalStyle from './styles/global';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <GlobalStorage>
        <GlobalStyle />
        <Routes />
      </GlobalStorage>
    </BrowserRouter>
  );
}

export default App;

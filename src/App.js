import { ThemeProvider } from 'styled-components'

import GlobalStyles from './styles';
import dark from './styles/themes/dark'

// import Database from './firebase/firebase'

import Routes from './routes';

function App() {
  

  return (
    <ThemeProvider theme={dark}>
        <GlobalStyles />
        <Routes />
    </ThemeProvider>
  );
}

export default App;

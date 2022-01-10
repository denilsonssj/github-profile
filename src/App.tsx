import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'styles/GlobalStyle';
import mainTheme from 'styles/theme/main';
import Router from 'Router';

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;

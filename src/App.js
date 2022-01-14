import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import { Container } from './components/styles/Container.styled';
import GlobalStyles from './components/styles/Global';

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '003333',
  },
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          <h1>hellooo</h1>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;

import React from 'react';
import { Content } from './components/Content';
import styled,{ThemeProvider} from 'styled-components';
import {useDarkMode} from './styles/useDarkMode'
import { Toggle } from './components/Toggle';
import { Globalstyles, lightTheme, darkTheme} from './styles/Globalstyles';

const Container = styled.div`
  max-width: 50%;
  margin: 8rem auto 0;
`

function App() {

  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme ==='light' ? lightTheme : darkTheme

  return (
    <ThemeProvider theme={themeMode}>
    <Container>
      <Globalstyles />
      <Toggle theme={theme} toggleTheme={toggleTheme} />
      <Content theme={theme} toggleTheme={toggleTheme}/>
    </Container>
    </ThemeProvider>
  );
}

export default App;

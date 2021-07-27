import { ThemeProvider } from 'styled-components';

import Header from '../Header';

import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';

import * as S from './styles';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <S.Container>
        <Header />
      </S.Container>
    </ThemeProvider>
  );
}

export default App;

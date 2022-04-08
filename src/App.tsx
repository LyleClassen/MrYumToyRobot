import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import Home from './pages/Home/Home';

const theme = createTheme({
  typography: {
    fontFamily: ['"Nunito"', 'sans-serif'].join(','),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
}

export default App;

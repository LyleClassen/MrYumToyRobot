import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import Home from './pages/Home/Home';

const theme = createTheme({
  palette: {
    primary: {
      main: '#53f',
    },
  },
  typography: {
    fontFamily: ['"Nunito"', 'sans-serif'].join(','),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '15px 25px',
          borderRadius: '6px',
          fontWeight: 'bold',
          fontSize: '1rem',
          lineHeight: '1.111em',
          letterSpacing: '.0.5em',
        },
      },
    },
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

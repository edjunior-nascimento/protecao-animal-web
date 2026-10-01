import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import RouterApp from './router';
import theme from './theme';
import "yet-another-react-lightbox/styles.css";


export function App() {   
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterApp />
    </ThemeProvider>
  );
}

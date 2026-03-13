import { createTheme } from '@mui/material/styles';

// Tema customizado para a aplicação de proteção animal
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#27A8AD', // Verde para ações principais
      light: '#27A8AD',
      dark: '#27A8AD',
    },
    secondary: {
      main: '#777575', // Cinza para ações secundárias
      light: '#777575',
      dark: '#777575',
    },
    background: {
      default: '#000000',
      paper: '#efefef',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0b0b0',
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          marginTop: 150,
          marginLeft: 50,
          marginRight: 50,
        }
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontFamily: 'Jockey One, Arial, sans-serif',
          color: '#27A8AD',
        },
        h2: {
          fontFamily: 'Jockey One, Arial, sans-serif',
          color: '#27A8AD',
        },
        h3: {
          fontFamily: 'Jockey One, Arial, sans-serif',
          color: '#27A8AD',
        },
        h4: {
          fontFamily: 'Jockey One, Arial, sans-serif',
          color: '#27A8AD',
        },
        h5: {
          fontFamily: 'Jockey One, Arial, sans-serif',
          color: '#27A8AD',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'Jockey One, Arial, sans-serif',
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 400,
          color: '#FFFFFF'
        },
        outlined: {
            borderColor: '#27A8AD',
            color: '#27A8AD'
        }
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
        },
      },
    },
    MuiPaper: {
       styleOverrides: {
        root: {
            fontFamily: 'Arial, sans-serif',
            color: '#27A8AD',
        },
      }, 
    }
  },
});

export default theme;
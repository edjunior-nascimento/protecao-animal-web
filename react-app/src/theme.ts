import { colors } from '@mui/material';
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
      default: '#1e1e1e',
      paper: '#efefef',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0b0b0',
    },
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: false,
      },
      styleOverrides: {
        root: {
          padding: 0,
          marginTop: 150,
          marginLeft: 0,
          marginRight: 0,
        },
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
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: 15,
        },
        icon: {
          color: '#545252',
        },
        select: {
          color: '#545252',
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 15,
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: '#545252',
          },
          "&:hover .MuiOutlinedInput-notchedOutline": { 
            borderColor: '#545252',
          },
        },
      },
    }
  }
});

export default theme;
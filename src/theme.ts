import { createTheme } from "@mui/material/styles";

// Tema customizado para a aplicação de proteção animal
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#27A8AD", // Verde para ações principais
      light: "#27A8AD",
      dark: "#27A8AD",
    },
    secondary: {
      main: "#777575", // Cinza para ações secundárias
      light: "#777575",
      dark: "#777575",
    },
    background: {
      default: "#1e1e1e",
      paper: "#efefef",
    },
    text: {
      primary: "#ffffff",
      secondary: "#b0b0b0",
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
          fontFamily: "Jockey One, Arial, sans-serif",
          fontSize: "35px",
          color: "#27A8AD",
          height: "400",
        },
        h2: {
          fontFamily: "Jockey One, Arial, sans-serif",
          fontSize: "25px",
        },
        h3: {
          fontFamily: "Jockey One, Arial, sans-serif",
          fontSize: "18px",
        },
        body2: {
          fontFamily: "Arial, sans-serif",
          size: "16px",
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "Jockey One, Arial, sans-serif",
          borderRadius: 8,
          textTransform: "none",
          fontWeight: 400,
          color: "#FFFFFF",
        },
        outlined: {
          borderColor: "#27A8AD",
          color: "#27A8AD",
        },
        sizeSmall: {
          fontSize: "16px",
        },
        sizeMedium: {
          fontSize: "18px",
        },
        sizeLarge: {
          fontSize: "20px",
        },
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          fontFamily: "Arial, sans-serif",
          color: "#27A8AD",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: 15,
          fontSize: "18px",
        },
        icon: {
          color: "#545252",
        },
        select: {
          color: "#545252",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontSize: "18px",
          borderRadius: 15,
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#545252",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#545252",
          },
        },
      },
    },
  },
});

export default theme;

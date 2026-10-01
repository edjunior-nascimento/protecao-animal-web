
import { Box, Card, Typography } from "@mui/material";

type CardAnimalProps = {
  nome: string;
  cidade: string;
  imagem: string;
  adotado?: boolean;
  onClick?: () => void;
};

export function CardAnimal({ nome, cidade, imagem, onClick, adotado = false }: CardAnimalProps) {

  return (
    <Card
  onClick={onClick}
  sx={{
    cursor: onClick ? "pointer" : "default",
    width: { xs: "100%", md: "100%" },
    height: { xs: "189px", md: "420px" },
    bgcolor: "#FFFFFF",
  }}
>
  <Box sx={{ position: "relative" }}>
    <Box
      component="img"
      src={imagem}
      sx={{
        width: "100%",
        height: { xs: "135px", md: "300px" },
        display: "block",
        objectFit: "cover",
      }}
    />

    {adotado && (
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          bgcolor: "#FFAC0C",
          py: 0.5,
          textAlign: "center",
          color: "white",
        }}
      >
        <Typography variant="h6">ADOTADO</Typography>
      </Box>
    )}
  </Box>

  <Box
    sx={{
      gap: 0.5,
      justifyContent: "flex-start",
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      pt: { xs: 0.5, md: 1 },
      px: 1,
    }}
  >
    <Typography
      variant="h6"
      sx={{
        fontSize: { xs: "0.8rem", md: "1.25rem" },
        textAlign: "center",
      }}
    >
      {nome}
    </Typography>

    <Typography
      sx={{
        color: "#000000",
        fontSize: { xs: "0.7rem", md: "1rem" },
        textAlign: "center",
        marginTop: "5px",
      }}
    >
      {cidade}
    </Typography>
  </Box>
</Card>
  );
}

import { Box, Card, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

type CardAnimalProps = {
  nome: string;
  cidade: string;
  imagem: string;
  adotado: boolean;
  onClick?: () => void;
};

export function CardAnimal({ nome, cidade, imagem, onClick, adotado = false }: CardAnimalProps) {

  return (
    <Card onClick={onClick}
      sx={{ cursor: "pointer", width: "px", height: "350px", bgcolor: "#FFFFFF" }}
    >
      <Box sx={{ position: "relative" }}>
        <Box
          component="img"
          src={imagem}
          sx={{ height: "250px", width: "100%", display: "block", objectFit: "cover" }}
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
      <Box sx={{ gap: 0.5, justifyContent: "flex-start", ml: 2, alignItems: "center", display: "flex", flexDirection: "column", pt: 1 }}>
        <Typography variant="h6" sx={{ mt: 0 }}>{nome}</Typography>
        <Typography sx={{ color: "#000000", mt: 0.25 }}>{cidade}</Typography>
      </Box>


    </Card >
  );
}

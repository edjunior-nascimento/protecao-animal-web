import React from "react";
import { Box, Container, Typography } from "@mui/material";

export function SobrePage() {
  return (
    <Container sx={{ml: {xs: "20px"}, mr: {xs: "20px"}}}>
      <Box
        sx={{
          px: 3,
          height: { xs: "550px", md: "650px" },
          display: "flex",
          justifyContent: "space-between",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${process.env.PUBLIC_URL}/assets/background_black.png)`,
        }}
      >
        <Box
          component="img"
          src="./assets/cao_gato.png"
          alt="Cão e Gato"
          sx={{ width: "100%", objectFit: "contain" }}
        ></Box>
      </Box>

      <Box
  sx={{
    display: "flex",
    flexDirection: { xs: "column-reverse", md: "row" },
    alignItems: "center",
    justifyContent: "space-between",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/background_black.png)`,
    padding: { xs: "24px 16px", md: "48px" }, // Espaçamento interno responsivo
  }}
>
  <Box sx={{ width: { xs: "100%", md: "55%" } }}>
    <Typography 
      variant="h1" 
      component="h1" 
      sx={{ mb: "27px", fontSize: "30px" }} 
    >
      Quem somos
    </Typography>
    
    <Typography variant="body2" sx={{ fontSize: "20px", mb: "24px" }}>
      Somos a Proteção Animal, uma ONG dedicada a resgatar, cuidar e
      transformar a vida de animais em situação de vulnerabilidade.
      Trabalhamos com amor e dedicação para oferecer um novo começo a cães
      e gatos abandonados ou vítimas de maus-tratos, promovendo sua saúde,
      bem-estar e reintegração em lares amorosos. Nosso propósito vai além
      do resgate. Atuamos para conscientizar a sociedade sobre a
      importância da adoção responsável, do controle populacional e do
      combate ao abandono. Com a ajuda de doadores, voluntários e
      apoiadores como você, seguimos construindo um futuro mais digno para
      os animais.
    </Typography>
    
    <Typography variant="h4" component="h4">
      Junte-se a nós nessa missão de amor e esperança!
    </Typography>
  </Box>

  {/* Caixa da Imagem */}
  <Box
    component="img"
    src="./assets/sobre.png"
    alt="Equipe Proteção Animal"
    sx={{ 
      width: { xs: "100%", md: "40%" },
      objectFit: "contain",
      mb: { xs: "70px", md: "0" }, 
    }}
  />
</Box>
    </Container>
  );
}

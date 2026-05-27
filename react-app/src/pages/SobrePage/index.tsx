import React from "react";
import { Box, Container, Typography } from "@mui/material";

export const SobrePage: React.FC = () => {   
  return (
    <Container>
      <Box
        sx={{
            px: 3,
            height: { xs: '550px', md: '650px' }, 
            display: 'flex',
            justifyContent: 'space-between',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/background_black.png)` }}
      >
        <Box component="img" src="./assets/cao_gato.png" alt="Cão e Gato" 
        sx={{ width: '100%', objectFit: 'contain'}}></Box>
      </Box>

      <Box
         sx={{
            display: 'flex',
            justifyContent: 'space-between',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/background_black.png)` }}
      >
        <Box>
          <Typography variant="h4" component="h4">
            Quem somos
          </Typography>
          <Typography sx={{ fontSize: '1.3rem' }}>
              Somos a Proteção Animal, uma ONG dedicada a resgatar, cuidar e transformar a vida de animais em situação de vulnerabilidade. Trabalhamos com amor e dedicação para oferecer um novo começo a cães e gatos abandonados ou vítimas de maus-tratos, promovendo sua saúde, bem-estar e reintegração em lares amorosos.
              Nosso propósito vai além do resgate. Atuamos para conscientizar a sociedade sobre a importância da adoção responsável, do controle populacional e do combate ao abandono.
              Com a ajuda de doadores, voluntários e apoiadores como você, seguimos construindo um futuro mais digno para os animais. 
          </Typography>
          <Typography variant="h4" component="h4">
            Junte-se a nós nessa missão de amor e esperança!
          </Typography>
        </Box>
        <Box component="img" src="./assets/sobre.png" alt="Equipe Proteção Animal" 
        sx={{ width: '100%', objectFit: 'contain'}}></Box>
   
      </Box>

    </Container>
  );
}
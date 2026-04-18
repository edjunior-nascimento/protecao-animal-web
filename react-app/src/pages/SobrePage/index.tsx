import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { CardParceiro } from "../../components/features/CardParceiro";
import { EmailOutlined, WhatsApp } from "@mui/icons-material";

export const SobrePage: React.FC = () => {   
  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', px: { xs: 5, md: 20 }, gap: '70px' }}>
      <Box
        sx={{
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
            flexDirection: { xs: 'column-reverse', md: 'row' },
            justifyContent: 'center',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            boxShadow: '0 4px 40px rgb(0, 0, 0)',
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/background_black.png)`,
            px: { xs: 3, md: 8 },
            py: 4,
            gap: 4,          
          }}

      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, width: { xs: '100%', md: '50%' } }}>
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
        sx={{ width: { xs: '100%', md: '50%' }, objectFit: 'contain'}}></Box>
   
      </Box>

      <Box
        sx={{ display: 'flex', flexDirection: 'column', gap:4, alignItems: 'center'}}
      >
          <Typography variant="h4" component="h4">
             Parceiros
          </Typography>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center', mt: 2 }}>
            <CardParceiro />
            <CardParceiro />
            <CardParceiro />
            <CardParceiro />
            <CardParceiro />
            <CardParceiro />
            <CardParceiro />
            <CardParceiro />
            <CardParceiro />
          </Box>
      </Box>

      <Box
        sx={{
          p: 8,
          borderRadius: 10,
          border: '5px solid #994900',
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          alignItems: 'center',
        }}
      >
          <Typography variant="h4" component="h4" color="white">
            Junte-se a nós e faça a diferença!
          </Typography>
          <Typography variant="h5" component="h5">
            Se você acredita na nossa missão e quer contribuir para transformar a vida de animais em situação de vulnerabilidade, torne-se um voluntário ou parceiro da Proteção Animal!
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
            <Box>
              <Typography variant="h5" component="h5" color="white">
                Como voluntário, você pode:
              </Typography>
              <Typography sx={{ fontSize: '1.3rem' }} color="#777575">
                <ul>
                  <li>Ajudar nos cuidados dos animais.</li>
                  <li>Participar de feiras de adoção.</li>
                  <li>Apoiar nas campanhas de conscientização.</li>
                  <li>Ajudar na divulgação nas redes sociais.</li>
                </ul>
              </Typography>

            </Box>
            <Box>
              <Typography variant="h5" component="h5" color="white">
                Como parceiro, você pode:
              </Typography>
              <Typography sx={{ fontSize: '1.3rem' }} color="#777575">
                <ul>
                  <li>Contribuir com recursos ou serviços essenciais.</li>
                  <li>Ajudar a promover nossa causa e ampliar nosso impacto.</li>
                </ul>
              </Typography>

            </Box>
          </Box>
          <Typography sx={{ fontSize: '1.4rem' }} color="#777575" >
          Entre em contato com a gente e descubra como fazer parte dessa corrente de amor! <br/>
          Juntos, podemos salvar ainda mais vidas. Envie uma mensagem ou e-mail para:
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 5}}>
            <Box display={"flex"} alignItems={"center"} gap={1} sx={{width:'50%'}}>
              <EmailOutlined />
              <Typography sx={{ fontSize: '1.3rem' }} color="white">
                protecaoanimal@gmail.com
              </Typography>
            </Box>
            <Box display={"flex"} alignItems={"center"} gap={1} sx={{width:'50%'}}>
              <WhatsApp />
              <Typography sx={{ fontSize: '1.3rem' }} color="white">
                (88)999309-9381
              </Typography>
            </Box>
          </Box>
          <Typography variant="h5" component="h5" color="white">
            Obrigado por querer fazer a diferença! 
          </Typography>
      </Box>

    </Container>
  );
}
import { Link } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import { CarrosselGaleria } from '../../components/layout/CarrosselGaleria';


  let galeriaMock = [
    {
      codigo: '1',
      nome: 'Evento 1',
      foto: ''
    },
    {
      codigo: '2',
      nome: 'Evento 2',
      foto: ''
    },
    {
      codigo: '3',
      nome: 'Evento 3',
      foto: ''
    },
    {
      codigo: '4',
      nome: 'Evento 4',
      foto: ''
    },
  ]


export const InicialPage: React.FC = () => {   
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <Box>
        <Box sx={{position: 'absolute', width:'100%', height:'30%', backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 100%)'}} />
        <Box sx={{
            px: 3,
            height: { xs: '550px', md: '650px' }, 
            display: 'flex',
            justifyContent: 'space-between',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/banner_inicial.jpg)` }} 
        >
          <Box sx={{
            width: '35%',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: 2,
          }}>
            <Typography variant="h4" component="h4" sx={{color:'#994900'}}>
              "Doe esperanças, doe para salvar vidas."
            </Typography>
            <Button size='large' variant="contained" color="primary">FAÇA SUA DOAÇÃO</Button>
          </Box>
        </Box>
      </Box>
      <Box 
        sx={{ 
            display: {  md: 'flex', xs: 'block' }, 
            flexDirection: 'row',
            alignItems: 'center',
          }}
      >
        <Box px={5} sx={{ width: {md: '50%', xs: '100%'}, display: 'flex', flexDirection: 'column'}}>
          <Typography sx={{ fontSize: '1.3rem' }}>
              Nossa ONG sobrevive graças à generosidade de 
              pessoas como você, que acreditam no poder da 
              solidariedade. Seja adotando, doando ou se 
              voluntariando, cada gesto faz a diferença na 
              construção de um futuro mais digno para os 
              animais.
          </Typography>
          <Box component="img" src="/assets/patas-marrom.png" sx={{ maxWidth: '64px'}} alt="patas animal" />
        </Box>
        <Box sx={{width: {md: '50%', xs: '100%'}, display:"flex", alignItems: 'start'}} component="img" src="/assets/gatosobrenos.png" />
      </Box>
      <Box sx={{ textAlign: 'center', display:'flex', flexDirection:'column', gap: 4,}}>
        <Typography variant="h4" component="h4">
          Quer Ajudar?
        </Typography>
        <Box px={10} sx={{ height: {md:'400px'}, display: 'flex', flexDirection: { md: 'row', xs: 'column' }, justifyContent: 'center', gap: 3, textAlign: 'center'}}>
            <Link style={{ display:'flex', alignItems: 'end', justifyContent: 'center'}} to="/sobre">
              <Box component="img" sx={{maxWidth:'220px'}} src="/assets/botao_adote.png" alt="Adote" />
            </Link>
            <Link style={{ display:'flex', alignItems: 'start', justifyContent: 'center' }} to="/sobre">
              <Box component="img" sx={{maxWidth:'220px'}} src="/assets/botao_doe.png" alt="Doe" />
            </Link>
            <Link style={{ display:'flex', alignItems: 'end', justifyContent: 'center' }} to="/sobre">
              <Box component="img" sx={{maxWidth:'220px'}} src="/assets/botao_voluntario.png" alt="Seja voluntário" />
            </Link>
        </Box>
      </Box>
      <Box sx={{ textAlign: 'center', display:'flex', flexDirection:'column', gap: 4,}}>
        <Typography variant="h4" component="h4">Galeria de fotos</Typography>

        <Box>
          <CarrosselGaleria galeria={galeriaMock} ></CarrosselGaleria>
        </Box>

      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center ', px: 5, }}>
        <Box 
          component="img" 
          src='./assets/patas-azul.png' 
          alt="Patas Azul" 
          sx={{ 
            width: 200, 
            height: 200, 
            objectFit: 'cover', 
          }} />
      </Box>
    </Box>
  );
}
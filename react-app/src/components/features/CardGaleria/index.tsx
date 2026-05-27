
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import React from 'react';

type PropsCardGaleria = {
  codigo: number,
  nome: string,
  foto: string
}
export const CardGaleria: React.FC<PropsCardGaleria> = ({ codigo, nome, foto }) => {

  foto =  foto ? foto : './assets/sem_imagem.png';

  return (
     <Link to={`/detalhes/${codigo}`} style={{ textDecoration: 'none' }}>
      <Box sx={{ 
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '8px',
          left: '8px',
          width: '100%',
          height: '100%',
          backgroundColor: '#e0e0e0',
          borderRadius: 1,
          zIndex: -1,
        }
      }}>
        <Card sx={{ 
          maxWidth:'300px', 
          borderRadius: 1,
          position: 'relative',
          backgroundColor: 'white',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <CardActionArea>
            <CardContent sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              textAlign: 'center', 
              gap: 3 
            }}>
              <Box 
                component="img" 
                src={foto} 
                alt={nome} 
                sx={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover', 
                }} 
              />
              <Typography sx={{ color: 'black'}}>
                {nome}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </Link>
  );
}
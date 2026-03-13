
import React, { useEffect } from 'react';
import {
  Box,
  Button,
} from '@mui/material';
import {ChevronRight, ChevronLeft, } from '@mui/icons-material';
import { CardGaleria } from '../../features/CardGaleria';

let indice:number = 0;
let tamanho:number = 3;

export const CarrosselGaleria: React.FC<{ galeria: any[] }> = ({galeria}) => {
  
  const [galeriaState, setGaleriaState] = React.useState(galeria);
  const [isMobile] = React.useState(window.innerWidth < 800);
    
  useEffect(() => {
    carregarGaleria();
  });

  useEffect(() => {
   tamanho = isMobile ? 1 : 3;
    carregarGaleria();
  }, [isMobile]);
  
  function botaoProximo() {
    indice++;
    carregarGaleria();
  }

  function botaoAnterior() {
    indice--;
    carregarGaleria();
  }

  function carregarGaleria() {
    let inicio = indice;
    let fim = indice + tamanho;
    let listaGaleriaVisivel = galeria.slice(inicio, fim);
    setGaleriaState(listaGaleriaVisivel);
  }
  
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
      <Button onClick={botaoAnterior} disabled={indice <= 0}>
        <ChevronLeft fontSize="large" color="primary" />
      </Button>  
      <Box sx={{display: 'flex', gap:3}}> 
        {
          galeriaState.map((item) => (
            <CardGaleria key={item.codigo} codigo={item.codigo} nome={item.nome} foto={item.foto}></CardGaleria>
          ))
        }
      </Box>    
      <Button onClick={botaoProximo} disabled={indice + tamanho >= galeria.length}>
        <ChevronRight fontSize="large" color="primary" />
      </Button>
    </Box>
  );
}
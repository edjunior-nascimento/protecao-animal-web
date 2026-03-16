
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import {
  Box,
  Button,
} from '@mui/material';
import {ChevronRight, ChevronLeft, } from '@mui/icons-material';
import { CardGaleria } from '../../features/CardGaleria';

export const CarrosselGaleria: React.FC<{ galeria: any[] }> = ({galeria}) => {
  
  const [indice, setIndice] = useState(0);
  const isMobile = useMemo(() => window.innerWidth < 800, []);
  const tamanho = isMobile ? 1 : 3;
  
  const galeriaVisivel = useMemo(() => {
    const inicio = indice;
    const fim = indice + tamanho;
    return galeria.slice(inicio, fim);
  }, [galeria, indice, tamanho]);
  
  const botaoProximo = useCallback(() => {
    setIndice(prevIndice => prevIndice + 1);
  }, []);

  const botaoAnterior = useCallback(() => {
    setIndice(prevIndice => prevIndice - 1);
  }, []);

  useEffect(() => {
    setIndice(0);
  }, [galeria]);
  
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
      <Button onClick={botaoAnterior} disabled={indice <= 0}>
        <ChevronLeft fontSize="large" color="primary" />
      </Button>  
      <Box sx={{display: 'flex', gap:3}}> 
        {
          galeriaVisivel.map((item) => (
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
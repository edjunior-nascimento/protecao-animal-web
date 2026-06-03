import React from "react";
import { Container } from "@mui/material";
import { useParams } from "react-router-dom";

export const DetalhesAdocaoPage: React.FC = () => {
  const { codigo } = useParams();

  return (
    <Container>
      <h1>Bem-vindo à Página Detalhes de Adoção!</h1>
      <p>Esta é a página de detalhes de adoção do nosso aplicativo React.</p>
      <p>Código do animal: {codigo}</p>
    </Container>
  );
}
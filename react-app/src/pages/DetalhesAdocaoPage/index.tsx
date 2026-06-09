import React from "react";
import { Box, Container } from "@mui/material";
import { useParams } from "react-router-dom";
import { CardPost } from "../../components/features/CardPost";

export const DetalhesAdocaoPage: React.FC = () => {
  const { codigo } = useParams();

  return (
    <Container>
      <p>Código do animal: {codigo}</p>

      <Box></Box>

    </Container>
  );
};
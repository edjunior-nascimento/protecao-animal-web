import React from "react";
import { Container } from "@mui/material";

export const GaleriaPage: React.FC = () => {
  return (
    <Container>
      <h1>Galeria de fotos</h1>
      <div>
        <i className="setas fa-solid fa-angle-left"> </i>
      </div>
    </Container>
  );
}
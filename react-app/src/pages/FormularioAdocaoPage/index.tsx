import React from "react";
import { Box, Container, Divider, Typography } from "@mui/material";
import { CardAdocao } from "../../components/features/CardAdocao";

export const FormularioAdocaoPage: React.FC = () => { 
  return (
    <Container>
      <Box sx={{ display: "flex", justifyContent: "center", width: "100%", marginBottom: "30px" }}>
        <Typography variant="h4" component="h4">
          Ficha de Adoção
        </Typography>
      </Box>
      <Box sx={{backgroundColor: "#EFEFEF", marginTop: "38px"}}>
        <Typography sx={{ marginBottom: '30px', marginLeft: "50px", marginRight: "50px", paddingTop: "58px", fontSize: "25px", fontWeight: "bold"}} component="p" color= "black">
          Preencha a ficha de adoção com as suas informações, para que possamos conhecer você melhor e garantir a combinação perfeita com o seu novo amigo.
        </Typography>
        <Box sx={{ backgroundColor:"white",padding: "20px"}}>
          <Typography sx={{fontSize: "25px", fontWeight: "bold"}} component="p" color= "black"> 
            Adoções
          </Typography>
          <hr />
          <Box>
            <CardAdocao/>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
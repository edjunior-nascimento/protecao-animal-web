import React from "react";
import { Box, Container, Divider, Typography } from "@mui/material";
import { CardAdocao } from "../../components/features/CardAdocao";
import { AddCircleOutlined, AddCircleOutlineOutlined } from "@mui/icons-material";

export const FormularioAdocaoPage: React.FC = () => { 
  return (
    <Container>
      <Box sx={{ display: "flex", justifyContent: "center", width: "100%", marginBottom: "30px", marginLeft: "81px"}}>
        <Typography variant="h4" component="h4">
          Ficha de Adoção
        </Typography>
      </Box>
      <Box sx={{backgroundColor: "#EFEFEF", marginTop: "38px"}}>

        
        <Typography sx={{ marginBottom: '30px', marginLeft: "50px", marginRight: "50px", paddingTop: "58px", fontSize: "25px", fontWeight: "bold"}} component="p" color= "black">
          Preencha a ficha de adoção com as suas informações, para que possamos conhecer você melhor e garantir a combinação perfeita com o seu novo amigo.
        </Typography>
        <Box sx={{ backgroundColor:"white",padding: "20px", marginLeft: "81px", marginRight: "81px", marginBottom: "26px"}}>
          <Typography sx={{fontSize: "25px", fontWeight: "bold"}} component="p" color= "black"> 
            Adoções
          </Typography>
          <hr />
          <Box>
            <CardAdocao/>
          </Box>
          <Box>
            <CardAdocao/>
          </Box>
        </Box>
        <Box sx={{border: "solid 2px #27A8AD", display: "flex", justifyContent: "center", alignItems: "center", width: "200px", height: "50px", borderRadius: "10px", cursor: "pointer", margin: "auto", marginBottom: "30px"}}>
          <AddCircleOutlineOutlined sx={{color: "#27A8AD"}}/>
              <Typography sx={{ color: "#27A8AD", fontSize: "18px", fontWeight: "bold"}} component="p">
                Incluir Animal
              </Typography>
        </Box>
        <Box>
        <Typography sx={{ marginBottom: '30px', marginLeft: "50px", marginRight: "50px", paddingTop: "58px", fontSize: "25px", fontWeight: "bold"}} component="p" color= "black">
          Informações sobre o Tutor
          </Typography>
      </Box>
      </Box>
      
    </Container>
  );
}
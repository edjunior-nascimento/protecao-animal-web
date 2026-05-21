import React, { useState } from "react";
import { Box, Container, Input, MenuItem, TextField, Typography } from "@mui/material";
import { CardTutor } from "../../components/features/CardTutor";
import { CardEndereco } from "../../components/features/CardEndereco";
import { CardContato } from "../../components/features/CardContato";
import { AddCircleOutlineOutlined } from "@mui/icons-material";
import { Form } from "react-router-dom";
import { FormAnimal } from "../../components/features/FormAnimal";

export const FormularioCastracaoPage: React.FC = () => {
  


  return (
    <Container>
      <Box sx={{ display: "flex", justifyContent: "center", width: "100%", marginBottom: "30px" }}>
        <Typography variant="h4" component="h4">
          Campanha de Castração
        </Typography>
      </Box>
      <Box sx={{ backgroundColor: "#EFEFEF", marginTop: "38px", marginLeft: { md: "43px", xs: "20px" }, marginRight: { md: "43px", xs: "20px" } }}>
        <Typography sx={{ marginBottom: '30px', marginLeft: "50px", marginRight: "50px", paddingTop: "58px", fontSize: "25px", fontWeight: "bold" }} component="p" color="black">
          Cadastre o seu bichinho e fique atento as datas de castração na região, através das nossas Redes Sociais.
        </Typography>

        <CardTutor />
        <CardContato />
        <CardEndereco />
        <Box sx={{ marginTop: "26px", backgroundColor: "white", marginLeft: { xs: "10px", md: "80px" }, marginRight: { xs: "10px", md: "80px" }, marginBottom: "26px", paddingTop: "10px", paddingBottom: "35px" }}>
          <Typography sx={{ marginLeft: "18px", marginTop: "15px", marginRight: "50px", marginBottom: "15px", fontSize: "25px", fontWeight: "bold" }} component="p" color="black">
            Informações sobre os Animais
          </Typography>
          <hr />
          <FormAnimal/>
          <Box sx={{ border: "solid 2px #27A8AD", display: "flex", justifyContent: "center", alignItems: "center", width: "200px", height: "50px", borderRadius: "10px", cursor: "pointer", margin: "auto" }}>
              <AddCircleOutlineOutlined sx={{ color: "#27A8AD" }} />
              <Typography sx={{ color: "#27A8AD", fontSize: "18px", fontWeight: "bold" }} component="p">
                Incluir Animal
              </Typography>
            </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "50px",
            backgroundColor: "#27A8AD",
            width: { xs: "100%", md: "206px" },
            maxWidth: { xs: "80%", md: "206px" },
            height: "52px",
            borderRadius: "10px",
            cursor: "pointer",
            textAlign: "center",
            alignItems: "center",
            marginLeft: "auto",
            marginRight: { xs: "auto", md: "50px" },
          }}
        >
          <Typography
            sx={{
              fontSize: "25px",
              fontWeight: "bold"
            }}
          >
            Finalizar
          </Typography>
        </Box>
      </Box>
    </Container>

  );
}
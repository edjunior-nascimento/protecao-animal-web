import React from "react";
import { Box, Container, Divider, Input, Typography } from "@mui/material";
import { CardAdocao } from "../../components/features/CardAdocao";
import { AddCircleOutlined, AddCircleOutlineOutlined, Margin } from "@mui/icons-material";
import { FilterAnimais } from "../../components/features/FilterAnimais";

export const FormularioAdocaoPage: React.FC = () => {
  return (
    <Container>
      <Box sx={{ display: "flex", justifyContent: "center", width: "100%", marginBottom: "30px" }}>
        <Typography variant="h4" component="h4">
          Ficha de Adoção
        </Typography>
      </Box>
      <Box sx={{ backgroundColor: "#EFEFEF", marginTop: "38px", marginLeft:{ md:"43px", xs: "20px"}, marginRight:{ md:"43px", xs: "20px"} }}>


        <Typography sx={{ marginBottom: '30px', marginLeft: "50px", marginRight: "50px", paddingTop: "58px", fontSize: "25px", fontWeight: "bold" }} component="p" color="black">
          Preencha a ficha de adoção com as suas informações, para que possamos conhecer você melhor e garantir a combinação perfeita com o seu novo amigo.
        </Typography>
        <Box sx={{ backgroundColor: "white", marginLeft:{ md: "81px", xs: "10px"}, marginRight:{ md: "81px", xs: "10px"}, paddingBottom: "26px", paddingTop: "10px" }}>
          <Typography sx={{ fontSize: "25px", fontWeight: "bold", marginLeft: "18px" }} component="p" color="black">
            Adoções
          </Typography>
          <hr />
          <Box>
            <CardAdocao />
          </Box>
          <Box>
            <CardAdocao />
          </Box>
          <Box sx={{ border: "solid 2px #27A8AD", display: "flex", justifyContent: "center", alignItems: "center", width: "200px", height: "50px", borderRadius: "10px", cursor: "pointer", margin: "auto", marginTop: "40px", }}>
            <AddCircleOutlineOutlined sx={{ color: "#27A8AD" }} />
            <Typography sx={{ color: "#27A8AD", fontSize: "18px", fontWeight: "bold" }} component="p">
              Incluir Animal
            </Typography>
          </Box>
        </Box>

        <Box sx={{ marginTop: "26px", backgroundColor: "white", marginLeft: "81px", marginRight: "81px", marginBottom: "26px", paddingTop: "10px" }}>
          <Typography sx={{ marginLeft: "18px", marginTop: "15px", marginRight: "50px", marginBottom: "15px", fontSize: "25px", fontWeight: "bold" }} component="p" color="black">
            Informações sobre o Tutor
          </Typography>
          <hr />
          <Typography sx={{ marginLeft: "18px", marginTop: "15px", marginRight: "50px", fontSize: "18px", display: "flex" }} component="p" color="black" >
            Nome Completo    <Typography sx={{ color: "red", marginLeft: "5px" }}>*</Typography>
          </Typography>

          <Input sx={{ marginLeft: "20px", marginTop: "10px", marginRight: "20px", marginBottom: "20px", width: "auto", height: "40px", color: "#C6C6C6", border: "solid 1px", display: "flex", borderRadius: "5px" }} />

          <Box sx={{ display: "flex", justifyContent: "space-between", marginLeft: "20px", marginTop: "20px", marginRight: "20px", marginBottom: "30px" }}>
            <Box sx={{ width: "100%", marginRight: "22px" }}>
              <Typography sx={{ marginBottom: "10px", fontSize: "18px", display: "flex" }} component="p" color="black" >
                CPF
              </Typography>
              <Input sx={{ marginTop: "10px", marginBottom: "20px", width: "100%", color: "black", border: "solid 1px #C6C6C6", display: "flex", borderRadius: "5px" }} />
            </Box>
            <Box sx={{ width: "100%" }}>
              <Typography sx={{ marginBottom: "10px", fontSize: "18px" }} component="p" color="black" >
                RG
              </Typography>
              <Input sx={{ marginTop: "10px", marginBottom: "20px", width: "100%", color: "black", border: "solid 1px #C6C6C6", display: "flex", borderRadius: "5px" }}></Input>
            </Box>
          </Box>
        </Box>
        <Box sx={{ marginTop: "26px", backgroundColor: "white", marginLeft: "81px", marginRight: "81px", marginBottom: "26px", paddingTop: "10px" }}>
          <Typography sx={{ marginLeft: "18px", marginTop: "15px", marginRight: "50px", marginBottom: "15px", fontSize: "25px", fontWeight: "bold" }} component="p" color="black">
            Contato
          </Typography>
          <hr />
          <Box sx={{ display: "flex", justifyContent: "space-between", marginLeft: "20px", marginTop: "20px", marginRight: "20px", marginBottom: "30px" }}>
            <Box sx={{ width: "100%", marginRight: "22px" }}>
              <Typography sx={{ marginBottom: "10px", fontSize: "18px", display: "flex" }} component="p" color="black" >
                Telefone <Typography sx={{ color: "red", marginLeft: "5px" }}>*</Typography>
              </Typography>
              <Input sx={{ marginTop: "10px", marginBottom: "20px", width: "100%", color: "black", border: "solid 1px #C6C6C6", display: "flex", borderRadius: "5px" }}></Input>
            </Box>

            <Box sx={{ width: "100%" }}>
              <Typography sx={{ marginBottom: "10px", fontSize: "18px" }} component="p" color="black" >
                Email
              </Typography>
              <Input sx={{ marginTop: "10px", marginBottom: "20px", width: "100%", color: "black", border: "solid 1px #C6C6C6", display: "flex", borderRadius: "5px" }}></Input>
            </Box>
          </Box>
        </Box>
        <Box sx={{ marginTop: "26px", backgroundColor: "white", marginLeft: "81px", marginRight: "81px", marginBottom: "26px", paddingTop: "10px", paddingBottom: "35px" }}>
          <Typography sx={{ marginLeft: "18px", marginTop: "15px", marginRight: "50px", marginBottom: "15px", fontSize: "25px", fontWeight: "bold" }} component="p" color="black">
            Endereço
          </Typography>
          <hr />
          <Box sx={{ display: "flex", justifyContent: "space-between", marginLeft: "20px", marginTop: "20px", marginRight: "20px", marginBottom: "30px" }}>

            <Box sx={{ width: "100%", marginRight: "22px" }}>
              <Typography sx={{ marginBottom: "10px", fontSize: "18px", display: "flex" }} component="p" color="black" >
                Endereço  <Typography sx={{ color: "red", marginLeft: "5px" }}>*</Typography>
              </Typography>
              <Input sx={{ marginTop: "10px", marginBottom: "20px", width: "100%", color: "black", border: "solid 1px #C6C6C6", display: "flex", borderRadius: "5px" }}></Input>
            </Box>
            <Box sx={{ width: "100%", marginRight: "22px" }}>
              <Typography sx={{ marginBottom: "10px", fontSize: "18px", display: "flex" }} component="p" color="black" >
                Numero <Typography sx={{ color: "red", marginLeft: "5px" }}>*</Typography>
              </Typography>
              <Input sx={{ marginTop: "10px", marginBottom: "20px", width: "100%", color: "black", border: "solid 1px #C6C6C6", display: "flex", borderRadius: "5px" }}></Input>
            </Box>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between", marginLeft: "20px", marginTop: "20px", marginRight: "20px", marginBottom: "30px" }}>
            <Box sx={{ width: "100%", marginRight: "22px" }}>
              <Typography sx={{ marginBottom: "10px", fontSize: "18px", display: "flex" }} component="p" color="black" >
                Bairro/Distrito <Typography sx={{ color: "red", marginLeft: "5px" }}>*</Typography>
              </Typography>
              <Input sx={{ marginTop: "10px", marginBottom: "20px", width: "100%", color: "black", border: "solid 1px #C6C6C6", display: "flex", borderRadius: "5px" }}></Input>
            </Box>

            <Box sx={{ width: "100%", marginRight: "22px" }}>
              <Typography sx={{ marginBottom: "10px", fontSize: "18px", display: "flex" }} component="p" color="black" >
                CEP  <Typography sx={{ color: "red", marginLeft: "5px" }}>*</Typography>
              </Typography>
              <Input sx={{ marginTop: "10px", marginBottom: "20px", width: "100%", color: "black", border: "solid 1px #C6C6C6", display: "flex", borderRadius: "5px" }}></Input>
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", marginLeft: "20px", marginTop: "20px", marginRight: "20px", marginBottom: "30px" }}>
            <Box sx={{ width: "100%", marginRight: "22px" }}>
              <Typography sx={{ marginBottom: "10px", fontSize: "18px", display: "flex" }} component="p" color="black" >
                Cidade  <Typography sx={{ color: "red", marginLeft: "5px" }}>*</Typography>
              </Typography>
              <Input sx={{ marginTop: "10px", marginBottom: "20px", width: "100%", color: "black", border: "solid 1px #C6C6C6", display: "flex", borderRadius: "5px" }}></Input>
            </Box>

            <Box sx={{ width: "100%", marginRight: "22px" }}>
              <Typography sx={{ marginBottom: "10px", fontSize: "18px", display: "flex" }} component="p" color="black" >
                Estado  <Typography sx={{ color: "red", marginLeft: "5px" }}>*</Typography>
              </Typography>
              <Input sx={{ marginTop: "10px", marginBottom: "20px", width: "100%", color: "black", border: "solid 1px #C6C6C6", display: "flex", borderRadius: "5px" }}></Input>
            </Box>
          </Box>
          <Typography sx={{ marginLeft: "18px", marginTop: "15px", marginRight: "50px", fontSize: "18px", display: "flex" }} component="p" color="black" >
            Complemento/Referencia
          </Typography>

          <Input sx={{ marginLeft: "20px", marginTop: "10px", marginRight: "20px", marginBottom: "20px", width: "auto", height: "40px", color: "#C6C6C6", border: "solid 1px", display: "flex", borderRadius: "5px" }} />
        </Box>
        <Box
          sx={{
            display: "flex", justifyContent: "flex-end", marginBottom: "50px", backgroundColor: "#27A8AD", width: "206px", height: "52px", borderRadius: "10px", cursor: "pointer", textAlign: "center", alignItems: "center", marginLeft: "auto", marginRight: "50px"
          }}
        >
          <Typography
            sx={{
              marginLeft: "18px", marginTop: "15px", marginRight: "50px", marginBottom: "15px", fontSize: "25px", fontWeight: "bold"
            }}
          >
            Finalizar
          </Typography>
        </Box>
        <FilterAnimais></FilterAnimais>

      </Box>

    </Container>
  );
}
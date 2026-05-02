import React, { useState } from "react";
import { Box, Container, Input, MenuItem, TextField, Typography } from "@mui/material";

export const FormularioCastracaoPage: React.FC = () => {
  const [especie, setEspecie] = useState("");
  const [sexo, setSexo] = useState("");
  const [porte, setPorte] = useState("");

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
        <Box sx={{ marginTop: "26px", backgroundColor: "white", marginLeft: "50px", marginRight: "50px", marginBottom: "26px", paddingTop: "10px" }}>
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
        <Box sx={{ marginTop: "26px", backgroundColor: "white", marginLeft: "50px", marginRight: "50px", marginBottom: "26px", paddingTop: "10px" }}>
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
        <Box sx={{ marginTop: "26px", backgroundColor: "white", marginLeft: "50px", marginRight: "50px", marginBottom: "26px", paddingTop: "10px", paddingBottom: "35px" }}>
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
        <Box sx={{ marginTop: "26px", backgroundColor: "white", marginLeft: "50px", marginRight: "50px", marginBottom: "26px", paddingTop: "10px", paddingBottom: "35px" }}>
          <Typography sx={{ marginLeft: "18px", marginTop: "15px", marginRight: "50px", marginBottom: "15px", fontSize: "25px", fontWeight: "bold" }} component="p" color="black">
            Informações sobre os Animais
          </Typography>
          <hr />
          <Box sx={{ display: "flex", justifyContent: "space-between", marginLeft: "20px", marginTop: "20px", marginRight: "20px", marginBottom: "30px" }}>
            <Box sx={{ width: "100%", marginRight: "22px", border: "2px dashed #cccccc", borderRadius: "10px", padding: "20px" }}>
              <Typography sx={{ marginBottom: "10px", fontSize: "18px", display: "flex" }} component="p" color="black" >
                Nome do Animal<Typography sx={{ color: "red", marginLeft: "5px" }}>*</Typography>
              </Typography>
              <Input sx={{ marginTop: "10px", marginBottom: "20px", width: "100%", color: "black", border: "solid 1px #C6C6C6", display: "flex", borderRadius: "5px" }}></Input>
              <Box sx={{ display: "flex", justifyContent: "space-between", marginLeft: "20px", marginTop: "20px", marginRight: "20px", marginBottom: "30px" }}>
                <Box sx={{ width: "100%", marginRight: "22px" }}>
                  <Typography sx={{ marginBottom: "10px", fontSize: "18px", display: "flex" }} component="p" color="black" >
                    Espécie <Typography sx={{ color: "red", marginLeft: "5px" }}>*</Typography>
                  </Typography>
                  <TextField
                    select
                    fullWidth
                    value={especie}
                    onChange={(event) => setEspecie(event.target.value)}
                    SelectProps={{ displayEmpty: true }}
                    sx={{
                      marginTop: "10px",
                      marginBottom: "20px",
                      width: "100%",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "5px",
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#C6C6C6",
                      },
                    }}
                  >
                    <MenuItem value="" disabled>
                    </MenuItem>
                    <MenuItem value="cachorro">Cachorro</MenuItem>
                    <MenuItem value="gato">Gato</MenuItem>
                  </TextField>
                </Box>

                <Box sx={{ width: "100%", marginRight: "22px" }}>
                  <Typography sx={{ marginBottom: "10px", fontSize: "18px", display: "flex" }} component="p" color="black" >
                    Sexo  <Typography sx={{ color: "red", marginLeft: "5px" }}>*</Typography>
                  </Typography>
                  <TextField
                    select
                    fullWidth
                    value={sexo}
                    onChange={(event) => setSexo(event.target.value)}
                    SelectProps={{ displayEmpty: true }}
                    sx={{
                      marginTop: "10px",
                      marginBottom: "20px",
                      width: "100%",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "5px",
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#C6C6C6",
                      },
                    }}
                  >
                    <MenuItem value="" disabled>
                    </MenuItem>
                    <MenuItem value="masculino">Macho</MenuItem>
                    <MenuItem value="feminino">Fêmea</MenuItem>
                  </TextField>
                </Box> </Box>
            <Box>
              <Box sx={{ width: "100%", marginRight: "22px" }}>
                  <Typography sx={{ marginBottom: "10px", fontSize: "18px", display: "flex" }} component="p" color="black" >
                    Porte  <Typography sx={{ color: "red", marginLeft: "5px" }}>*</Typography>
                  </Typography>
                  <TextField
                    select
                    fullWidth
                    value={porte}
                    onChange={(event) => setPorte(event.target.value)}
                    SelectProps={{ displayEmpty: true }}
                    sx={{
                      marginTop: "10px",
                      marginBottom: "20px",
                      width: "100%",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "5px",
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#C6C6C6",
                      },
                    }}
                  >
                    <MenuItem value="" disabled>
                      Selecione
                    </MenuItem>
                    <MenuItem value="pequeno">Pequeno</MenuItem>
                    <MenuItem value="medio">Médio</MenuItem>
                    <MenuItem value="grande">Grande</MenuItem>
                  </TextField>
                </Box>
            </Box>
          </Box>
              </Box>
           
        </Box>
      </Box>
    </Container>

  );
}
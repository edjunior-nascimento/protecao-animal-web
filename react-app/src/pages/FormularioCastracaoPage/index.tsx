import React, { useState } from "react";
import { Box, Container, Input, MenuItem, TextField, Typography } from "@mui/material";
import { CardTutor } from "../../components/features/CardTutor";
import { CardEndereco } from "../../components/features/CardEndereco";
import { CardContato } from "../../components/features/CardContato";
import { AddCircleOutlineOutlined } from "@mui/icons-material";

export const FormularioCastracaoPage: React.FC = () => {
  const [especie, setEspecie] = useState("");
  const [sexo, setSexo] = useState("");
  const [porte, setPorte] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const months = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);


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
              <Box sx={{ display: "flex", gap: 2, flexDirection: { xs: "column", md: "row" }, alignItems: { md: "flex-start" } }}>
                <Box sx={{ width: "100%", flex: 1 }}>
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
                <Box sx={{ width: "100%", flex: 1 }}>
                  <Typography sx={{ marginBottom: "20px", fontSize: "18px", display: "flex" }} component="p" color="black" >
                    Nascimento  <Typography sx={{ color: "red", marginLeft: "5px" }}>*</Typography>
                  </Typography>
                  <Box sx={{ display: "flex", gap: 2, flexDirection: { xs: "column", md: "row" } }}>
                    <TextField
                      select
                      fullWidth
                      label="Mês"
                      value={month}
                      onChange={(e) => setMonth(e.target.value)}
                      sx={{
                        "& .MuiInputLabel-root": {
                          color: "black",
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                          color: "black",
                        },
                        "& .MuiSelect-select": {
                          color: "black",
                        },
                        "& .MuiSvgIcon-root": {
                          color: "black",
                        },
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "5px",
                          color: "black",
                          "& fieldset": {
                            borderColor: "black",
                          },
                          "&:hover fieldset": {
                            borderColor: "black",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#27A8AD",
                          },
                        },
                      }}
                    >
                      <MenuItem value="" disabled>
                        Selecione
                      </MenuItem>
                      {months.map((m, index) => (
                        <MenuItem key={index} value={m}>
                          {m}
                        </MenuItem>
                      ))}
                    </TextField>

                    <TextField
                      select
                      fullWidth
                      label="Ano"
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
                      sx={{
                        "& .MuiInputLabel-root": {
                          color: "black",
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                          color: "black",
                        },
                        "& .MuiSelect-select": {
                          color: "black",
                        },
                        "& .MuiSvgIcon-root": {
                          color: "black",
                        },
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "5px",
                          color: "black",
                          "& fieldset": {
                            borderColor: "black",
                          },
                          "&:hover fieldset": {
                            borderColor: "black",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#27A8AD",
                          },
                        },
                      }}
                    >
                      <MenuItem value="" disabled>
                        Selecione
                      </MenuItem>
                      {years.map((y) => (
                        <MenuItem key={y} value={y}>
                          {y}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Box><Box
                    sx={{
                      border: "5px dashed primary.main",
                      borderRadius: "10px",
                      width: "256px",
                      height: "56px",
                    }}>

                  </Box>

                </Box>

              </Box> <Box sx={{ border: "solid 2px #27A8AD", display: "flex", justifyContent: "center", alignItems: "center", width: "200px", height: "50px", borderRadius: "10px", cursor: "pointer", margin: "auto" }}>
                <AddCircleOutlineOutlined sx={{ color: "#27A8AD" }} />
                <Typography sx={{ color: "#27A8AD", fontSize: "18px", fontWeight: "bold" }} component="p">
                  Incluir Animal
                </Typography>
              </Box>
            </Box>
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
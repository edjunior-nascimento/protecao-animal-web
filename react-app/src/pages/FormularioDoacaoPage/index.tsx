import React, { useState } from "react";
import { Box, Button, colors, Container, FormControl, InputLabel, MenuItem, Select, styled, Typography } from "@mui/material";
import type { SelectChangeEvent } from "@mui/material/Select";
import { Margin } from "@mui/icons-material";

export const FormularioDoacaoPage: React.FC = () => {
  const [frequencia, setFrequencia] = useState("Única");
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const handleChange = (event: SelectChangeEvent) => {
    setFrequencia(event.target.value);
  };

  const handleValueClick = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <Container> 
      <Box>
        <Box sx={{ display: "flex", width: "auto", boxSizing: 'border-box', marginBottom: "30px", marginTop: "30px", marginLeft: { md: "43px", xs: "20px" }, marginRight: { md: "43px", xs: "20px" } }}>
          <Typography component="p">
            <strong>Página inicial / Doação / Pagamento</strong>
          </Typography>
        </Box>

        <Box
          sx={{
            backgroundColor: "#EFEFEF",
            marginTop: "38px",
            marginLeft: { md: "43px", xs: "20px" },
            marginRight: { md: "43px", xs: "20px" },
            paddingBottom: "40px",
            paddingLeft: { md: "50px", xs: "20px" },
            paddingRight: { md: "50px", xs: "20px" },
          }}
        >
          <Typography
            sx={{ marginBottom: "30px", paddingTop: "58px", fontSize: "25px", fontWeight: "bold" }}
            component="p"
            color="black"
          >
            Além da opção de doação única, você pode escolher a opção de apoiar nossos projetos mensalmente!
          </Typography>

          <Box sx={{
            display: "flex",
            flexDirection: "column",
            marginTop: "60px",
            backgroundColor: "#D9D9D9",
            marginBottom: "60px",
          }}>

            <FormControl fullWidth variant="outlined" size="small" sx={{
              maxWidth: {md: "300px", xs: '90%'},
              marginLeft: { md: '42px', xs: '20px' },
              marginRight: { md: '42px', xs: '20px' },
              marginTop: "37px",
            }}>
              <InputLabel id="frequencia-label"></InputLabel>
              <Select
                labelId="frequencia-label"
                id="frequencia-select"
                value={frequencia}
                label="Frequência"
                onChange={handleChange}
                sx={{
                  borderRadius: "8px",
                  backgroundColor: "#e0e0e0",
                  border: "1px solid #757575",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "transparent",
                  },
                  "& .MuiSvgIcon-root": {
                    color: "#545252",
                  },
                }}
              >
                <MenuItem value="Mensal" sx={{ color: '#545252', '&.Mui-selected': { backgroundColor: 'rgba(84,82,82,0.12)', color: 'black' } }}>Mensal</MenuItem>
                <MenuItem value="Única" sx={{ color: '#545252', '&.Mui-selected': { backgroundColor: 'rgba(84,82,82,0.12)', color: 'black' } }}>Única</MenuItem>
              </Select>
            </FormControl>
            <Box sx={{
            marginLeft: { md: '42px', xs: '20px' },
            marginTop: "37px",
            }}>
              <ul style={{ listStyleType: 'none', display: 'flex', gap: '15px', paddingLeft: 0, flexWrap: 'wrap' }}>
                <Box component="li" onClick={() => handleValueClick('R$ 10')} sx={{
                  color: selectedValue === 'R$ 10' ? 'white' : 'black',
                  backgroundColor: selectedValue === 'R$ 10' ? '#27A8AD' : '#B0AFAF',
                  width: '162px',
                  height: '56px',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  '&:hover': { backgroundColor: '#27A8AD', color: 'white' }
                }}>
                  <Typography sx={{fontWeight: 'bold'}}>R$ 10</Typography>
                </Box>
                <Box component="li" onClick={() => handleValueClick('R$ 20')} sx={{
                  color: selectedValue === 'R$ 20' ? 'white' : 'black',
                  backgroundColor: selectedValue === 'R$ 20' ? '#27A8AD' : '#B0AFAF',
                  width: '162px',
                  height: '56px',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  '&:hover': { backgroundColor: '#27A8AD', color: 'white' }
                }}>
                  <Typography sx={{fontWeight: 'bold'}}>R$ 20</Typography>
                </Box>
                <Box component="li" onClick={() => handleValueClick('R$ 50')} sx={{
                  color: selectedValue === 'R$ 50' ? 'white' : 'black',
                  backgroundColor: selectedValue === 'R$ 50' ? '#27A8AD' : '#B0AFAF',
                  width: '162px',
                  height: '56px',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  '&:hover': { backgroundColor: '#27A8AD', color: 'white' }
                }}>
                  <Typography sx={{fontWeight: 'bold'}}>R$ 50</Typography>
                </Box>
                <Box component="li" onClick={() => handleValueClick('R$ 100')} sx={{
                  color: selectedValue === 'R$ 100' ? 'white' : 'black',
                  backgroundColor: selectedValue === 'R$ 100' ? '#27A8AD' : '#B0AFAF',
                  width: '162px',
                  height: '56px',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  '&:hover': { backgroundColor: '#27A8AD', color: 'white' }
                }}>
                  <Typography sx={{fontWeight: 'bold'}}>R$ 100</Typography>
                </Box>
                <Box component="li" onClick={() => handleValueClick('R$ 200')} sx={{
                  color: selectedValue === 'R$ 200' ? 'white' : 'black',
                  backgroundColor: selectedValue === 'R$ 200' ? '#27A8AD' : '#B0AFAF',
                  width: '162px',
                  height: '56px',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  '&:hover': { backgroundColor: '#27A8AD', color: 'white' }
                }}>
                  <Typography sx={{fontWeight: 'bold'}}>R$ 200</Typography>
                </Box>
                <Box component="li" onClick={() => handleValueClick('Outro valor')} sx={{
                  color: selectedValue === 'Outro valor' ? 'white' : 'black',
                  backgroundColor: selectedValue === 'Outro valor' ? '#27A8AD' : '#B0AFAF',
                  width: '162px',
                  height: '56px',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  '&:hover': { backgroundColor: '#27A8AD', color: 'white' }
                }}>
                  <Typography sx={{fontWeight: 'bold'}}>Outro valor</Typography>
                </Box>
              </ul>
            </Box>
            <Typography sx={{
              marginLeft: { md: '42px', xs: '20px' },
              marginTop: "37px",
              color: 'black',
              fontWeight: 'bold',
              marginBottom: '30px',
            }}>Faça uma doação de 10,00</Typography>
          </Box>
          <hr />
          <Box sx={{ backgroundColor: "#FFFFFF", marginTop: "60px", marginBottom: "60px" }}>
            <Typography sx={{ marginBottom: "30px", marginLeft: { md: '50px', xs: '20px' }, marginRight: { md: '50px', xs: '20px' }, paddingTop: "58px", fontSize: "20px", fontWeight: "bold" }} component="p" color="black">
              Para fazer parte da nossa história, conte-nos um pouco sobre você:
            </Typography>
            <hr />
            <Typography sx={{ marginLeft: { md: '50px', xs: '20px' }, marginRight: { md: '50px', xs: '20px' }, paddingTop: "58px" }} component="p" color="black">
              Nome <Typography component="span" color="red">*</Typography>
            </Typography>
            <Box sx={{ marginLeft: { md: '50px', xs: '20px' }, marginRight: { md: '50px', xs: '20px' } }}>
              <input type="text" style={{
                width: '100%',
                maxWidth: 586,
                height: '50px',
                borderRadius: '8px',
                border: '1px solid #B0AFAF',
                boxSizing: 'border-box'
              }} />
            </Box>
            <Typography sx={{ marginLeft: { md: '50px', xs: '20px' }, marginRight: { md: '50px', xs: '20px' }, paddingTop: "20px" }} component="p" color="black">
              Numero de telefone <Typography component="span" color="red">*</Typography>
            </Typography>
            <Box sx={{ marginLeft: { md: '50px', xs: '20px' }, marginRight: { md: '50px', xs: '20px' }, marginBottom: '60px' }}>
              <input type="text" style={{
                width: '100%',
                maxWidth: 586,
                height: '50px',
                borderRadius: '8px',
                border: '1px solid #B0AFAF',
                boxSizing: 'border-box'
              }} />
            </Box>
          </Box>
          <Box sx={{ backgroundColor: "white", color: "black", marginBottom: "60px", paddingBottom: "87px" }}>
            <Typography sx={{ marginBottom: "30px", marginLeft: { md: '50px', xs: '20px' }, marginRight: { md: '50px', xs: '20px' }, paddingTop: "58px", fontSize: "20px", fontWeight: "bold" }} component="p" color="black">
              Escolha a forma de doação:
            </Typography>
            <hr />
            <Typography sx={{ marginLeft: { md: '50px', xs: '20px' }, marginRight: { md: '50px', xs: '20px' }, paddingTop: "20px" }} component="p" color="black">
              CPF <Typography component="span" color="red">*</Typography>
            </Typography>
            <Box sx={{ marginLeft: { md: '50px', xs: '20px' }, marginRight: { md: '50px', xs: '20px' } }}>
              <input type="text" style={{
                width: '100%',
                maxWidth: 586,
                height: '78px',
                borderRadius: '8px',
                border: '1px solid #B0AFAF',
                boxSizing: 'border-box'
              }} />
            </Box>
            <Typography sx={{ marginLeft: "50px", marginRight: "50px", paddingTop: "20px" }} component="p" color="black">
              Formas de doação <Typography component="span" color="red">*</Typography>
            </Typography>
            <FormControl
              variant="outlined"
              fullWidth
              sx={{
                maxWidth: 586,
                marginLeft: { md: '50px', xs: '20px' },
                marginTop: '10px',
              }}
            >
              <InputLabel id="pagamento-label" sx={{ display: 'none' }} />

              <Select
                labelId="pagamento-label"
                defaultValue=""
                label="Selecione"
                sx={{
                  height: "78px",
                  borderRadius: "8px",
                  backgroundColor: "#FFFFFF",
                  '& .MuiSelect-select': {
                    paddingLeft: '14px'
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#B0AFAF'
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#B0AFAF'
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#B0AFAF'
                  },
                  '& .MuiSvgIcon-root': {
                    color: '#545252'
                  },
                  '&.Mui-focused': {
                    boxShadow: 'none'
                  }
                }}
              >
                <MenuItem value="credito">Cartão de Crédito</MenuItem>
              </Select>
            </FormControl>

            <Typography sx={{ marginLeft: "50px", marginRight: "50px", paddingTop: "20px" }} component="p" color="black">
              Número do cartão* <Typography component="span" color="red">*</Typography>
            </Typography>
            <Box sx={{ marginLeft: { md: '50px', xs: '20px' }, marginRight: { md: '50px', xs: '20px' } }}>
              <input type="text" style={{
                width: '100%',
                maxWidth: 586,
                height: '78px',
                borderRadius: '8px',
                border: '1px solid #B0AFAF',
                boxSizing: 'border-box'
              }} />
            </Box>

            <Typography sx={{ marginLeft: "50px", marginRight: "50px", paddingTop: "20px" }} component="p" color="black">Nome do cartão
              <Typography component="span" color="red">*</Typography>
            </Typography>
            <Box sx={{ marginLeft: { md: '50px', xs: '20px' }, marginRight: { md: '50px', xs: '20px' } }}>
              <input type="text" style={{
                width: '100%',
                maxWidth: 586,
                height: '78px',
                borderRadius: '8px',
                border: '1px solid #B0AFAF',
                boxSizing: 'border-box'
              }} />
            </Box>
            <Typography sx={{ marginLeft: { md: '50px', xs: '20px' }, marginRight: { md: '50px', xs: '20px' }, paddingTop: "20px" }} component="p" color="black">
              Validade do cartão <Typography component="span" color="red">*</Typography>
            </Typography>
            <Box sx={{ marginLeft: { md: '50px', xs: '20px' }, marginRight: { md: '50px', xs: '20px' } }}>
              <input type="text" style={{
                width: '100%',
                maxWidth: 586,
                height: '78px',
                borderRadius: '8px',
                border: '1px solid #B0AFAF',
                boxSizing: 'border-box'
              }} />
            </Box>
            <Typography sx={{ marginLeft: { md: '50px', xs: '20px' }, marginRight: { md: '50px', xs: '20px' }, paddingTop: "20px" }} component="p" color="black">
              Dia da doação <Typography component="span" color="red">*</Typography>
            </Typography>
            <FormControl
              variant="outlined"
              fullWidth
              sx={{
                maxWidth: 586,
                marginLeft: { md: '50px', xs: '20px' },
                marginTop: '10px',
              }}
            >
              <InputLabel id="pagamento-label" sx={{ display: 'none' }} />

              <Select
                labelId="pagamento-label"
                defaultValue=""
                label="Selecione"
                sx={{
                  height: "78px",
                  borderRadius: "8px",
                  backgroundColor: "#FFFFFF",
                  '& .MuiSelect-select': {
                    paddingLeft: '14px'
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#B0AFAF'
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#B0AFAF'
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#B0AFAF'
                  },
                  '& .MuiSvgIcon-root': {
                    color: '#545252'
                  },
                  '&.Mui-focused': {
                    boxShadow: 'none'
                  }
                }}
              >
                <MenuItem value="credito">Cartão de Crédito</MenuItem>
              </Select>
            </FormControl>
          </Box>
            <Box sx={{backgroundColor: "#D9D9D9", color: "black", display: "flex", justifyContent: "space-between", alignItems: "center", paddingLeft: { md: '50px', xs: '20px' }, paddingRight: { md: '50px', xs: '20px' }, boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}>
            <Box sx={{padding: { md: '30px', xs: '16px' }}}>
              <Typography><h3>R$ 10,00 Mensais</h3></Typography>
              <Typography>R$ Via cartão de crédito</Typography>
            </Box>
            <Box>
              <Button variant="contained" color="primary" sx={{
                backgroundColor: "#27A8AD",
                color: "white",
                width: "206px",
                height: "52px",
                borderRadius: "8px",}}>
                <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>Doar</Typography>
              </Button>
            </Box>
          </Box>
        </Box>


      </Box>
    </Container>
  );
};
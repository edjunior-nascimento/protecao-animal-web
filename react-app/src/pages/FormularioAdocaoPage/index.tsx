import React from "react";
import { Box, Button, Container, Input, Modal, Typography } from "@mui/material";
import { CardAdocao } from "../../components/features/CardAdocao";
import { AddCircleOutlineOutlined, CloseOutlined } from "@mui/icons-material";
import { FilterAnimais } from "../../components/features/FilterAnimais";
import { CardTutor } from "../../components/features/CardTutor";
import { CardContato } from "../../components/features/CardContato";
import { CardEndereco } from "../../components/features/CardEndereco";
import { CardAgradecimento } from "../../components/features/CardAgradecimento";

export const FormularioAdocaoPage: React.FC = () => {
  const [abrirModal, setAbrirModal] = React.useState(false);
  const [abrirAgradecimento, setAbrirAgradecimento] = React.useState(false);

  function finalizarFormulario() {
    console.log("abrindo modal");
    setAbrirAgradecimento(true);
  }

  return (
    <Container sx={{ pb: { xs: 8, md: 4 } }}>
      <Box sx={{ display: "flex", justifyContent: "center", width: "100%", marginBottom: "30px" }}>
        <Typography variant="h4" component="h4">
          Ficha de Adoção
        </Typography>
      </Box>
      <Box sx={{ backgroundColor: "#EFEFEF", marginTop: "38px", marginLeft: { md: "43px", xs: "20px" }, marginRight: { md: "43px", xs: "20px" } }}>
        <Typography sx={{ marginBottom: '30px', marginLeft: "50px", marginRight: "50px", paddingTop: "58px", fontSize: "25px", fontWeight: "bold" }} component="p" color="black">
          Preencha a ficha de adoção com as suas informações, para que possamos conhecer você melhor e garantir a combinação perfeita com o seu novo amigo.
        </Typography>
        <Box sx={{ backgroundColor: "white", marginLeft: { md: "81px", xs: "10px" }, marginRight: { md: "81px", xs: "10px" }, paddingBottom: "26px", paddingTop: "10px" }}>
          <Typography sx={{ fontSize: "25px", fontWeight: "bold", marginLeft: "18px" }} component="p" color="black">
            Adoções
          </Typography>
          <hr />
          <Box>
            <CardAdocao temBotao />
          </Box>
          <Box>
            <CardAdocao temBotao />
          </Box>
          <Box onClick={()=>setAbrirModal(true)} sx={{ border: "solid 2px #27A8AD", display: "flex", justifyContent: "center", alignItems: "center", width: "200px", height: "50px", borderRadius: "10px", cursor: "pointer", margin: "auto", marginTop: "40px", }}>
            <AddCircleOutlineOutlined sx={{ color: "#27A8AD" }} />
            <Typography sx={{ color: "#27A8AD", fontSize: "18px", fontWeight: "bold" }} component="p">
              Incluir Animal
            </Typography>
          </Box>
        </Box>

        <CardTutor />

        <CardContato/>
        
        <CardEndereco/>
        <Box onClick={() => setAbrirAgradecimento(true)}
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
      <Modal
        open={abrirModal}
        onClose={() => setAbrirModal(false)}
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          p: { xs: 1.5, md: 0 },
        }}
      >
        <Box
          sx={{
            backgroundColor: "#EFEFEF",
            maxHeight: { xs: "calc(100dvh - 24px)", md: "90vh" },
            overflowY: "auto",
            WebkitOverflowScrolling: "touch",
            overscrollBehavior: "contain",
            marginTop: { xs: 0, md: "5vh" },
            marginBottom: { xs: 0, md: "5vh" },
            borderRadius: "10px",
            width: { xs: "100%", md: "80%" },
            boxSizing: "border-box",
            pb: { xs: 3, md: 0 },
            outline: 0,
          }}
        >
          <Button onClick={()=>setAbrirModal(false)} sx={{ position: 'sticky', top: 0, zIndex: 10, marginLeft: 'auto', marginRight: '20px', marginTop: '', display: 'flex', cursor: 'pointer', backgroundColor: '#EFEFEF' }}>
            <CloseOutlined sx={{color: '#808080'}}/>
          </Button>
          <Box>
            <Box sx={{ bgcolor: "white", marginLeft: "31px", marginRight: "31px", marginBottom: "30px", display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: "20px", alignItems: "stretch", paddingLeft: "28px", paddingRight: "28px", paddingBottom: "34px", paddingTop: "35px" }}>
              {/* <Box sx={{ minWidth: 0, height: "56px" }}>
                <FilterAnimais label="Todas as espécies" opcoes={[{ valor: 'cachorro', label: 'Cachorro' }, { valor: 'gato', label: 'Gato' }]} />
              </Box>
              <Box sx={{ minWidth: 0, height: "56px" }}>
                <FilterAnimais label="Todos os sexos" opcoes={[{ valor: "Macho", label: "Macho" }, { valor: "Fêmea", label: "Fêmea" }]} />
              </Box>
              <Box sx={{ minWidth: 0, height: "56px" }}>
                <FilterAnimais label="Todas as categorias " opcoes={[{ valor: "Grande", label: "Grande" }, { valor: "Médio", label: "Médio" }, { valor: "Pequeno", label: "Pequeno" }]} />
              </Box>
              <Box sx={{ minWidth: 0, height: "56px" }}>
                <FilterAnimais label="Todos os locais" opcoes={[{ valor: "Centro", label: "Centro" }, { valor: "Várzea dos Espinhos", label: "Várzea dos Espinhos" }, { valor: "Martinslândia", label: "Martinslândia" }, { valor: "Morrinhos Novos", label: "Morrinhos Novos" }]} />
              </Box> */}
              <Box sx={{ minWidth: 0, height: "56px", display: "flex", alignItems: "stretch" }}>
                <Input placeholder="Nome do Bicho" sx={{ width: "100%", height: "100%", boxSizing: "border-box", border: "1px solid #C6C6C6", borderRadius: "5px", px: 2, color: "black" }} />
              </Box>
              <Box sx={{ minWidth: 0, height: "56px", display: "flex" }}>
                <Button sx={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "5px", cursor: "pointer", background: "#27A8AD", border: "none", color: "white", fontWeight: 700, fontSize: "25px" }}>
                  Buscar
                </Button>
              </Box>
            </Box>
            <Typography sx={{ marginLeft: "18px", marginTop: "15px", marginRight: "50px", marginBottom: "15px", fontSize: "25px", fontWeight: "bold" }} component="p" color="black">
              Incluir Animal
            </Typography>
          </Box>
          <Box sx={{ bgcolor: "white", marginLeft: "31px", marginRight: "31px", marginTop: "26px", marginBottom: "38px", paddingTop: "20px", paddingBottom: "20px" }}>
            <CardAdocao />
            <CardAdocao />
          </Box>
        </Box>

      </Modal>

      <CardAgradecimento
        open={abrirAgradecimento}
        onClose={() => setAbrirAgradecimento(false)}
        tipo="adocao"
      />
    </Container>
  );
}
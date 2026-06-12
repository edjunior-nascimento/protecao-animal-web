import React, { useState } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { Pets, RoomOutlined, ShareOutlined } from "@mui/icons-material";
import { CardAnimal } from "../../components/features/CardAnimal";

export const DetalhesAdocaoPage: React.FC = () => {
  const { codigo } = useParams();

  const images = [
    "https://th.bing.com/th/id/R.baa69032e7ad3f1054c9c56d02934ede?rik=mUnFcjElPE5ACQ&riu=http%3a%2f%2fopentextbc.ca%2fstrategicmanagement%2fwp-content%2fuploads%2fsites%2f30%2f2014%2f07%2fbasset-hound.jpg%23fixme&ehk=ZNfCpg2Hr6K9jZq%2fKICC486iI%2fTUf0aIiqWTnE5iM1k%3d&risl=&pid=ImgRaw&r=0",
    "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=1200&q=80",
    "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?w=1200&q=80",
    "https://images.unsplash.com/photo-1507149833265-60c372daea22?w=1200&q=80",
    "https://images.unsplash.com/photo-1525253086316-d0c936c814f8?w=1200&q=80",
  ];

  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <Container sx={{ paddingLeft: { xs: 2, md: "67px" }, paddingRight: { xs: 2, md: "67px" }, paddingTop: { xs: 4, md: "71px" }, paddingBottom: { xs: 4, md: 8 } }}>
      <p>Código do animal: {codigo}</p>
      <Box>
        <Box display="flex" alignItems="center" marginBottom="28px">
          <a
            href="/"
            style={{
              cursor: "pointer",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <Typography variant="body1">Página inicial</Typography>
          </a>
          <Typography variant="body1">/ Adote</Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: "24px" }}>
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
          <Box component="img" src={images[selectedIndex]} sx={{ width: "100%", height: { xs: 260, md: 520 }, objectFit: "cover", borderRadius: 2 }} />
          <Box sx={{ display: "flex", gap: 1, overflowX: "auto", pt: 1 }}>
            {images.map((img, idx) => (
              <Box
                key={idx}
                component="img"
                src={img}
                onClick={() => setSelectedIndex(idx)}
                sx={{
                  width: { xs: 64, md: 84 },
                  height: { xs: 64, md: 84 },
                  objectFit: "cover",
                  borderRadius: 1,
                  cursor: "pointer",
                  border: idx === selectedIndex ? "3px solid #27A8AD" : "2px solid transparent",
                }}
              />
            ))}
          </Box>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "23px" }}>
            <Typography variant="h4" >
              Pietro
            </Typography>
            <Button variant="contained" color="primary" sx={{ marginTop: "16px" }}>
              <ShareOutlined />
            </Button>
          </Box><Typography variant="body1" marginTop="8px" sx={{ marginBottom: "23px" }} >
            Cachorro | Golden | Macho | 2 anos | Porte grande
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <RoomOutlined color="primary" />
            <Typography variant="body1" sx={{ textAlign: "center" }} >
              Está em Guaraciaba do Norte
            </Typography>
          </Box>
          <Typography variant="h4" marginTop="16px" sx={{ color: "#FFFF", marginTop: "83px" }}>
            Temperamento do Pietro
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", gap: "15px", marginTop: "20px" }}>
            <Box sx={{ display: "flex", flexDirection: "row" }}><Pets color="primary" /><Typography sx={{ marginLeft: "5px" }}>Calmo </Typography></Box>
            <Box sx={{ display: "flex", flexDirection: "row" }}><Pets color="primary" /><Typography sx={{ marginLeft: "5px" }}>Dócil </Typography></Box>
            <Box sx={{ display: "flex", flexDirection: "row" }}><Pets color="primary" /><Typography sx={{ marginLeft: "5px" }}>Carente </Typography></Box>
          </Box>
          <Typography variant="h4" marginTop="16px" sx={{ color: "#FFFF", marginTop: "83px", marginBottom: "30px" }}>
            Situação do Pietro
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", gap: "15px", marginTop: "8px" }}>
            <Box sx={{ display: "flex", flexDirection: "row" }}><Pets color="primary" /><Typography sx={{ marginLeft: "5px" }}>Castrado </Typography></Box>
            <Box sx={{ display: "flex", flexDirection: "row" }}><Pets color="primary" /><Typography sx={{ marginLeft: "5px" }}>Vermifungado </Typography></Box>
          </Box>
          <Button sx={{ bgcolor: "#27A8AD", width: "100%", marginTop: "83px" }}>Entrar em contato</Button>

        </Box>
      </Box>
      <Box marginTop="32px" >
        <Typography variant="h4" marginBottom="47px" color="#FFFF">Historia</Typography>
        <Typography variant="body1" color="#FFFF">
          Pietro é um cachorro alegre e cheio de energia, com um olhar que derrete corações. Apesar de viver no abrigo, ele nunca perdeu a esperança de encontrar uma família. Pietro adora brincar, é extremamente carinhoso e está sempre pronto para te acompanhar em qualquer aventura.
        </Typography>
        <Typography variant="h4" color="#FFFF" marginTop="47px">
          Observações
        </Typography>
        <Typography variant="body1" color="#FFFF" marginTop="8px">
          Se dá bem com outros cães e é ideal para famílias que buscam um companheiro ativo e leal. Pietro já está vacinado, castrado e pronto para encontrar um lar cheio de amor.
        </Typography>
      </Box>
      <Box>
        <Typography variant="h5" color="primary" marginTop="69px" marginBottom="30px">Outros peludos esperando seu clique</Typography>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }, gap: "13px", alignItems: "stretch", paddingBottom: "34px" }}>

          <CardAnimal nome="jonas" cidade="guaraciaba" imagem="https://th.bing.com/th/id/R.baa69032e7ad3f1054c9c56d02934ede?rik=mUnFcjElPE5ACQ&riu=http%3a%2f%2fopentextbc.ca%2fstrategicmanagement%2fwp-content%2fuploads%2fsites%2f30%2f2014%2f07%2fbasset-hound.jpg%23fixme&ehk=ZNfCpg2Hr6K9jZq%2fKICC486iI%2fTUf0aIiqWTnE5iM1k%3d&risl=&pid=ImgRaw&r=0" />
          <CardAnimal nome="jonas" cidade="guaraciaba" imagem="https://th.bing.com/th/id/R.baa69032e7ad3f1054c9c56d02934ede?rik=mUnFcjElPE5ACQ&riu=http%3a%2f%2fopentextbc.ca%2fstrategicmanagement%2fwp-content%2fuploads%2fsites%2f30%2f2014%2f07%2fbasset-hound.jpg%23fixme&ehk=ZNfCpg2Hr6K9jZq%2fKICC486iI%2fTUf0aIiqWTnE5iM1k%3d&risl=&pid=ImgRaw&r=0" />
          <CardAnimal nome="jonas" cidade="guaraciaba" imagem="https://th.bing.com/th/id/R.baa69032e7ad3f1054c9c56d02934ede?rik=mUnFcjElPE5ACQ&riu=http%3a%2f%2fopentextbc.ca%2fstrategicmanagement%2fwp-content%2fuploads%2fsites%2f30%2f2014%2f07%2fbasset-hound.jpg%23fixme&ehk=ZNfCpg2Hr6K9jZq%2fKICC486iI%2fTUf0aIiqWTnE5iM1k%3d&risl=&pid=ImgRaw&r=0" />
          <CardAnimal nome="jonas" cidade="guaraciaba" imagem="https://th.bing.com/th/id/R.baa69032e7ad3f1054c9c56d02934ede?rik=mUnFcjElPE5ACQ&riu=http%3a%2f%2fopentextbc.ca%2fstrategicmanagement%2fwp-content%2fuploads%2fsites%2f30%2f2014%2f07%2fbasset-hound.jpg%23fixme&ehk=ZNfCpg2Hr6K9jZq%2fKICC486iI%2fTUf0aIiqWTnE5iM1k%3d&risl=&pid=ImgRaw&r=0" />
          <CardAnimal nome="jonas" cidade="guaraciaba" imagem="https://th.bing.com/th/id/R.baa69032e7ad3f1054c9c56d02934ede?rik=mUnFcjElPE5ACQ&riu=http%3a%2f%2fopentextbc.ca%2fstrategicmanagement%2fwp-content%2fuploads%2fsites%2f30%2f2014%2f07%2fbasset-hound.jpg%23fixme&ehk=ZNfCpg2Hr6K9jZq%2fKICC486iI%2fTUf0aIiqWTnE5iM1k%3d&risl=&pid=ImgRaw&r=0" />
          <CardAnimal nome="jonas" cidade="guaraciaba" imagem="https://th.bing.com/th/id/R.baa69032e7ad3f1054c9c56d02934ede?rik=mUnFcjElPE5ACQ&riu=http%3a%2f%2fopentextbc.ca%2fstrategicmanagement%2fwp-content%2fuploads%2fsites%2f30%2f2014%2f07%2fbasset-hound.jpg%23fixme&ehk=ZNfCpg2Hr6K9jZq%2fKICC486iI%2fTUf0aIiqWTnE5iM1k%3d&risl=&pid=ImgRaw&r=0" />
          <CardAnimal nome="jonas" cidade="guaraciaba" imagem="https://th.bing.com/th/id/R.baa69032e7ad3f1054c9c56d02934ede?rik=mUnFcjElPE5ACQ&riu=http%3a%2f%2fopentextbc.ca%2fstrategicmanagement%2fwp-content%2fuploads%2fsites%2f30%2f2014%2f07%2fbasset-hound.jpg%23fixme&ehk=ZNfCpg2Hr6K9jZq%2fKICC486iI%2fTUf0aIiqWTnE5iM1k%3d&risl=&pid=ImgRaw&r=0" />
          <CardAnimal nome="jonas" cidade="guaraciaba" imagem="https://th.bing.com/th/id/R.baa69032e7ad3f1054c9c56d02934ede?rik=mUnFcjElPE5ACQ&riu=http%3a%2f%2fopentextbc.ca%2fstrategicmanagement%2fwp-content%2fuploads%2fsites%2f30%2f2014%2f07%2fbasset-hound.jpg%23fixme&ehk=ZNfCpg2Hr6K9jZq%2fKICC486iI%2fTUf0aIiqWTnE5iM1k%3d&risl=&pid=ImgRaw&r=0" /></Box>
      </Box>

    </Container>
  );
};
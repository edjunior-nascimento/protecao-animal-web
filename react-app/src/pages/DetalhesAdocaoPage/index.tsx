import React, { useState } from "react";
import { Box, Button, Container, IconButton, Modal, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { CloseRounded, CloseTwoTone, ContactSupportRounded, DisabledByDefaultSharp, MailOutlined, Pets, RoomOutlined, ShareOutlined, WhatsApp } from "@mui/icons-material";
import { CardAnimal } from "../../components/features/CardAnimal";
import { CardPost } from "../../components/features/CardPost";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";




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

  const [open, setOpen] = useState(false);
  const [openCardPost, setOpenCardPost] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenCardPost = () => setOpenCardPost(true);
  const handleCloseCardPost = () => setOpenCardPost(false);

  const styleMOdal = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#FFFFFF',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const [index, setIndex] = useState(-1);

  const photos = [
    {
      src: "https://picsum.photos/id/10/600/400",
      width: 600,
      height: 400,
    },
    {
      src: "https://picsum.photos/id/20/600/400",
      width: 600,
      height: 400,
    },
    {
      src: "https://picsum.photos/id/30/600/400",
      width: 600,
      height: 400,
    },
  ];
  const [selectedCard, setSelectedCard] = useState(0);
  return (
    <Container
      maxWidth="xl"
      sx={{
        paddingLeft: { xs: "18px", md: "67px" },
        paddingRight: { xs: "18px", md: "67px" },
        paddingTop: { xs: 4, md: "71px" },
        boxSizing: "border-box"
      }}
    >
      <Box>

        <Lightbox
          open={index >= 0}
          close={() => setIndex(-1)}
          slides={images.map((src) => ({ src }))}
          index={index}
        />
      </Box>
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
          <Box component="img" src={images[selectedIndex]} sx={{ width: "100%", height: { xs: 260, md: 520 }, objectFit: "cover", borderRadius: 2, cursor: "pointer" }} onClick={() => { setIndex(selectedIndex) }} />
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
            <Typography variant="h4">Pietro</Typography>
            <Button variant="contained" color="primary" onClick={handleOpenCardPost}>
              <ShareOutlined />
            </Button>

          </Box>
          <Typography variant="body1" marginTop="8px" sx={{ marginBottom: "23px" }} >
            Cachorro | Golden | Macho | 2 anos | Porte grande
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <RoomOutlined color="primary" />
            <Typography variant="body1" sx={{ textAlign: "center" }} >
              Está em Guaraciaba do Norte
            </Typography>
          </Box>
          <Typography variant="h4" sx={{ color: "#FFFF", marginTop: "83px" }}>
            Temperamento do Pietro
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", gap: "15px", marginTop: "20px" }}>
            <Box sx={{ display: "flex", flexDirection: "row" }}><Pets color="primary" /><Typography sx={{ marginLeft: "5px" }}>Calmo </Typography></Box>
            <Box sx={{ display: "flex", flexDirection: "row" }}><Pets color="primary" /><Typography sx={{ marginLeft: "5px" }}>Dócil </Typography></Box>
            <Box sx={{ display: "flex", flexDirection: "row" }}><Pets color="primary" /><Typography sx={{ marginLeft: "5px" }}>Carente </Typography></Box>
          </Box>
          <Typography variant="h4" sx={{ color: "#FFFF", marginTop: "83px", marginBottom: "30px" }}>
            Situação do Pietro
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", gap: "15px", marginTop: "8px" }}>
            <Box sx={{ display: "flex", flexDirection: "row" }}><Pets color="primary" /><Typography sx={{ marginLeft: "5px" }}>Castrado </Typography></Box>
            <Box sx={{ display: "flex", flexDirection: "row" }}><Pets color="primary" /><Typography sx={{ marginLeft: "5px" }}>Vermifungado </Typography></Box>
          </Box>
          <Button onClick={handleOpen} sx={{ bgcolor: "#27A8AD", color: "#FFF", width: "100%", marginTop: "83px" }}>Entrar em contato</Button>
        </Box>





        <Modal
          open={openCardPost}
          onClose={handleCloseCardPost}
          aria-labelledby="cardpost-modal-title"
          aria-describedby="cardpost-modal-description"
          sx={{

          }}>

          <Box sx={{ height: "100vh", display: "flex", flexDirection: "column", width: "100vw", bgcolor: "rgba(0, 0, 0, 0.8)", position: "fixed", top: 0, left: 0, zIndex: 1300 }}>
            <IconButton
              onClick={handleCloseCardPost}
              sx={{
                position: "absolute",
                top: "15px",
                right: "15px",
                bgcolor: "#777575",
                color: "white",
                zIndex: 1400,
                borderRadius: "0px",
              }}
            >
              <CloseRounded />
            </IconButton>
            <Typography variant="body1" color="#FFFF" ml="20px" mt="31px" sx={{
              display: {
                xs: "none",
              },
            }}>Escolha o estilo que deseja compartilhas nas redes sociais</Typography>

            <Box
              onClick={(e) => e.stopPropagation()}
              sx={{
                position: "absolute",
                top: "55%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                outline: "none",

                width: "90vw",

                display: "flex",
                flexDirection: "row",
                gap: 3,

                overflowX: "auto",
                overflowY: "hidden",

                scrollBehavior: "smooth",

                "&::-webkit-scrollbar": {
                  display: "none",
                },

                msOverflowStyle: "none",
                scrollbarWidth: "none",
              }}
            >
              <CardPost
                nome="biu"
                sexo="macho"
                imagem="https://tse3.mm.bing.net/th/id/OIP.1XplgCxHapxtpPWO5arxvQHaLH?r=0&cb=thfc1falcon2&rs=1&pid=ImgDetMain&o=7&rm=3"
                idade="2 meses"
                porte="pequeno"
                cor="#1cb3b1"
                selected={selectedCard === 0}
                onClick={() => setSelectedCard(0)}

              />
              <CardPost
                nome="que late"
                sexo="macho"
                imagem="https://tse3.mm.bing.net/th/id/OIP.1XplgCxHapxtpPWO5arxvQHaLH?r=0&cb=thfc1falcon2&rs=1&pid=ImgDetMain&o=7&rm=3"
                idade="1 ano"
                porte="Grande"
                cor="#000000"
                selected={selectedCard === 0}
                onClick={() => setSelectedCard(0)}

              />
              <CardPost
                nome="ágatah"
                sexo="fêmea"
                imagem="https://tse3.mm.bing.net/th/id/OIP.1XplgCxHapxtpPWO5arxvQHaLH?r=0&cb=thfc1falcon2&rs=1&pid=ImgDetMain&o=7&rm=3"
                idade="3 anos"
                porte="Médio"
                cor="#D63EC2"
                selected={selectedCard === 0}
                onClick={() => setSelectedCard(0)}

              />
              <CardPost
                nome="popó"
                sexo="macho"
                imagem="https://tse3.mm.bing.net/th/id/OIP.1XplgCxHapxtpPWO5arxvQHaLH?r=0&cb=thfc1falcon2&rs=1&pid=ImgDetMain&o=7&rm=3"
                idade="4 anos"
                porte="Grande"
                cor="#2764E9"
                selected={selectedCard === 0}
                onClick={() => setSelectedCard(0)}

              />
            </Box>
            <Typography variant="body1" color="#FFFF" ml="20px" mt="31px" sx={{
              display: {
                md: "none",
              },
            }}>Escolha o estilo que deseja compartilhas nas redes sociais</Typography>
            <Button sx={{
              marginTop: "85vh", backgroundColor: "#27A8AD", color: "#FFF", border: "none", cursor: "pointer", zIndex: 1400, width: "fit-content", alignSelf: "center",
            }}><Typography component="h5"><strong>Compartilhar</strong></Typography></Button>
          </Box>
        </Modal>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={styleMOdal}>
            <Box display="flex" alignItems="center" gap="8px" >
              <ContactSupportRounded color="primary" sx={{ fontSize: "30px", }} />
              <Typography id="modal-modal-title" variant="h5" component="h2" sx={{ color: "#27A8AD", fontWeight: "500", }}>
                Quer adotar?
              </Typography>
            </Box>
            <Typography id="modal-modal-description" sx={{ mt: 2, color: "#191A21" }} >
              Para adotar esse pet ou saber mais sobre ele, entre em contato com o protetor:
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "20px", color: "#191A21" }}>
              <MailOutlined /><Typography id="modal-modal-description"  >
                protecaoanimal@gmail.com
              </Typography></Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "20px", color: "#191A21" }}>
              <WhatsApp />
              <Typography id="modal-modal-description"  >
                (88) 9 99309 - 9381
              </Typography></Box>
            <button onClick={handleClose} style={{ marginTop: "20px", backgroundColor: "#27A8AD", color: "#FFF", border: "none", padding: "10px 20px", cursor: "pointer", }}  >Cancelar</button>
          </Box>
        </Modal>

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

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
            gap: "13px",
            alignItems: "stretch",
            paddingBottom: "34px",
            width: "100%"
          }}
        >
          <CardAnimal nome="jonas" cidade="guaraciaba" adotado={true} imagem="https://th.bing.com/th/id/R.baa69032e7ad3f1054c9c56d02934ede?rik=mUnFcjElPE5ACQ&riu=http%3a%2f%2fopentextbc.ca%2fstrategicmanagement%2fwp-content%2fuploads%2fsites%2f30%2f2014%2f07%2fbasset-hound.jpg%23fixme&ehk=ZNfCpg2Hr6K9jZq%2fKICC486iI%2fTUf0aIiqWTnE5iM1k%3d&risl=&pid=ImgRaw&r=0" />
          <CardAnimal nome="jonas" cidade="guaraciaba" imagem="https://th.bing.com/th/id/R.baa69032e7ad3f1054c9c56d02934ede?rik=mUnFcjElPE5ACQ&riu=http%3a%2f%2fopentextbc.ca%2fstrategicmanagement%2fwp-content%2fuploads%2fsites%2f30%2f2014%2f07%2fbasset-hound.jpg%23fixme&ehk=ZNfCpg2Hr6K9jZq%2fKICC486iI%2fTUf0aIiqWTnE5iM1k%3d&risl=&pid=ImgRaw&r=0" />
          <CardAnimal nome="jonas" cidade="guaraciaba" imagem="https://th.bing.com/th/id/R.baa69032e7ad3f1054c9c56d02934ede?rik=mUnFcjElPE5ACQ&riu=http%3a%2f%2fopentextbc.ca%2fstrategicmanagement%2fwp-content%2fuploads%2fsites%2f30%2f2014%2f07%2fbasset-hound.jpg%23fixme&ehk=ZNfCpg2Hr6K9jZq%2fKICC486iI%2fTUf0aIiqWTnE5iM1k%3d&risl=&pid=ImgRaw&r=0" />
          <CardAnimal nome="jonas" cidade="guaraciaba" imagem="https://th.bing.com/th/id/R.baa69032e7ad3f1054c9c56d02934ede?rik=mUnFcjElPE5ACQ&riu=http%3a%2f%2fopentextbc.ca%2fstrategicmanagement%2fwp-content%2fuploads%2fsites%2f30%2f2014%2f07%2fbasset-hound.jpg%23fixme&ehk=ZNfCpg2Hr6K9jZq%2fKICC486iI%2fTUf0aIiqWTnE5iM1k%3d&risl=&pid=ImgRaw&r=0" />
          <CardAnimal nome="jonas" cidade="guaraciaba" imagem="https://th.bing.com/th/id/R.baa69032e7ad3f1054c9c56d02934ede?rik=mUnFcjElPE5ACQ&riu=http%3a%2f%2fopentextbc.ca%2fstrategicmanagement%2fwp-content%2fuploads%2fsites%2f30%2f2014%2f07%2fbasset-hound.jpg%23fixme&ehk=ZNfCpg2Hr6K9jZq%2fKICC486iI%2fTUf0aIiqWTnE5iM1k%3d&risl=&pid=ImgRaw&r=0" />
          <CardAnimal nome="jonas" cidade="guaraciaba" imagem="https://th.bing.com/th/id/R.baa69032e7ad3f1054c9c56d02934ede?rik=mUnFcjElPE5ACQ&riu=http%3a%2f%2fopentextbc.ca%2fstrategicmanagement%2fwp-content%2fuploads%2fsites%2f30%2f2014%2f07%2fbasset-hound.jpg%23fixme&ehk=ZNfCpg2Hr6K9jZq%2fKICC486iI%2fTUf0aIiqWTnE5iM1k%3d&risl=&pid=ImgRaw&r=0" />
          <CardAnimal nome="jonas" cidade="guaraciaba" imagem="https://th.bing.com/th/id/R.baa69032e7ad3f1054c9c56d02934ede?rik=mUnFcjElPE5ACQ&riu=http%3a%2f%2fopentextbc.ca%2fstrategicmanagement%2fwp-content%2fuploads%2fsites%2f30%2f2014%2f07%2fbasset-hound.jpg%23fixme&ehk=ZNfCpg2Hr6K9jZq%2fKICC486iI%2fTUf0aIiqWTnE5iM1k%3d&risl=&pid=ImgRaw&r=0" />
          <CardAnimal nome="jonas" cidade="guaraciaba" imagem="https://th.bing.com/th/id/R.baa69032e7ad3f1054c9c56d02934ede?rik=mUnFcjElPE5ACQ&riu=http%3a%2f%2fopentextbc.ca%2fstrategicmanagement%2fwp-content%2fuploads%2fsites%2f30%2f2014%2f07%2fbasset-hound.jpg%23fixme&ehk=ZNfCpg2Hr6K9jZq%2fKICC486iI%2fTUf0aIiqWTnE5iM1k%3d&risl=&pid=ImgRaw&r=0" />
        </Box>
      </Box>
    </Container>
  );
};
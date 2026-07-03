import React from "react";
import { Box, Button, Container, Input, Typography } from "@mui/material";
import { FilterAnimais } from "../../components/features/FilterAnimais";
import { CardAnimal } from "../../components/features/CardAnimal";
import CarouselMui from "../../components/features/CarrocelTelas";
import PaginationCarousel from "../../components/features/CarrocelTelas";
import PaginationRounded from "../../components/features/CarrocelTelas";
import { useNavigate } from "react-router-dom";

export const AdocaoPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Box sx={{ paddingLeft: { xs: 2, md: "51px" }, paddingRight: { xs: 2, md: "51px" }, paddingTop: { xs: 4, md: "71px" }, paddingBottom: { xs: 4, md: 8 } }}>
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
          <Typography variant="h4">
            Encontre seu novo amigo
          </Typography>
        </Box>
        <Box sx={{ bgcolor: "white", marginBottom: "79px", marginTop: "28px", display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: "20px", alignItems: "stretch", paddingLeft: "28px", paddingRight: "28px", paddingBottom: "34px", paddingTop: "35px", color: "black", borderRadius: "8px" }}>
          <Box sx={{ minWidth: 0, height: "56px" }}>
            <FilterAnimais label="Todas as espécies" opcoes={["Cachorro", "Gato"]} />
          </Box> 
          <Box sx={{ minWidth: 0, height: "56px" }}>
            <FilterAnimais label="Todos os sexos" opcoes={["Macho", "Fêmea"]} />
          </Box>
          <Box sx={{ minWidth: 0, height: "56px" }}>
            <FilterAnimais label="Todos os sexos" opcoes={[ "Macho","Fêmea" ]} />
          </Box>
          <Box sx={{ minWidth: 0, height: "56px" }}>
            <FilterAnimais label="Todas as categorias " opcoes={["Grande", "Médio", "Pequeno" ]} />
          </Box>
          <Box sx={{ minWidth: 0, height: "56px" }}>
            <FilterAnimais label="Todos os locais" opcoes={["Centro", "Várzea dos Espinhos", "Martinslândia", "Morrinhos Novos" ]} />
            
          </Box> 
          <Box sx={{ minWidth: 0, height: "56px", display: "flex", alignItems: "stretch" }}>
            <Input placeholder="Nome do Bicho" sx={{ width: "100%", height: "100%", boxSizing: "border-box", border: "1px solid #C6C6C6", borderRadius: "5px", px: 2, color: "black" }} />
          </Box>
          <Box sx={{ minWidth: 0, height: "56px", display: "flex" }}>
            <Button sx={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "5px", cursor: "pointer", background: "#27A8AD", border: "none", color: "white", fontWeight: 700, fontSize: "25px" }}>
              Buscar
            </Button>
          </Box>
        </Box>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }, gap: "20px", alignItems: "stretch", paddingBottom: "34px", paddingTop: "35px" }}>
          <CardAnimal nome="Rex" cidade="Centro" imagem="https://2.bp.blogspot.com/-07_Da0vxQuk/UPGaadF1VQI/AAAAAAAAADE/1KDhiQPNJa8/s320/Cachorro_Feliz.jpg" adotado={true} onClick={() => navigate('/detalhes/1')} />
          <CardAnimal nome="Rex" cidade="Centro" imagem="https://tse1.mm.bing.net/th/id/OIP.qUZKYeiway1yQS3pAev09wAAAA?r=0&cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3" adotado={false} onClick={() => navigate('/detalhes/2')} />
          <CardAnimal nome="Rex" cidade="Centro" imagem="https://i0.hippopx.com/photos/724/19/771/dog-labrador-pet-sitting-dog-thumb.jpg" adotado={false} onClick={() => navigate('/detalhes/3')} />
          <CardAnimal nome="Rex" cidade="Centro" imagem="https://i.ytimg.com/vi/RbYTtzubg8I/maxresdefault.jpg" adotado={true} onClick={() => navigate('/detalhes/4')} />
          <CardAnimal nome="Rex" cidade="Centro" imagem="https://2.bp.blogspot.com/-07_Da0vxQuk/UPGaadF1VQI/AAAAAAAAADE/1KDhiQPNJa8/s320/Cachorro_Feliz.jpg" adotado={false} onClick={() => navigate('/detalhes/5')} />
          <CardAnimal nome="Rex" cidade="Centro" imagem="https://2.bp.blogspot.com/-07_Da0vxQuk/UPGaadF1VQI/AAAAAAAAADE/1KDhiQPNJa8/s320/Cachorro_Feliz.jpg" adotado={false} onClick={() => navigate('/detalhes/6')} />
          <CardAnimal nome="Rex" cidade="Centro" imagem="https://2.bp.blogspot.com/-07_Da0vxQuk/UPGaadF1VQI/AAAAAAAAADE/1KDhiQPNJa8/s320/Cachorro_Feliz.jpg" adotado={false} onClick={() => navigate('/detalhes/7')} />
          <CardAnimal nome="Rex" cidade="Centro" imagem="https://2.bp.blogspot.com/-07_Da0vxQuk/UPGaadF1VQI/AAAAAAAAADE/1KDhiQPNJa8/s320/Cachorro_Feliz.jpg" adotado={false} onClick={() => navigate('/detalhes/8')} />
          <CardAnimal nome="Rex" cidade="Centro" imagem="https://2.bp.blogspot.com/-07_Da0vxQuk/UPGaadF1VQI/AAAAAAAAADE/1KDhiQPNJa8/s320/Cachorro_Feliz.jpg" adotado={false} onClick={() => navigate('/detalhes/9')} />
          <CardAnimal nome="Rex" cidade="Centro" imagem="https://2.bp.blogspot.com/-07_Da0vxQuk/UPGaadF1VQI/AAAAAAAAADE/1KDhiQPNJa8/s320/Cachorro_Feliz.jpg" adotado={false} onClick={() => navigate('/detalhes/10')} />
          <CardAnimal nome="Rex" cidade="Centro" imagem="https://2.bp.blogspot.com/-07_Da0vxQuk/UPGaadF1VQI/AAAAAAAAADE/1KDhiQPNJa8/s320/Cachorro_Feliz.jpg" adotado={false} onClick={() => navigate('/detalhes/11')} />
          <CardAnimal nome="Rex" cidade="Centro" imagem="https://2.bp.blogspot.com/-07_Da0vxQuk/UPGaadF1VQI/AAAAAAAAADE/1KDhiQPNJa8/s320/Cachorro_Feliz.jpg" adotado={false} onClick={() => navigate('/detalhes/12')} />

        </Box>
        <Box sx={{ display: "flex", marginTop: "24px", justifyContent: "flex-end" }}>
          <PaginationRounded />
        </Box>
      </Box>
    </Container>
  );
}
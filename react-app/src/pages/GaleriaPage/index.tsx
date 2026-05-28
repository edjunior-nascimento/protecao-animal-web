import React, { useState } from "react";
import { Box, Card, CardMedia, Container, Typography } from "@mui/material";
import BasicModal from "../../components/features/ModalGaleria";


export const GaleriaPage: React.FC = () => {
    const imagens = [
        "https://2.bp.blogspot.com/-SqLttsLOfls/VwetM_VKQmI/AAAAAAAAQGk/cbVm21-kJhohiewulTBY9ug1QK52XpUpA/s1600/pedigree.jpg",
        "https://2.bp.blogspot.com/-SqLttsLOfls/VwetM_VKQmI/AAAAAAAAQGk/cbVm21-kJhohiewulTBY9ug1QK52XpUpA/s1600/pedigree.jpg", "https://2.bp.blogspot.com/-SqLttsLOfls/VwetM_VKQmI/AAAAAAAAQGk/cbVm21-kJhohiewulTBY9ug1QK52XpUpA/s1600/pedigree.jpg", "https://2.bp.blogspot.com/-SqLttsLOfls/VwetM_VKQmI/AAAAAAAAQGk/cbVm21-kJhohiewulTBY9ug1QK52XpUpA/s1600/pedigree.jpg", "https://2.bp.blogspot.com/-SqLttsLOfls/VwetM_VKQmI/AAAAAAAAQGk/cbVm21-kJhohiewulTBY9ug1QK52XpUpA/s1600/pedigree.jpg", "https://2.bp.blogspot.com/-SqLttsLOfls/VwetM_VKQmI/AAAAAAAAQGk/cbVm21-kJhohiewulTBY9ug1QK52XpUpA/s1600/pedigree.jpg",
    ];

    const [open, setOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <Container sx={{ paddingLeft: { md: "67px", xs: "20px" }, paddingRight: { md: "67px", xs: "20px" } }}>
            <Box sx={{
                py: 4,

            }}>
                <Box sx={{ marginLeft: "14px" }}>
                    <Typography component="p" gutterBottom>
                        Página inicial / Galeria de fotos
                    </Typography>

                    <Typography variant="h5" gutterBottom sx={{ marginTop: "22px", marginBottom: "69px" }}>
                        Feiras de Adoção
                    </Typography>
                </Box>
                <BasicModal  />

                <Box
                    sx={{
                        display: "grid",
                        gap: 2,
                        gridTemplateColumns: {
                            xs: "repeat(2, minmax(0, 1fr))",
                            md: "repeat(3, minmax(0, 1fr))",
                        },
                    }}
                >
                    {imagens.map((url, index) => (
                        <Card key={index} sx={{ overflow: "hidden", borderRadius: 0, cursor: 'pointer' }} onClick={() => { setSelectedIndex(index); setOpen(true); }}>
                            <CardMedia
                                component="img"
                                height="381px"
                                width="auto"
                                image={url}
                                alt={`Imagem ${index + 1}`}
                                sx={{ borderRadius: 0, width: "100%", display: "block", height: { md: "413px", xs: "124px" } }}
                            />
                        </Card>
                    ))}
                </Box>

            </Box>
        </Container>
    );
};

// estados para o modal

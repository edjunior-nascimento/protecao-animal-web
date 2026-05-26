import React from "react";
import { Box, Card, CardMedia, Container, Typography } from "@mui/material";

export const GaleriaPage: React.FC = () => {
    const imagens = [
        "https://2.bp.blogspot.com/-SqLttsLOfls/VwetM_VKQmI/AAAAAAAAQGk/cbVm21-kJhohiewulTBY9ug1QK52XpUpA/s1600/pedigree.jpg",
        "https://2.bp.blogspot.com/-SqLttsLOfls/VwetM_VKQmI/AAAAAAAAQGk/cbVm21-kJhohiewulTBY9ug1QK52XpUpA/s1600/pedigree.jpg", "https://2.bp.blogspot.com/-SqLttsLOfls/VwetM_VKQmI/AAAAAAAAQGk/cbVm21-kJhohiewulTBY9ug1QK52XpUpA/s1600/pedigree.jpg", "https://2.bp.blogspot.com/-SqLttsLOfls/VwetM_VKQmI/AAAAAAAAQGk/cbVm21-kJhohiewulTBY9ug1QK52XpUpA/s1600/pedigree.jpg", "https://2.bp.blogspot.com/-SqLttsLOfls/VwetM_VKQmI/AAAAAAAAQGk/cbVm21-kJhohiewulTBY9ug1QK52XpUpA/s1600/pedigree.jpg", "https://2.bp.blogspot.com/-SqLttsLOfls/VwetM_VKQmI/AAAAAAAAQGk/cbVm21-kJhohiewulTBY9ug1QK52XpUpA/s1600/pedigree.jpg",
    ];

    return (
        <Container>
            <Box sx={{ py: 4,
                    marginLeft: "67px",
                    marginRight: "67px",
            }}>
                <Box sx={{ marginLeft: "14px" }}>
                <Typography component="p" gutterBottom>
                    Página inicial / Galeria de fotos
                </Typography>

                <Typography variant="h5" gutterBottom sx={{ marginTop: "22px", marginBottom: "69px" }}>
                    Feiras de Adoção
                </Typography>
                </Box>

                <Box
                    sx={{
                        display: "grid",
                        gap: 2,
                        gridTemplateColumns: {
                            xs: "1fr",
                            sm: "repeat(2, minmax(0, 1fr))",
                            md: "repeat(3, minmax(0, 1fr))",
                        },
                    }}
                >
                    {imagens.map((url, index) => (
                        <Card key={index} sx={{ overflow: "hidden", borderRadius: 0 }}>
                            <CardMedia
                                component="img"
                                height="381"
                                width="413"
                                image={url}
                                alt={`Imagem ${index + 1}`}
                                sx={{ borderRadius: 0, width: "100%", display: "block" }}
                            />
                        </Card>
                    ))}
                </Box>
            </Box>
        </Container>
    );
};

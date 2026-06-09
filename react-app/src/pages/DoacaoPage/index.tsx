import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CardDocao } from "../../components/features/CardDoacao";
import { QRCodeCanvas } from "qrcode.react";
import { CardPost } from "../../components/features/CardPost";
import { click } from "@testing-library/user-event/dist/click";

export const DoacaoPage: React.FC = () => {
    const navigate = useNavigate();
    const chavePix = "00.00.000/0000-00";

    const copiarChavePix = async () => {
        await navigator.clipboard.writeText(chavePix);
    };
    const click= ()=>console.log("clicou")
    return (
        <Container disableGutters sx={{ width: "100%", overflowX: "clip" }}>
            <Box sx={{ px: "67px", boxSizing: "border-box" }}>
                <Box display="flex" alignItems="center" marginTop={2}>
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
                    <Typography variant="body1">/ Doação</Typography>
                </Box>

                <CardPost nome="biu" sexo="macho" imagem="https://tse3.mm.bing.net/th/id/OIP.1XplgCxHapxtpPWO5arxvQHaLH?r=0&cb=thfc1falcon2&rs=1&pid=ImgDetMain&o=7&rm=3" idade= "2 meses" porte="pequeno" onClick={click}/>

                <Box sx={{ marginTop: "130px", textAlign: "center", marginBottom: "130px" }}>
                    <Typography variant="h4" gutterBottom>
                        Faça sua doação
                    </Typography>
                    <Typography variant="h6">
                        "Sua contribuição faz toda a diferença. Ajude-nos a continuar nossa missão."
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: { md: "repeat(3, minmax(0, 1fr))", xs: "repeat(1, minmax(0, 1fr))" },
                        gap: "24px",
                        justifyItems: "center",
                    }}
                >
                    <CardDocao
                        titulo="Doando R$ 10,00"
                        descricao="Você contribui para a alimentação de um animal por 2 dias."
                        onClick={() => navigate("/formulario-doacao")}
                    />
                    <CardDocao
                        titulo="Doando R$ 20,00"
                        descricao="Você contribui na compra de medicamentos essenciais para um animal resgatado."
                        onClick={() => navigate("/formulario-doacao")}
                    />
                    <CardDocao
                        titulo="Doando R$ 50,00"
                        descricao="Você contribui na alimentação de um animal por uma semana, garantindo sua saúde e bem-estar."
                        onClick={() => navigate("/formulario-doacao")}
                    />
                    <CardDocao
                        titulo="Doando R$ 100,00"
                        descricao="Você contribui para os cuidados veterinários básicos para um animal resgatado."
                        onClick={() => navigate("/formulario-doacao")}
                    />
                    <CardDocao
                        titulo="Doando + de R$ 100,00"
                        descricao="Você ajuda com todos os custos de uma castração segura e nos cuidados do pós operatório."
                        onClick={() => navigate("/formulario-doacao")}
                    />

                    

                    <Box
                        sx={{
                            border: "3px solid #A5A5A5",
                            width: "100%",
                            maxWidth: "402px",
                            minHeight: "363px",
                            height: "auto",
                            borderRadius: "8px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            textAlign: "center",
                            px: 2,
                            py: 2,
                            boxSizing: "border-box",
                            color: "#FFFFFF",
                        }}
                    >
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Box
                                sx={{
                                    width: "58px",
                                    height: "58px",
                                    bgcolor: "#FFFFFF",
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexShrink: 0,
                                }}
                            >
                                <Box
                                    component="img"
                                    src="/assets/iconpix.png"
                                    alt="ícone do pix"
                                    sx={{ width: 34, height: 34 }}
                                />
                            </Box>

                            <Typography variant="h5" sx={{ ml: 2, mb: 0, alignItems: "center", textAlign: "center" }}>
                                Doe pelo PIX
                            </Typography>
                        </Box>

                        <Box sx={{ mt: 1.5 }}>
                            <Typography sx={{ lineHeight: 1.5, fontSize: "14px", color: "#FFFFFF", marginTop: "-5px" }}>
                                Acesse a área Pix dentro do app do seu banco e aponte para o QR Code abaixo:
                            </Typography>
                        </Box>

                        <Box sx={{ mt: 1.5, mb: 1.5 }}>
                            <QRCodeCanvas value="https://github.com/nilton99" size={117} />
                        </Box>

                        <Box sx={{ mb: 1.25 }}>
                            <Typography sx={{ fontSize: "14px", color: "#FFFFFF" }}>
                                {chavePix}

                            </Typography>

                        </Box>
                        <hr style={{ border: "1px solid #FFFFFF", width: "80%", marginTop: "-10px" }} />

                        <Button
                            type="button"
                            onClick={copiarChavePix}
                            sx={{
                                marginLeft: "37px",
                                marginRight: "37px",
                                width: "80%",
                                bgcolor: "#27A8AD",
                                color: "#FFFFFF",
                                px: 2,
                                py: 1,
                                mb: 1,
                                "&:hover": { bgcolor: "#1f8f93" },
                            }}
                        >
                            <Typography>Copiar Chave Pix</Typography>
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};

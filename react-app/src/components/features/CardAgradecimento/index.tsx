import { CheckCircleOutline, CloseOutlined, Favorite } from "@mui/icons-material";
import { Box, Button, Modal, Typography } from "@mui/material";

type Props = {
    titulo: string;
    descricao: string;

};

interface CardAgradecimentoProps {
    open: boolean;
    onClose: () => void;
    titulo: string;
    descricao: string;
}

export function CardAgradecimento({ open, onClose, titulo, descricao }: CardAgradecimentoProps) {

    return (
        <Modal
            open={open}
            onClose={onClose}
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                p: { xs: 2, md: 0 },
            }}
        >
            <Box
                sx={{
                    width: { xs: "100%", md: "520px" },
                    maxWidth: "520px",
                    bgcolor: "#FFFFFF",
                    borderRadius: "12px",
                    px: { xs: 3, md: 5 },
                    py: { xs: 4, md: 5 },
                    position: "relative",
                    textAlign: "center",
                    boxSizing: "border-box",
                    outline: "none",
                }}
            >
                <Button
                    onClick={onClose}
                    sx={{
                        position: "absolute",
                        right: 10,
                        top: 10,
                        minWidth: "auto",
                        p: 0.5,
                    }}
                >
                    <CloseOutlined sx={{ color: "#808080" }} />
                </Button>

                <CheckCircleOutline sx={{ color: "#27A8AD", fontSize: { xs: 66, md: 74 }, mb: 2 }} />

                <Typography sx={{ fontSize: { xs: 24, md: 30 }, fontWeight: 700, color: "#27A8AD", mb: 2 }}>
                    Obrigado!
                </Typography>

                <Typography sx={{ fontSize: { xs: 19, md: 22 }, fontWeight: 700, color: "#3D3D3D", mb: 1 }}>
                    {titulo}
                </Typography>

                <Typography sx={{ fontSize: { xs: 15, md: 17 }, color: "#666666", lineHeight: 1.6, mb: 3, display: "flex", flexDirection: "column", }}>
                    {descricao}
                    <Favorite sx={{ color: "red", ml: "10px" }} />
                </Typography>



            </Box>
        </Modal>
    );
}

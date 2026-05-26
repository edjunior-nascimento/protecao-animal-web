import { CheckCircleOutline, CloseOutlined } from "@mui/icons-material";
import { Box, Button, Modal, Typography } from "@mui/material";

type CardAgradecimentoProps = {
    titulo: string;
    descricao: string;
    open: boolean;
    pedido?: number;
    onClose: () => void;
}



export function CardAgradecimento({
    titulo,
    descricao,
    open,
    pedido,

    onClose
}: CardAgradecimentoProps) {

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
                    {titulo}
                </Typography>
                {pedido !==undefined &&(
                <Box>
                    <Typography sx={{ fontSize: { xs: 16, md: 18 }, color: "#27A8AD", fontWeight: 700, mb: 1 }}>
                        Número do Pedido
                    </Typography>

                    <Typography sx={{ fontSize: { xs: 16, md: 18 }, color: "#27A8AD", fontWeight: 700, mb: 3 }}>
                        {pedido}
                    </Typography>
                </Box>
                )}

                <Typography sx={{ fontSize: { xs: 15, md: 17 }, color: "#666666", lineHeight: 1.6, mb: 3 }}>
                    {descricao}
                </Typography>

                <Button
                    onClick={onClose}
                    sx={{
                        bgcolor: "#27A8AD",
                        color: "#FFFFFF",
                        borderRadius: "8px",
                        px: 4,
                        py: 1.2,
                        fontWeight: 700,
                        textTransform: "none",
                        "&:hover": {
                            bgcolor: "#1E8C90",
                        },
                    }}
                >
                    Fechar
                </Button>
            </Box>
        </Modal>
    );
}
import React, { useState } from "react";
import { Box, TextField, Typography, Paper } from "@mui/material";
import { QRCodeCanvas } from "qrcode.react";

export default function GeradorQRCode() {
    // O que for digitado aqui vira o QR Code (começa com o seu GitHub de padrão)
    const [texto, setTexto] = useState("https://github.com/nilton99");

    return (
        <Paper
            elevation={3}
            sx={{
                padding: "32px",
                maxWidth: "118px",
                height: "117px",
                margin: "20px auto",
                textAlign: "center",
                bgcolor: "#1E1E1E", // Fundo escuro
                color: "#FFFFFF",
                borderRadius: "12px",
            }}
        >
            <Typography variant="h5" sx={{ mb: 3, fontWeight: "bold", color: "#00C6A2" }}>
                Gerador de QR Code
            </Typography>

            {/* CAMPO DE DIGITAÇÃO (Onde você vai digitar) */}
            <TextField
                fullWidth
                label="Digite o texto ou link aqui"
                variant="outlined"
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
                sx={{
                    mb: 4,
                    "& .MuiOutlinedInput-root": {
                        color: "#FFFFFF", // Cor do texto digitado
                        "& fieldset": { borderColor: "#A5A5A5" }, // Cor da borda normal
                        "&:hover fieldset": { borderColor: "#00C6A2" }, // Cor ao passar o mouse
                        "&.Mui-focused fieldset": { borderColor: "#00C6A2" }, // Cor focado
                    },
                    "& .MuiInputLabel-root": { color: "#A5A5A5" }, // Cor do texto do Label
                    "& .MuiInputLabel-root.Mui-focused": { color: "#00C6A2" }, // Cor do Label focado
                }}
            />

            {/* QUADRADO ONDE O QR CODE APARECE EM TEMPO REAL */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    bgcolor: "#FFFFFF",
                    p: 2,
                    borderRadius: "8px",
                    width: "fit-content",
                    margin: "0 auto"
                }}
            >
                <QRCodeCanvas value={texto} size={180} />
            </Box>

            <Typography variant="body2" sx={{ mt: 2, color: "#A5A5A5" }}>
                O QR Code muda a cada letra que você digita!
            </Typography>
        </Paper>
    );
}
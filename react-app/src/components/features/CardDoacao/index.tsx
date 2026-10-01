import { Box, Typography } from "@mui/material";

type Props = {
  titulo: string;
  descricao: string;
  onClick?: () => void;
};

export function CardDocao({ titulo, descricao, onClick }: Props) {
  return (
    <Box
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
      onKeyDown={
        onClick
          ? (event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                onClick();
              }
            }
          : undefined
      }
      sx={{
        bgcolor: "#FFFFFF",
        width: "100%",
        maxWidth: "405px",
        height: "366px",
        borderRadius: "8px",
        cursor: onClick ? "pointer" : "default",
        alignItems: "center",
        textAlign: "center",
        padding: "0 16px",
        outline: "none",
        transition: "outline 0.2s ease-in-out",
        "&:focus-visible": {
          outline: "3px solid #1976d2", // azul padrão MUI
          outlineOffset: "4px",
        },
      }}
    >
      <Box
        component="img"
        src="/assets/doe.png"
        alt="mão segurando coração"
        sx={{
          width: 78,
          height: 78,
          textAlign: "center",
          alignItems: "center",
          marginTop: "32px",
          marginBottom: "34px",
        }}
      />
      <Box>
        <Typography variant="h5" sx={{ marginBottom: "27px" }}>
          {titulo}
        </Typography>
      </Box>
      <Box>
        <Typography variant="body1" sx={{ color: "#000000", lineHeight: 1.6 }}>
          {descricao}
        </Typography>
      </Box>
    </Box>
  );
}

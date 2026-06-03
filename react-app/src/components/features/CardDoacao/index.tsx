import { Box, Typography } from "@mui/material";

type Props = {
  titulo: string;
  descricao: string;
  onClick: () => void;
  
};


export function CardDocao( { titulo, descricao, onClick }: Props) {
  return (
    <Box onClick={onClick}
      sx={{
        bgcolor: "#FFFFFF",
        width: "100%",
        maxWidth: "405px",
        height: "366px",
        borderRadius: "8px",
        cursor: "pointer" ,
        alignItems: "center",
        textAlign: "center",
        padding: "0 16px",
        outline: "none",
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
        <Typography variant="h5"
          sx={{ marginBottom: "27px", }}>
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

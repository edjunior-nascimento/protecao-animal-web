import { Box, Card, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

type CardPostProps = {
  nome: string;
  sexo: string;
  imagem: string;
  idade: string;
  porte: string;
  cor?: string;
  onClick?: () => void;
};

export function CardPost({ nome, sexo, imagem, idade, porte, cor="#00b3a6", onClick }: CardPostProps) {

  return (
    <Card 
      
      sx={{
        width: 320,
        borderRadius: 2,
        boxShadow: 3,
        cursor: 'pointer',
        overflow: 'visible',
        bgcolor: cor,
        height: "800px"
      }}
    >
      <Box sx={{ bgcolor: '#f6a623', height: 110, display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
        <Box
          component="img"
          src={imagem}
          alt={nome}
          sx={{
            width: 180,
            height: 180,
            objectFit: 'cover',
            borderRadius: 2,
            boxShadow: 4,
            transform: 'translateY(36px)'
          }}
        />
      </Box>

      <Box sx={{ mt: -6, px: 2, pb: 2, textAlign: 'center' }}>
        <Typography
          variant="subtitle1"
          sx={{
            display: 'inline-block',
            bgcolor: '#00b3a6',
            color: '#fff',
            px: 2,
            py: 0.5,
            borderRadius: 2,
            fontWeight: 700
          }}
        >
          {nome}
        </Typography>

        <Box sx={{ mt: 1, bgcolor: '#fff', borderRadius: 2, boxShadow: 1, p: 2, textAlign: 'left' }}>
          <Typography variant="body2" sx={{ fontWeight: 700 }}>{sexo}</Typography>
          <Typography variant="body2">{idade}</Typography>
          <Typography variant="body2">{porte}</Typography>
        </Box>

        <Box sx={{ mt: 1 }}>
          <Typography variant="caption">Acesse o link:</Typography>
          <Box sx={{ mt: 0.5, display: 'inline-block', bgcolor: '#f6a623', color: '#fff', px: 2, py: 0.5, borderRadius: 1, fontWeight: 700 }} onClick={onClick}>
            protecaoanimal.com.br
          </Box>
        </Box>
      </Box>
    </Card>
  );
}

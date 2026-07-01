import { Box, Card, Typography } from "@mui/material";

type CardPostProps = {
  nome: string;
  sexo: string;
  imagem: string;
  idade: string;
  porte: string;
  cor?: string;
  onClick?: () => void;
};

export function CardPost({ nome, sexo, imagem, idade, porte, cor , onClick }: CardPostProps) {
  return (
    <Card
      onClick={onClick}
      sx={{
        width: 320,
        boxShadow: 4,
        cursor: 'pointer',
        bgcolor: cor, // O fundo padrão do card inteiro se torna a cor da prop
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        
      }}
    >
      <Box sx={{ pt: 3, pb: 4, textAlign: 'center', mb: "50px" }}>
        <Typography 
          variant="h3" 
          sx={{ color: "#FFFFFF", fontWeight: 500, letterSpacing: 1, mb: 1 }}
        >
          ADOÇÃO
        </Typography>
        <Typography 
          variant="h6" 
          sx={{ 
            color: "#FFFFFF", 
            bgcolor: "#f6a623", 
            width: "fit-content", 
            display: 'inline-block',
            px: 4, py: 0.5,
            borderRadius: "12px", 
            fontWeight: 700,
            fontSize: '1.2rem'
          }}
        >
          RESPONSÁVEL
        </Typography>
      </Box>

      <Box 
        sx={{ 
          bgcolor: '#f6a623', 
          height: "150px", 
          display: 'flex', 
          justifyContent: 'center',
          position: 'relative'
        }}
      >
        
        <Box 
          sx={{ 
            width: 150, 
            height: 150, 
            border: '4px solid #f6a623',
            boxSizing: 'content-box',
            mt: -8,
            mb: -15,  
            zIndex: 3,
          }}
        >
          <Box
            component="img"
            src={imagem}
            alt={nome}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: 'cover',
            }}
          />
        </Box>
      </Box>

      <Box 
        sx={{
          pb: 4, 
          px: 3, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          zIndex: 5
        }}
      >
        
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', mt: "-40px" }}>
          
          <Typography
            variant="subtitle1"
            sx={{
              bgcolor:"#00b3a6",
              color: '#fff',
              px: 3,
              py: 0.6,
              borderRadius: '8px',
              fontWeight: 700,
              textAlign: 'center',
              zIndex: 5,
              mb: -0.5,
              mt: "-80px",
              position: 'absolute',
              width: 'fit-content',
              
            }}
          >
            {nome}
          </Typography>

          <Box 
            sx={{ 
              bgcolor: '#FFFF', 
              borderRadius: 3, 
              boxShadow: 2, 
              p: 2, 
              width: '50%',
              textAlign: 'center', 
              color: "#000000",
              zIndex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: 0.5,
              mt: -7,
              height: '102px',
            }}
          >
            <Typography variant="body1" sx={{ fontWeight: 800, mt: -1 }}>{sexo}</Typography>
            <Typography variant="body1" sx={{ fontWeight: 700 }}>{idade}</Typography>
            <Typography variant="body1" sx={{ fontWeight: 700, mb: 2 }}>{porte}</Typography>
          </Box>
        </Box>

        
        <Box sx={{ mt: 1, textAlign: 'center', width: '100%' }}>
          <Typography variant="body2" sx={{ color: '#fff', fontWeight: 500 }}>
            Acesse o link:
          </Typography>
          <Box 
            sx={{ 
              mt: 0.5, 
              bgcolor: '#f6a623',
              color: '#fff', 
              py: 1, 
              borderRadius: 2, 
              fontWeight: 700,
              fontSize: '0.95rem',
              letterSpacing: 0.5,
              width: '90%',
              mx: 'auto'
            }}
          >
            protecaoanimal.com.br
          </Box>
        </Box>

      </Box>
    </Card>
  );
}
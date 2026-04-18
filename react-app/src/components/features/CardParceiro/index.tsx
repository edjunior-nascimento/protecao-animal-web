
import Box from '@mui/material/Box';



export const CardParceiro = () => {
  return (
    <Box 
      component="img" 
      src="./assets/parceiro1.png" 
      alt="Parceiro 1" 
      sx={{ 
        width: '80px', 
        height: '80px', 
        objectFit: 'contain', 
        borderRadius:20, 
        backgroundColor:"white"
      }} />
  );
}
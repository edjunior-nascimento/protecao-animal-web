import { CloseOutlined, RoomOutlined } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

export function CardAdocao({ temBotao = false }){

    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: '10px', border: '1px solid #ccc', borderRadius: '8px', padding:{ md:'16px', xs: "10px"}, backgroundColor: '#fff', marginLeft:{ md: "20px", xs: "10px"}, marginRight:{ md: "20px", xs: "10px"}, alignItems: "center"}}> 
            
            <Box component="img" sx={{ width:{xs:60, md:150}, height: {xs:60, md:150} }} src="https://cdn-icons-png.flaticon.com/512/616/616408.png" alt="Imagem de Adoção" />

            <Box sx={{marginLeft: '20px', marginTop: '19.5px'}}>
                <Typography variant="h5">
                    Pietro
                </Typography>

                <Typography sx={{marginTop: '23px'}} variant="body1" color='black'>
                    Cachorro | Golden | Macho | 2 anos | Porte grande 
                </Typography>    

                <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop:'24.5px' }}>
                    <RoomOutlined color="primary"/> 
                    <Typography variant="body1" color='black'>
                        Está em Guaraciaba do Norte 
                    </Typography>  
                </Box>
            </Box>

            {temBotao && (
                <Box sx={{ marginLeft: 'auto', marginRight: '20px', display: 'flex', cursor: 'pointer' }}>
                    <CloseOutlined sx={{color: '#808080'}}/>
                </Box>
            )}
        </Box>
    )
}
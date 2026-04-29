
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import React from 'react';
import { CloseOutlined, RoomOutlined } from '@mui/icons-material';

export function CardAdocao(){

    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: '10px', border: '1px solid #ccc', borderRadius: '8px', padding:{ md:'16px', xs: "10px"}, backgroundColor: '#fff', marginLeft:{ md: "20px", xs: "10px"}, marginRight:{ md: "20px", xs: "10px"}, alignItems: "center"}}> 
            <Box component= "img" sx={{ width:{xs:60, md:200}, height: {xs:60, md:200} }} src="https://cdn-icons-png.flaticon.com/512/616/616408.png" alt="Imagem de Adoção">
            </Box>
            <Box sx={{marginLeft: '20px', marginmTop: '19.5px'}}>
                <Typography variant="h5" component="h5">
                    Pietro
                </Typography>
                <Typography sx={{marginTop: '23px'}} variant="body1" component="p" color='black'>
                    Cachorro  | Golden | Macho | 2 anos | Porte grande 
                </Typography>    
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '5px', marginTop:'24.5px' }}>
                    <RoomOutlined color="primary"/> 
                    <Typography variant="body1" component="p" color='black'>
                        Está Em Guaraciaba Do Norte 
                    </Typography>  
                </Box>
            </Box>
            <Box sx={{ marginLeft: 'auto', marginRight: '20px', justifyContent: 'center', alignItems: 'center', display: 'flex', cursor: 'pointer' }}>
                <CloseOutlined sx={{color: '#808080'}}/>
            </Box>
        </Box>
    )
}
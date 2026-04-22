
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
        <Box sx={{ display: 'flex', flexDirection: 'row'}}> 
            <Box component= "img" sx={{ width: 200, height: 200 }} src="https://cdn-icons-png.flaticon.com/512/616/616408.png" alt="Imagem de Adoção">
            </Box>
            <Box>
                <Typography variant="h5" component="h5">
                    Pietro
                </Typography>
                <Typography variant="body1" component="p" color='black'>
                    Cachorro  | Golden | Macho | 2 anos | Porte grande 
                </Typography>    
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '5px' }}>
                    <RoomOutlined color="primary"/> 
                    <Typography variant="body1" component="p" color='black'>
                        Está Em Guaraciaba Do Norte 
                    </Typography>  
                </Box>
            </Box>
            <Box>
                <CloseOutlined color='primary'/>
            </Box>
        </Box>
    )
}
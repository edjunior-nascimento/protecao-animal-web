import { CloseOutlined, RoomOutlined } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
type CardAdocaoProps = {
    id?: number;
    imagem: string;
    nome: string;
    especie: string;
    sexo: string;
    idade: string;
    porte: string;
    localizacao?: string;
    editavel?: boolean;
}

export function CardAdocao({ 
    id,
    imagem,
    nome,
    especie,
    sexo,
    idade,
    porte,
    localizacao = "Guaraciaba do Norte",
    editavel = false }: CardAdocaoProps) {

    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: '10px', border: '1px solid #ccc', borderRadius: '8px', padding: { md: '16px', xs: "10px" }, backgroundColor: '#fff', marginLeft: { md: "20px", xs: "10px" }, marginRight: { md: "20px", xs: "10px" }, alignItems: "center" }}>

            <Box component="img" sx={{ width: { xs: 60, md: 150 }, height: { xs: 60, md: 150 } }} src={imagem} alt="Imagem de Adoção" />

            <Box sx={{ marginLeft: '20px', marginTop: '19.5px' }}>
                <Typography variant="h5">
                    {nome}
                </Typography>

                <Typography sx={{ marginTop: '23px' }} variant="body1" color='black'>
                    {especie} | {sexo} | {idade} | {porte}
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '24.5px' }}>
                    <RoomOutlined color="primary" />
                    <Typography variant="body1" color='black'>
                        Está em {localizacao}
                    </Typography>
                </Box>
            </Box>

            {editavel && (
                <Box sx={{ marginLeft: 'auto', marginRight: '20px', display: 'flex', cursor: 'pointer' }}>
                    <CloseOutlined sx={{ color: '#808080' }} />
                </Box>
            )}
        </Box>
    )
}
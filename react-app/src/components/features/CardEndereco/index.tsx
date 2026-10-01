import { CloseOutlined, RoomOutlined } from "@mui/icons-material";
import { Box, Input, Typography } from "@mui/material";

export function CardEndereco() {

    return (
        <Box sx={{ marginTop: "26px", backgroundColor: "white", marginLeft: { xs: "10px", md: "81px" }, marginRight: { xs: "10px", md: "81px" }, marginBottom: "26px", paddingTop: "10px", paddingBottom: "35px" }}>
            <Typography sx={{ marginLeft: "18px", marginTop: "15px", marginRight: "50px", marginBottom: "15px", fontSize: "25px", fontWeight: "bold" }} component="p" color="black">
                Endereço
            </Typography>
            <hr />
            <Box sx={{ display: {md: "flex", xs: "block"}, justifyContent: "space-between", marginLeft: "20px", marginTop: "20px", marginRight: "20px", marginBottom: "30px" }}>

                <Box sx={{ width: "100%", marginRight: "22px" }}>
                    <Typography sx={{ marginBottom: "10px", fontSize: "18px", display: "flex" }} component="p" color="black" >
                        Endereço  <Typography sx={{ color: "red", marginLeft: "5px" }}>*</Typography>
                    </Typography>
                    <Input sx={{ marginTop: "10px", marginBottom: "20px", width: "100%", color: "black", border: "solid 1px #C6C6C6", display: "flex", borderRadius: "5px" }}></Input>
                </Box>
                <Box sx={{ width: "100%", marginRight: "22px" }}>
                    <Typography sx={{ marginBottom: "10px", fontSize: "18px", display: "flex" }} component="p" color="black" >
                        Numero <Typography sx={{ color: "red", marginLeft: "5px" }}>*</Typography>
                    </Typography>
                    <Input sx={{ marginTop: "10px", marginBottom: "20px", width: "100%", color: "black", border: "solid 1px #C6C6C6", display: "flex", borderRadius: "5px" }}></Input>
                </Box>
            </Box>

            <Box sx={{ display: {md: "flex", xs: "block"}, justifyContent: "space-between", marginLeft: "20px", marginTop: "20px", marginRight: "20px", marginBottom: "30px" }}>
                <Box sx={{ width: "100%", marginRight: "22px" }}>
                    <Typography sx={{ marginBottom: "10px", fontSize: "18px", display: "flex" }} component="p" color="black" >
                        Bairro/Distrito <Typography sx={{ color: "red", marginLeft: "5px" }}>*</Typography>
                    </Typography>
                    <Input sx={{ marginTop: "10px", marginBottom: "20px", width: "100%", color: "black", border: "solid 1px #C6C6C6", display: "flex", borderRadius: "5px" }}></Input>
                </Box>

                <Box sx={{ width: "100%", marginRight: "22px" }}>
                    <Typography sx={{ marginBottom: "10px", fontSize: "18px", display: "flex" }} component="p" color="black" >
                        CEP  <Typography sx={{ color: "red", marginLeft: "5px" }}>*</Typography>
                    </Typography>
                    <Input sx={{ marginTop: "10px", marginBottom: "20px", width: "100%", color: "black", border: "solid 1px #C6C6C6", display: "flex", borderRadius: "5px" }}></Input>
                </Box>
            </Box>
            <Box sx={{ display: {md: "flex", xs: "block"}, justifyContent: "space-between", marginLeft: "20px", marginTop: "20px", marginRight: "20px", marginBottom: "30px" }}>
                <Box sx={{ width: "100%", marginRight: "22px" }}>
                    <Typography sx={{ marginBottom: "10px", fontSize: "18px", display: "flex" }} component="p" color="black" >
                        Cidade  <Typography sx={{ color: "red", marginLeft: "5px" }}>*</Typography>
                    </Typography>
                    <Input sx={{ marginTop: "10px", marginBottom: "20px", width: "100%", color: "black", border: "solid 1px #C6C6C6", display: "flex", borderRadius: "5px" }}></Input>
                </Box>

                <Box sx={{ width: "100%", marginRight: "22px" }}>
                    <Typography sx={{ marginBottom: "10px", fontSize: "18px", display: "flex" }} component="p" color="black" >
                        Estado  <Typography sx={{ color: "red", marginLeft: "5px" }}>*</Typography>
                    </Typography>
                    <Input sx={{ marginTop: "10px", marginBottom: "20px", width: "100%", color: "black", border: "solid 1px #C6C6C6", display: "flex", borderRadius: "5px" }}></Input>
                </Box>
            </Box>
            <Typography sx={{ marginLeft: "18px", marginTop: "15px", marginRight: "50px", fontSize: "18px", display: "flex" }} component="p" color="black" >
                Complemento/Referencia
            </Typography>

            <Input sx={{ marginLeft: "20px", marginTop: "10px", marginRight: "20px", marginBottom: "20px", width: "auto", height: "40px", color: "#C6C6C6", border: "solid 1px", display: "flex", borderRadius: "5px" }} />
        </Box>
    )
}
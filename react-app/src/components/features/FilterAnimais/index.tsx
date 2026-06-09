import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

type FiltroAnimalProps = {
    label: string;
    opcoes: string[];
}
export function FilterAnimais({ label, opcoes }: FiltroAnimalProps) {

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label= {label}
                >                   
                    {opcoes.map((opcao, index) => (
                        <MenuItem key={index} value={opcao}>{opcao}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    )
}
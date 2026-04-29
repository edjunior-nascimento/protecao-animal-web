
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export function FilterAnimais() {

    return (
        <Box sx={{bgcolor: 'white', width: '100%', height: '100px', display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
            <Box sx={{ width: '30%', height: '80%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Age"
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Box></Box>
        </Box>
    )
}
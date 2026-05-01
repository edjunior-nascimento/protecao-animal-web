
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export function FilterAnimais() {

    return (
        <Box sx={{ bgcolor: 'white', width: '100%', height: '100%', display: 'flex', alignItems: 'center' }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                    fullWidth
                    sx={{ height: "56px", borderRadius: "5px" }}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}
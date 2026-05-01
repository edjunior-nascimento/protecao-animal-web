import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

/**
 * @typedef {Object} Opcao
 * @property {string} valor
 * @property {string} label
 */

/**
 * @param {Object} props
 * @param {string} props.label
 * @param {Opcao[]} props.opcoes
 */
export function FilterAnimais({ label = '', opcoes = [] }) {

    return (
        <Box sx={{ bgcolor: 'white', width: '100%', height: '100%', display: 'flex', alignItems: 'center' }}>
            <FormControl fullWidth>
                {label && <InputLabel>{label}</InputLabel>}

                <Select
                    label={label || undefined}
                    fullWidth
                    sx={{ height: "56px", borderRadius: "5px" }}
                >
                    {opcoes.map((opcao) => (
                        <MenuItem key={opcao.valor} value={opcao.valor}>
                            {opcao.label}
                        </MenuItem>
                    ))}
                </Select>

            </FormControl>
        </Box>
    )
}
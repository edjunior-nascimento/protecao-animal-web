import React from "react";
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
    const idBase = React.useId();
    const [valor, setValor] = React.useState('');

    return (
        <Box sx={{ bgcolor: 'white', width: '100%', minHeight: '56px', display: 'flex', alignItems: 'center' }}>
            <FormControl fullWidth variant="outlined" sx={{ minHeight: '56px' }}>
                {label && <InputLabel id={`${idBase}-label`} shrink>{label}</InputLabel>}

                <Select
                    labelId={label ? `${idBase}-label` : undefined}
                    id={label ? `${idBase}-select` : undefined}
                    value={valor}
                    onChange={(event) => setValor(event.target.value)}
                    renderValue={(selected) => {
                        if (!selected) {
                            return <span style={{ color: '#7a7a7a' }}>{label}</span>;
                        }

                        return selected;
                    }}
                    displayEmpty
                    label={label || undefined}
                    fullWidth
                    sx={{ minHeight: "56px", borderRadius: "5px" }}
                >
                    <MenuItem value="" disabled>
                        {label}
                    </MenuItem>
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
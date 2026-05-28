
import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Box,
    Button,
    IconButton,
    useTheme,
    useMediaQuery,
    Menu,
    MenuItem,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';


export const Header: React.FC = () => {
    const isMobile = useMediaQuery(useTheme().breakpoints.down('md'));
    const [showMenu, setShowMenu] = useState(false);
    const abrirMenu = () => {
        setShowMenu(true);
    };
    const fecharMenu = () => {
        setShowMenu(false);
    };


    return (
        <AppBar position="absolute" color="transparent" sx={{ boxShadow: 'none' }} >
            <Toolbar sx={{ px: { xs: 2, md: "80px" } }}>
                <Box sx={{ display: 'flex', alignItems: 'center', minWidth: 128 }}>
                    <RouterLink to="/">
                        <Box
                            component="img"
                            src="/assets/logo_protecao.png"
                            alt="logo proteção animal"
                            sx={{
                                width: 141,
                                cursor: 'pointer',
                                '&:hover': {
                                    opacity: 0.8
                                }
                            }}
                        />
                    </RouterLink>
                </Box>
                {!isMobile && (
                    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
                        <Box sx={{ display: 'flex', gap: 3 }}>
                            <Button
                                key='/'
                                component={RouterLink}
                                to='/'
                                sx={{
                                    color: 'text.primary',
                                    textTransform: 'none',
                                    fontFamily: 'Jockey One, Arial, sans-serif',
                                    fontSize: '1.1rem',
                                    fontWeight: 200,
                                    '&:hover': {
                                        color: 'text.secondary',
                                        backgroundColor: 'transparent'
                                    }
                                }}
                            >
                                Página inicial
                            </Button>

                            <Button
                                key='/ajudar'
                                component={RouterLink}
                                to='/ajudar'
                                sx={{
                                    color: 'text.primary',
                                    textTransform: 'none',
                                    fontFamily: 'Jockey One, Arial, sans-serif',
                                    fontSize: '1.1rem',
                                    fontWeight: 200,
                                    '&:hover': {
                                        color: 'text.secondary',
                                        backgroundColor: 'transparent'
                                    }
                                }}
                            >
                                Quero ajudar
                            </Button>

                            <Button
                                key='/adocao'
                                component={RouterLink}
                                to='/adocao'
                                sx={{
                                    color: 'text.primary',
                                    textTransform: 'none',
                                    fontFamily: 'Jockey One, Arial, sans-serif',
                                    fontSize: '1.1rem',
                                    fontWeight: 200,
                                    '&:hover': {
                                        color: 'text.secondary',
                                        backgroundColor: 'transparent'
                                    }
                                }}
                            >
                                Quero adotar
                            </Button>

                            <Button
                                key='/sobre'
                                component={RouterLink}
                                to='/sobre'
                                sx={{
                                    color: 'text.primary',
                                    textTransform: 'none',
                                    fontFamily: 'Jockey One, Arial, sans-serif',
                                    fontSize: '1.1rem',
                                    fontWeight: 200,
                                    '&:hover': {
                                        color: 'text.secondary',
                                        backgroundColor: 'transparent'
                                    }
                                }}
                            >
                                Quem somos
                            </Button>
                        </Box>
                    </Box>
                )}
                {isMobile && (
                    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
                        <IconButton
                            color="inherit"
                            sx={{ color: 'text.primary' }}
                            onClick={abrirMenu}
                        >
                            <MenuIcon sx={{ width: '36px', height: '36px' }} />
                        </IconButton>
                        <Menu
                            open={showMenu}
                            onClose={fecharMenu}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            sx={{
                                position: 'fixed',
                                top: 68,
                            }}
                        >
                            <MenuItem>Página inicial</MenuItem>
                            <MenuItem>Quero ajudar</MenuItem>
                            <MenuItem>Quero adotar</MenuItem>
                            <MenuItem>Quem somos</MenuItem>

                        </Menu>
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
}
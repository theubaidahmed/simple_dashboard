import {
    AppBar,
    Box,
    IconButton,
    Toolbar,
    Typography,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';
import sidebarLinks from '../services/sidebarLinks';

const drawerWidth = 250;

const drawer = (
    <Box bgcolor='primary.main' display='flex' flexDirection='column' minHeight='100vh' pt={10}>
        <List sx={{ px: 3 }}>
            {sidebarLinks.map(link => (
                <ListItem
                    key={link.name}
                    disablePadding
                    disableRipple
                    disableFocusRipple
                    sx={{
                        color: '#717588',
                        '&:hover': {
                            background: '#303551',
                            color: 'white',
                            borderRadius: 4,
                        },
                    }}>
                    <ListItemButton>
                        <ListItemIcon sx={{ color: '#717588', minWidth: '36px' }}>
                            {link.icon}
                        </ListItemIcon>
                        <ListItemText primary={link.name} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    </Box>
);

const Header = props => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const toggleDrawer = () => setMobileOpen(prev => !prev);

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar
                position='fixed'
                elevation={0}
                color='transparent'
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}>
                <Toolbar sx={{ color: 'text.primary' }}>
                    <IconButton
                        color='inherit'
                        aria-label='open drawer'
                        edge='start'
                        onClick={toggleDrawer}
                        sx={{ mr: 2, display: { sm: 'none' } }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant='h6' noWrap component='div'>
                        Responsive drawer
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component='nav'
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label='mailbox folders'>
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    variant='temporary'
                    open={mobileOpen}
                    onClose={toggleDrawer}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            border: 'none',
                            width: drawerWidth,
                        },
                    }}>
                    {drawer}
                </Drawer>
                <Drawer
                    variant='permanent'
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            border: 'none',
                            width: drawerWidth,
                        },
                    }}
                    open>
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component='main'
                sx={{
                    flexGrow: 1,
                    p: 2,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    minHeight: 'calc(100vh - 40px)',
                    mt: 5,
                }}>
                {props.children}
            </Box>
        </Box>
    );
};

export default Header;

import {
    AppBar,
    Box,
    IconButton,
    Toolbar,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Grid,
    Avatar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import React, { useState } from 'react';
import sidebarLinks from '../services/sidebarLinks';
import Search from './Search';

const drawerWidth = 280;

const drawer = (
    <Box bgcolor='primary.main' display='flex' flexDirection='column' height='100%' pt={10}>
        <List sx={{ px: 3 }}>
            {sidebarLinks.map(link => (
                <ListItem
                    key={link.name}
                    sx={{
                        color: '#717588',
                        '&:hover': {
                            background: '#303551',
                            borderRadius: 4,
                            '.MuiListItemIcon-root': {
                                color: 'white',
                            },
                            '.MuiListItemText-root': {
                                color: 'white',
                            },
                        },
                    }}>
                    <ListItemIcon sx={{ color: '#717588', minWidth: '36px' }}>
                        {link.icon}
                    </ListItemIcon>
                    <ListItemText primary={link.name} />
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
                    width: { md: `calc(100% - ${drawerWidth}px)` },
                    ml: { md: `${drawerWidth}px` },
                }}>
                <Toolbar sx={{ color: 'text.primary', pt: 2 }}>
                    <Grid container spacing={2}>
                        <Grid item xs>
                            <IconButton
                                color='inherit'
                                aria-label='open drawer'
                                edge='start'
                                onClick={toggleDrawer}
                                sx={{ display: { md: 'none' } }}>
                                <MenuIcon />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <Search placeholder='Search...' />
                        </Grid>
                        <Grid item xs={2} align='right'>
                            <IconButton>
                                <SettingsIcon />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtsSbrsoLNPyAUwVkiNfnQsf6d-xPwtXjDZ-NGyZxzHQ&s' />
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Box
                component='nav'
                sx={{ width: { md: drawerWidth }, flexShrink: { sm: 0 } }}
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
                        display: { xs: 'block', md: 'none' },
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
                        display: { xs: 'none', md: 'block' },
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
                    p: 4,
                    width: { md: `calc(100% - ${drawerWidth}px)` },
                    minHeight: 'calc(100vh - 40px)',
                    mt: 5,
                }}>
                {props.children}
            </Box>
        </Box>
    );
};

export default Header;

import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../../Styles/Header.css';
import MenuIcon from '@mui/icons-material/Menu';
 
import Logo from '../../images/mylogo.png'
const Header = () => {
    const [mobileopen, setMobileOpen] = useState(false)
    // for mobile menu
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileopen);
    };
    //menu drawer
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography
                color={"#ff3d00"}
                variant='h6'
                component={"div"}
                sx={{ flexGrow: 1, my: 2 }}>
                
                <img src={Logo} alt="logo" height={'70'} width='250px' style={{backgroundColor:'black', color:'white',}} />
            </Typography>
            <Divider />
            <ul className='mobile-navigationmenu'>
                <li>
                    <NavLink to={'/'}>Home</NavLink>
                </li>
                <li>
                    <NavLink  to={'/menu'}>Menu</NavLink>
                </li>
                <li>
                    <NavLink  to={'/about'}>About</NavLink>
                </li>
                <li>
                    <NavLink   to={'/contact'}>Contact</NavLink>
                </li>
            </ul>
        </Box>
    )

    return (
        <>
            <Box>
                <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
                    <Toolbar>
                        <IconButton
                            color='inherit'
                            aria-label='open drawer'
                            edge='start'
                            sx={{ mr: 2, display: { sm: 'none' } }}
                            onClick={handleDrawerToggle}>
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            color={"goldenrod"}
                            variant='h6'
                            component={"div"}
                            sx={{ flexGrow: 1 }}>
                           <img src={Logo} alt="logo" height={'70'} width='250px' style={{backgroundColor:'black', color:'white',}}/>
                        </Typography>

                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <ul className='navigationmenu'>
                                <li>
                                    <NavLink  to={'/'}>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/menu'}>Menu</NavLink>
                                </li>
                                <li>
                                    <NavLink  to={'/about'}>About</NavLink>
                                </li>
                                <li>
                                    <NavLink  to={'/contact'}>Contact</NavLink>
                                </li>

                            </ul>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Box component={'nav'}>
                    <Drawer variant='temporary'
                        open={mobileopen}
                        onClose={handleDrawerToggle}
                        sx={{ display: { xs: 'block', sm: 'none' } }}>
                        {drawer}
                    </Drawer>
                </Box>
                <Box>
                    <Toolbar />
                </Box>
            </Box>
        </>
    )
}

export default Header
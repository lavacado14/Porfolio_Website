/*
  File: Navbar.jsx
  Student's Name: Maaz Bobat
  Student ID: 301360037
  Date: 5/31/2024

  Description:
  This file contains the Navbar component, which displays the navigation bar for the website.
*/
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import logo from './assets/logo.png';
import { Link } from 'react-router-dom';

const pages = ['Home', 'About Me', 'Projects', 'Services', 'Contact Me'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'black' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            src={logo}
            alt="Logo"
            style={{ display: { xs: 'none', md: 'flex' }, marginRight: '1rem', height: '40px' }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Maaz's portfolio
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'flex' },
              justifyContent: 'center',
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                component={Link}
                to={page === 'Home' ? '/' : `/${page.toLowerCase().replace(' ', '')}`}
                onClick={handleCloseNavMenu}
                sx={{ mx: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
            sx={{ display: { xs: 'flex', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography component={Link} to={page === 'Home' ? '/' : `/${page.toLowerCase().replace(' ', '')}`} textAlign="center">
                  {page}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;

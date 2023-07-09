import React from 'react'
import { AppBar, Box, Container, Toolbar, Typography, styled } from "@mui/material"
import { NavLink } from 'react-router-dom'

const StyledNavLink = styled(NavLink)({
    textDecoration:'none',
    color:'white',
    "&.active":{
        background:'blue',
        padding:'10px',
        borderRadius:'5px'
    }
})

const Navbar = () => {
    return (
        <>
            <AppBar position='static'>
                <Container>
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant='h5'>
                            Router
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '70px' }}>
                            <StyledNavLink to='/'>Home</StyledNavLink>
                            <StyledNavLink to='/about'>About</StyledNavLink>
                            <StyledNavLink to='contact'>Contact</StyledNavLink>
                            <StyledNavLink to='careers'>Career</StyledNavLink>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}

export default Navbar
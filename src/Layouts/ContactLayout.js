import {  Typography, Box } from '@mui/material'
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'


const ContactLayout = () => {
  return (
    <>
        <Typography variant='h4'>ContactLayout</Typography>
        <div>
        lorem ipAdipisicing ipsum id cillum exercitation esse eu deserunt do eu ex incididunt. Voluptate laborum voluptate excepteur quis exercitation qui. Qui amet dolore amet aliqua qui commodo eiusmod est non excepteur commodo veniam.
        </div>
        <Box sx={{display:'flex',gap:'50px'}}>
            <NavLink to='mail'>Mail</NavLink>
            <NavLink to='phone'>Phone</NavLink>
        </Box>
       <Outlet/>
    </>
  )
}

export default ContactLayout
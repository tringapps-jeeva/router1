import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from "react-router-dom"
import { Container } from '@mui/material'
import Appbreadcrumbs from '../Components/Appbreadcrumbs'

//Layout component passing link component and outlet
const RootLayouts = () => {
  return (
    <>          
    <Navbar/>
    <Container sx={{padding:'15px'}}>
    <Appbreadcrumbs />
        <Outlet/>
    </Container>
    </>
  )
}

export default RootLayouts
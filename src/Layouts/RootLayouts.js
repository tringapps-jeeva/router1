import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from "react-router-dom"
import { Container } from '@mui/material'

//Layout component passing link component and outlet
const RootLayouts = () => {
  return (
    <>          
    <Navbar/>
    <Container sx={{padding:'15px'}}>
        <Outlet/>
    </Container>
    </>
  )
}

export default RootLayouts
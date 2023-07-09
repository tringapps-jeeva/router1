import { Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import Career from '../pages/Career'
import { NavLink, Outlet } from 'react-router-dom'

const CareerLayout = () => {
  return (
     <>
     <div>Ea mollit aute sit duis officia consectetur sit id excepteur cupidatat est eu. Amet qui mollit consectetur adipisicing mollit aute quis cupidatat eu non dolor anim ut. Commodo aute sunt pariatur esse pariatur officia nostrud ut amet. Labore deserunt ea nulla proident. Velit fugiat ipsum consectetur occaecat nulla quis sunt minim. Adipisicing sint incididunt nulla velit fugiat anim eu laboris culpa sit quis
         magna excepteur. Ex eu nulla sunt elit amet aute culpa aliquip.</div>
        <Container sx={{margin:'50px'}}>
            <Outlet/>
         </Container>
     </>
    )
}

export default CareerLayout
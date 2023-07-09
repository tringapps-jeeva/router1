import React from 'react'
import { Link, Typography } from "@mui/material"
import { NavLink } from 'react-router-dom'
const Pagenotfound = () => {
    return (
        <>
            <Typography variant='h4'>
                Page not found
            </Typography>
            <div>
                <NavLink to='/'>Go to Home page</NavLink>
            </div>
        </>
    )
}

export default Pagenotfound
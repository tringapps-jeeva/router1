import { Breadcrumbs } from '@mui/material'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Appbreadcrumbs = () => {
    const location = useLocation()
    console.log(location)
    let crumblink =''
    const crumb = location.pathname.split('/').filter((crumbs)=>crumbs!=='')
                             .map((crumbs1)=>{
                                crumblink+=`/${crumbs1}`
                                console.log("cc",crumblink)
                                return <Link to={crumblink}>{crumbs1}</Link>
                             })

    console.log(crumb)
  return (
    <>
    <Breadcrumbs aria-label="breadcrumb">{crumb}
</Breadcrumbs>
    </>
  )
}

export default Appbreadcrumbs
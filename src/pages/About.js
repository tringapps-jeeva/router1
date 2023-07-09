import { Button } from '@mui/material'
import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

const About = () => {
  const [state,setState] = useState("Test")
  if(!state){
    return <Navigate to='/' replace={true}/>
}
  return (
    <>
    <div>About</div>
    <Button variant='contained' onClick={()=>setState(null)}>Logout</Button>
    </>
  )
}

export default About
import { Card, CardContent, Divider, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Careerdetails = () => {
    const [data, setData] = useState(null);
    const id = useParams()
    const id1 = JSON.stringify(id)
    const obj = JSON.parse(id1);
    const secondValue = obj.id;
    console.log(secondValue);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8000/careers' + `/${secondValue}`); // Replace 'your-api-url' with your actual API URL
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching data:', 'jeeva');
            }
        };

        fetchData();
    }, []);
    console.log(data)
    const careerdetails = data;
  return (
    <>
    <Typography variant='h4'>Careerdetails</Typography>
    <div>
    <Card sx={{ minWidth: '100px' }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {careerdetails?.id}
        </Typography>
        <Typography variant="h5" component="div">
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {careerdetails?.name}
        </Typography>
        <Typography variant="body2">
            {careerdetails?.role}
          <br />
          {careerdetails?.addres}
        </Typography>
      </CardContent>

    </Card>
    </div>
    </>
  )
}

export default Careerdetails
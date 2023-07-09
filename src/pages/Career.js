import { Divider, List, ListItem, ListItemText, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CareerList from './CareerList';
import { Link } from 'react-router-dom';


const Career = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8000/careers'); // Replace 'your-api-url' with your actual API URL
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching data:', 'jeeva');
            }
        };

        fetchData();
    }, []);
    console.log(data)
    const careerdata = data;
    return (
        <>
            <Typography variant='h5'>Career</Typography>
            {
                careerdata &&
                careerdata.map((career) => (
                    <Link to={career.id.toString()} key={career.id}>
                        <CareerList name={career.name} role={career.role} />
                    </Link>
                ))

            }
        </>
    )
}


export default Career
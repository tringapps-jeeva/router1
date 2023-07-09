import { Divider, List, ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'

const CareerList = ({name,role} ) => {
    return (
        <>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem alignItems="flex-start">
                    <ListItemText
                        primary={name}
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    {role}
                                </Typography>
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider />
            </List>
        </>
    )
}

export default CareerList
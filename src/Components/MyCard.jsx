import React from 'react'
import { Typography,Card, CardMedia, CardActionArea,CardContent } from '@mui/material'



const MyCard = (props) => {
    const {Heading, Text,Image} = props;
    return (
        <>
         <Card sx={{width:'90%', marginInline:'auto'}} >
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image={Image}
                alt="green iguana"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div" align='center'>
                    {Heading}
                </Typography>
                <Typography variant="body2" color="text.secondary" align='center'>
                   {Text}
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        </>
    )
}

export default MyCard

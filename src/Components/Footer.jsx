import React from 'react'
import { Box,Typography,Container,Button,Grid, Link} from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from  '@mui/icons-material/LinkedIn'




const Footer = () => {
    return (
        <>
        <Box sx={{background:'#212121', padding:'30px', display:{xs:'none', md:'flex'}}} > 
         <Container>
             <Grid container >
             <Grid item xs ={12} md={6}>
              <Typography color='white'>
                  Contact: <Link ahref='#' sx={{curson:'pointer'}}>mohit.ashliya@gmail.com</Link>
              </Typography>
             </Grid>
             <Grid item xs={12} md={6}>
              <Box>
              <Button href='https://www.instagram.com/mohit.ashliya/' target='_blank'><InstagramIcon fontSize='large' color='primary'/></Button>
              <Button href='#'><TwitterIcon fontSize='large'  color='primary'/></Button>
              <Button href='https://www.linkedin.com/in/mohit-ashliya/?originalSubdomain=in' target='_Blank'><LinkedInIcon fontSize='large'  color='primary'/></Button>
              </Box>
             </Grid>
             </Grid>
         </Container>
         </Box>
        </>
    )
}

export default Footer

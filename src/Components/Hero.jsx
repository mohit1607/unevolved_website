import React from 'react'
import { Container,Grid, Typography, Button,Box } from '@mui/material'
import Mohit from '../Assets/Mohit.png'

const Hero = () => {


    const heroText = 'A Tech noob who calls himself a web developer that even have problems in centering a div in css as well as in any other library. He is a great fool that thinks that getting a job at big tech is life-set thing, Look at his dumb face he even borrowed the tuxedo from friend for a professional photo';

    return (
       <>
       <Container sx ={{height:{ md:'100vh'},marginBottom:'120px',marginTop:'50px'}} maxWidth='lg' >
       <Grid container  spacing={2}  alignItems='center'  sx={{flexDirection:{xs:'column-reverse', md:'row'}}} >
               <Grid item xs={12} md={6} paddingBottom='50'>
                   <Typography variant='h3' comoponent='h3' align='center' sx={{fontWeight:'bold'}} >
                   Mohit Ashliya 
                   </Typography>
                   <Typography variant='h5' component='h5' align='center' marginBottom>
                       The Unevolved One
                   </Typography>
                   <Typography align='center' marginBottom>
                       {heroText}
                   </Typography>
                   <Typography align='center' variant='h6' component='h6' marginBottom>
                      Only if you want! then,
                   </Typography>
                   <Box textAlign='center'><Button variant='contained' color='primary' sx={{boxShadow:'none', textTransform:'none'}}>Learn more...</Button></Box>
               </Grid>
               <Grid item md={6} xs={12}>
                  <img src={Mohit} style={{height:'100%', width:'100%', justifyContent:'center', alignItems:'center', justifyItems:'center'}} alt='my img' />
               </Grid>
           </Grid>
       </Container>
       </>
    )
}

export default Hero;

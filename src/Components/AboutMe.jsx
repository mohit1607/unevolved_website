import React from 'react'
import {Container,Grid,Button,Box,Typography,Card, CardContent,Link, CardMedia} from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from  '@mui/icons-material/LinkedIn'
import Nodejs from '../Assets/Nodejs.png'
import bootstrap from '../Assets/bootstrap.png'
import mongodb from '../Assets/mongodb.png'
import reactimage from '../Assets/reactimage.png'
import materialui from '../Assets/materialui.png'
import express from '../Assets/express.png'

const items =[ { image:reactimage, text:'React'}, {image:mongodb, text:'MongoDB'}, {image:Nodejs, text:'Node JS'}, {image:express, text:'Express JS'}, {image:materialui, text:'Material UI v5'}, {image:bootstrap, text:'Bootstrap 5'} ];

const AboutMe = () => {


    const text = "Hello I am Mohit a MERN stack web developer and a mobile application developer both in native android and cross-platform. That's it with 1.5 year experience unofficially aspires to be a Unicorn int the tech Industry. I love freedom and learning more and more.  ! Domain Expansion !  You will never regret my work if accidently you are my client and more coincidently you have a contract with me. Don't worry I am a humble guy who only get paid for the genuinity of the work that I done. And I am further expanding learning new tech. Social links to know me as a person.";

    return (
        <>
        <Container sx={{marginBottom:'7rem',height:'80vh'}}>
         <Typography variant='h2' component='div' align='center' >
          Know About Me
         </Typography>
         <hr/>
         <br/>
         <br/>
         <Box  marginBottom>
          <Grid container spacing={3} direction='row'>
           <Grid item md={6} xs={12}>
               <Card sx={{background:'#eb4d4b'}} >
                   <CardContent>
                       <Typography variant='h5' component='div' align='center' color='white'>
                          On the path of Amateur to Legendary
                       </Typography>
                       <Typography align='center' comoponent='div' marginTop color='white'>
                       {text}
                       </Typography>
                   </CardContent>
                   <Box sx={{width:'35%', marginInline:'auto',marginBlock:'10%', display:'flex'}}>  
                   <Button href='https://www.instagram.com/mohit.ashliya/' target='_blank'><InstagramIcon fontSize='large' color='secondary'/></Button>
              <Button href='#'><TwitterIcon fontSize='large'  color='secondary'/></Button>
              <Button href='https://www.linkedin.com/in/mohit-ashliya/?originalSubdomain=in' target='_Blank'><LinkedInIcon fontSize='large'  color='secondary'/></Button>
                   </Box>
               </Card>
           </Grid>
           <Grid item md={6} xs={12}>
            <Card elevation={4}>
                <CardContent>
                    <Typography variant='h5' component='div' align='center' marginBottom>
                        Familier with
                    </Typography>
                    
                    <Box gutterBottom>
                        <Grid container spacing={2}>
                           {
                               items.map((item) => {
                                   return(
                                       <>
                                    <Grid item xs={6} md={4}>
                                      <CardMedia  component="img" height="140" image={item.image} alt="green iguana"></CardMedia>
                                      <Typography align='center' fontWeight='bold'>
                                        {item.text}
                                    </Typography>
                                    </Grid>
                                    </>
                                   )
                               })
                           }
                        </Grid>
                    </Box>
                </CardContent>
            </Card>
           </Grid>
          </Grid>
         </Box>

         {/* solution for responsive footer is given below yes */}

         <Box sx={{background:'#212121', padding:'30px', display:{xs:'flex', md:'none'}}} > 
         <Container>
             <Grid container >
             <Grid item xs ={12} md={6}>
              <Typography color='white'>
                  Contact: <Link href='#' sx={{cursor:'pointer'}}>mohit.ashliya@gmail.com</Link>
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
         
        </Container>
        </>
    )
}

export default AboutMe

import React from 'react'
import { Typography,Container,Box, Grid,} from '@mui/material'
import MyCard from './MyCard'
import svg from '../Assets/svg.svg'
import design from '../Assets/design.svg'
import phone from '../Assets/phone.svg'
import devops from '../Assets/devops.png'
import aiml from '../Assets/aiml.svg'
import quantum from '../Assets/quantum.jpg'

const MeInfo = () => {

  const content = [{heading:'Websites', text:'Want to costumize your website or create a new one, here is the way to know more and worry no! more Know how its..', image:svg}, {heading:'Web-Design or UI/UX', text:'A capable Unicron with in demand knowledge to improve and make your web or app or may be web-app more ambient Explore!...', image:design},{heading:'Mobile Application',text:'Whatever you want Cross-platform or native mobile application here is door to the artistic solution...',image:phone},{heading:'DevOps', text:'Oh yes I am well equiped with frictionless developing and operational skills that are needed to scale the Businesses. From CI/CD to kubernetes.', image:devops},{heading:'AI/ML', text:'As I know as we know as the world know Ai is gonna takeover the world. Why not am I be the part of this rush. I make sure to have enough experience.', image: aiml},{heading:'Quantum world', text:'Believe it or not I am and I am not. Same as the Schrodinger Cat in the box is Dead and alive at same time. I am exploring this field right now same as google is trying.',image: quantum}]

    return (
      <>
      <Container >
       <Box  sx={{marginBottom:'50px'}}>
       <Typography variant='h2' component='div' align='center' fontWeight='medium'  >
         Want help with ?....
       </Typography>
       </Box>
       <Box sx={{background:'#212121',borderRadius:'10px',marginBottom:'50px',paddingBottom:'30px'}} marginTop  >
       <Grid container  spacing={3}  >

        {
          content.map((ele) => {
            return(
              <Grid item xs={12} md={4}>
               <MyCard Heading={ele.heading} Text={ele.text} Image={ele.image} />
              </Grid>
            )
          })
        }

        {/* <Grid item xs={12} md={4}>
         <MyCard/>
        </Grid>
        <Grid item xs={12} md={4}>
         <MyCard/>
        </Grid> */}
        {/* <Grid item xs={12} md={4}>
         <MyCard/>
        </Grid>
        <Grid item xs={12} md={4}>
         <MyCard/>
        </Grid>
        <Grid item xs={12} md={4}>
         <MyCard/>
        </Grid> */}
        {/* here I masterd the grid in material ui*/}

       </Grid>
       
       </Box>
      </Container>
      </>
    )
}

export default MeInfo

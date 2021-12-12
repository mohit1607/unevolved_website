import React, { useState } from 'react'
import { AppBar, Container, Box, Typography, Button, Grid,Drawer} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'


const listitems = [ 'Explore', 'About Me', 'Contact Me', 'Business'];

// I should add links together with the names of the buttons

const Listing = () => {
    return(
        <div  style={{height:'30%', display:'flex', flexDirection:'column',}}>
       {
        listitems.map((ele) => {
            
                    return(
                        <Button variant='text' sx={{marginBlock:'1rem', marginInline:'auto'}} >
                            <Typography component='div' sx={{textTransform:'none'}}>
                            {ele}
                            </Typography>
                        </Button>
                    )
                })
       }
        </div>
    )
}

const Appbar = () => {

    const [drawer, setDrawer] = useState(false);

    const onClickBurger = () => {
        setDrawer(!drawer);
    }

    return (
        <>
        <Box>
        <AppBar sx={{ width:'100%',}} position='fixed'>
            <Container sx={{ paddingBlock:'20px'}} maxWidth='lg' >
                <Grid container columns ={12}>
                    <Grid item   xs={6}>
                        <Typography variant='h4' component='div' >Brand</Typography>
                    </Grid>
                    <Grid md={2}  ></Grid>
                    <Grid item md = {4} xs={12} sx = {{display:{xs:'none', md:'flex'}, mt:'5px', justifyContent:'space-between', alignItems:'baseline'}}>
                    <Button color='secondary' variant='text' sx={{textTransform:'none'}}>Explore</Button>
                    <Button color='secondary' variant='text' sx={{textTransform:'none'}}>About Myself</Button>
                    <Button color='secondary' variant='text' sx={{textTransform:'none'}}>Contact me</Button>
                    <Button variant='contained' color='secondary' sx={{textTransform:'none', borderRadius:'50px'}} >Business</Button>
                    </Grid>
                    <Grid item ml='auto'>
                      <Button sx={{display:{xs:'flex', md:'none'}}} onClick={onClickBurger} >
                        
                        <MenuIcon fontSize='large' color='secondary'></MenuIcon>
                    
                      </Button>
                    </Grid>
                </Grid>
            </Container>
        </AppBar>
        </Box>
        <div>
            <Drawer anchor='top' open={drawer} onClose={() => setDrawer(!drawer)}>
            <Listing/>
            </Drawer>
        </div>
        </>
    )
}

export default Appbar

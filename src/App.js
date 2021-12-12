import React from 'react'
import Appbar from './Components/Appbar'
import {createTheme, ThemeProvider} from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import Hero from './Components/Hero'
import './App.css'
import MeInfo from './Components/MeInfo'
import AboutMe from './Components/AboutMe'
import Footer from './Components/Footer'


const theme = createTheme({
    palette:{
        primary:{
            main: '#eb4d4b',
        },
        secondary:{
            main:'#f9ca24',
        },
    },
    typography:{
        fontFamily: 'Hind Siliguri',
        fontWeightLight:300,
        fontWeightMedium:500,
        fontWeightBold:700,
        fontWeightRegular:400
    }
})

const App = () => {
    return (
        <>
       <ThemeProvider theme={theme}>
       <CssBaseline/>
       <Appbar/>
       <Hero/>
       <MeInfo/>
       <AboutMe/>
       <Footer/>
       </ThemeProvider>
        </>
    )
}

export default App


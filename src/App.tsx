import * as React from 'react'
import './App.css'

import { Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import {Link} from '@mui/material'

import HeroImage from './Components/Home'
import Navbar from './Components/Navbar'
import { ImageListItem } from '@mui/material'
import DestinationCard from './Components/DestinationCards'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import Home from './Components/Home'
import ItemData from './Data/Destinationdata'
import DestinationList from './Components/DestinationList'
import TripTypes from './Components/TripTypes'

function App() {

  return (
    <Router>
     <Navbar />
      <Routes>
        <Route path="/" element={<HeroImage />} />
        <Route
          path="/DestinationCards"
          element={
            <DestinationList/>
          }
        />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
        <Route path="/TripTypes" element={<TripTypes />} />
      </Routes>     
     <Footer/>
    </Router>
  )
}

export default App

import React from 'react'
import { Routes , Route } from 'react-router-dom'
import All from '../pages/All'
import Breakfast from '../pages/Breakfast'
import Lunch from '../pages/Lunch'
import Shakes from '../pages/Shakes'

export default function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<All />} />
        <Route path="/breakfast" element={<Breakfast />} />
        <Route path="/lunch" element={<Lunch />} />
        <Route path='/shakes' element={<Shakes/>} />
    </Routes>
  )
}

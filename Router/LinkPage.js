import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import AboutUs from './Aboutus'

export default function LinkPage() {
  return (
    <div>
        <BrowserRouter>
           
                <Link path="/home">Home</Link>
                <Link path="/aboutus">About</Link>

        <Routes>
            <Route path="/home" element={<Home></Home>}></Route>
        </Routes>
            
        </BrowserRouter>
    </div>
  )
}

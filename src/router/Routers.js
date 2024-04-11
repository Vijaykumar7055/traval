import React from 'react'
import {Routes, Route, Navigate} from "react-router-dom"
import Home from '../Pages/Home';
import TourDetails from '../Pages/TourDetails';
import Tour from '../Pages/Tour';
import Login from "../Pages/Login.jsx"
import Register from '../Pages/Register';
import SearchResultList from '../Pages/SearchResultList';
const Routers = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Navigate to='/home' /> } />
            <Route path='/home' element={<Home />} />
            <Route path='/tour' element={<Tour/>} />
            <Route path='/tourDetails' element={<TourDetails />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/searchResultList' element={<SearchResultList />} />
        </Routes>
    </div>
  )
}

export default Routers
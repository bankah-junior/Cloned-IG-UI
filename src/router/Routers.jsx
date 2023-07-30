import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import { Create, Explore, Home, Messages, Notifications, Profile, Reel, Search } from '../container/Index';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path='/home' element={<Home />} />
      <Route path='/search' element={<Search />} />
      <Route path='/explore' element={<Explore />} />
      <Route path='/reel' element={<Reel />} />
      <Route path='/messages' element={<Messages />} />
      <Route path='/notifications' element={<Notifications />} />
      <Route path='/create' element={<Create />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
  )
}

export default Routers

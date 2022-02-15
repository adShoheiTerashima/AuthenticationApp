import { Dummy } from '@features/dummy'
import { Login } from '@features/login'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Dummy />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App

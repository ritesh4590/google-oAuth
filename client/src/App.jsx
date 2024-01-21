import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import { useEffect } from 'react'
import axios from 'axios'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashbaord" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

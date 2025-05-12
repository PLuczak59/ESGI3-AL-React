import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Hello from './Component/Hello'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Hello firstname="Mathou" />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

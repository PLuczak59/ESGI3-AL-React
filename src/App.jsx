import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Profile, UserList, Home } from './Page/pages'
import { Login } from './Component/components'

function App() {
  let user = {
    email: "pluczak@myges.fr",
    firstname: "Pierre-Henri",
    lastname: "Luczak",
    role: "admin",
  }


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/Profile" element={<Profile user={user} />} />
          <Route path="/Users" element={<UserList />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

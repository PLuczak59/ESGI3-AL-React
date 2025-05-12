import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Profile, UserList } from './Page/pages'

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
          <Route path="/Profile" element={<Profile user={user} />} />
          <Route path="/Users" element={<UserList />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

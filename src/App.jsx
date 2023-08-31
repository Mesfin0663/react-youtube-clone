import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import fetchFromApi from './config/fetchApi'
import Navbar from './componnents/navbar/Navbar'
import Videos from './componnents/videos/Videos'
import Sidebar from './componnents/sidebar/Sidebar'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
    <Navbar/>
    <Sidebar/>
     <Videos/>
    </>
  )
}

export default App

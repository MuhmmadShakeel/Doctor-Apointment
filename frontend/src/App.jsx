import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/patientcomponents/common/Navbar'
import PatientHomeHeader from './components/patientcomponents/patienthome/patienthomeheader'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <Navbar/>
       <PatientHomeHeader/>
      </div>
  
    </>
  )
}

export default App

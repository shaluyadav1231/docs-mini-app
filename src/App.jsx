import React from 'react'
import Bcakground from './components/Bcakground'
import Forground from './components/Forground'

function App() {
  return (
    <div className='relative w-full h-screen bg-zinc-800' >
      <Bcakground /> 
      <Forground />

    </div>
  )
}

export default App 
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from './components/Register'
import { Toaster } from '@/components/ui/sonner'

function App() {

  return (
    <>
      <Toaster />
      <Register />
    </>
  )
}

export default App

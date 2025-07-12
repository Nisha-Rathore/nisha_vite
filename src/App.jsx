import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header'
import Main1 from './component/Main1'
import Main2 from './component/Main2'
import Footer from './component/Footer'

function App() {
  

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Main1 />
        <Main2 />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App

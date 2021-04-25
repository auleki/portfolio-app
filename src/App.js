import React, { useState, useEffect } from 'react'
import './App.sass'
import './Sidebar.scss'
import PageRoutes from './components/PageRoutes'
import { ThemeProvider } from 'styled-components'
import { AppStyle, RoundButton } from './components/StyledComponents'
import { RiMenu2Fill, RiCloseCircleLine } from 'react-icons/ri'
import Sidebar from './components/Sidebar'

const App = () => {
  const [open, setOpen] = useState(false)

  const expandMenu = () => {
    setOpen(!open)
  }

  const closeMenu = () => {
    if (open) {
      setOpen(false)
    }
  }

  return (
    <ThemeProvider theme={{ mode: 'dark' }}>
      <div className='App' onClick={closeMenu}>
        <header>
          {open ? (
            <RiCloseCircleLine onClick={expandMenu} />
          ) : (
            <RiMenu2Fill onClick={expandMenu} />
          )}
        </header>
        <Sidebar visible={open} setOpen={setOpen} />
        <PageRoutes />
      </div>
    </ThemeProvider>
  )
}

export default App

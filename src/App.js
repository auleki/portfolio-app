import React, { useState } from 'react'
// import './App.scss'
import './Sidebar.scss'
import PageRoutes from './components/PageRoutes'
import { ThemeProvider } from 'styled-components'
import { AppStyle, RoundButton } from './components/StyledComponents'
import { RiMenu2Fill } from 'react-icons/ri'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

const ResponsiveMenu = ({ expandMenu }) => {
  return (
    <RoundButton onClick={expandMenu}>
      {/* <Title>HELLO</Title> */}
      <ion-icon name='menu-outline' />
    </RoundButton>
  )
}

const App = () => {
  const [open, setOpen] = useState(false)

  const expandMenu = () => {
    // alert('OPEN')
    setOpen(!open)
    // alert('Menu Expanded');
  }

  return (
    <ThemeProvider theme={{ mode: 'dark' }}>
      {/* <AppStyle> */}
      {/* <div> */}
      <header>
        <RiMenu2Fill onClick={expandMenu} />
      </header>
      <Sidebar visible={open} />
      {/* </div> */}
      <PageRoutes />
      {/* <ResponsiveMenu expandMenu={expandMenu} /> */}
      {/* </AppStyle> */}
    </ThemeProvider>
  )
}

export default App

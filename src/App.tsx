import NavBar from './app/NavBar'
import SideDrawer from './app/SideDrawer'
import React, { useEffect, useState } from 'react'
import { createTheme, ThemeProvider, Theme } from '@mui/material/styles'
import { ToastContainer } from 'react-toastify'
import { darkTheme, lightTheme } from './app/theme'
import 'react-toastify/dist/ReactToastify.css'
import styled from 'styled-components'
import { Container, CssBaseline, Typography } from '@mui/material'
import { StylesProvider } from '@mui/styles'
import GlobalStyle from './app/globalStyles'

const StyledToastContainer = styled(ToastContainer)`
  .Toastify__toast-theme--dark {
    background-color: #14213d;
  }

  .Toastify__progress-bar-theme--dark {
    background: #fca311;
  }
`

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 64px);
`

const App = (): JSX.Element => {
  const [mode, setMode] = useState<'dark' | 'light'>('dark')
  const [theme, setTheme] = useState<Theme>(createTheme(mode === 'dark' ? darkTheme : lightTheme))
  const [drawerIsOpen, setDrawerIsOpen] = useState<boolean>(false)

  useEffect(() => {
    const preferredMode = localStorage.getItem('preferredMode')
    if (preferredMode === 'light') {
      setMode('light')
      setTheme(createTheme(lightTheme))
    } else {
      setMode('dark')
      setTheme(createTheme(darkTheme))
    }
  }, [])

  const toggleTheme = () => {
    if (mode === 'dark') {
      setMode('light')
      setTheme(createTheme(lightTheme))
      localStorage.setItem('preferredMode', 'light')
    } else {
      setMode('dark')
      setTheme(createTheme(darkTheme))
      localStorage.setItem('preferredMode', 'dark')
    }
  }

  const toggleDrawer = (drawerIsOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return
    }

    setDrawerIsOpen(drawerIsOpen)
  }

  return (
    <StylesProvider>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <StyledToastContainer theme={mode} autoClose={12000} />
        <NavBar toggleDrawer={toggleDrawer} />
        <SideDrawer toggleDrawer={toggleDrawer} drawerIsOpen={drawerIsOpen} mode={mode} toggleTheme={toggleTheme} />

        <StyledContainer>
          <Typography align='center'>Loading...</Typography>
        </StyledContainer>
      </ThemeProvider>
    </StylesProvider>
  )
}

export default App

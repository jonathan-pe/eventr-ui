import React from 'react'
import ReactDOM from 'react-dom'
import GlobalStyle from './app/globalStyles'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { CssBaseline } from '@mui/material'
import { StylesProvider } from '@mui/styles'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <StylesProvider>
      <GlobalStyle />
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StylesProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from './styles/global.js'
import theme from './styles/theme.js'
import { SingUp } from './pages/SingUp/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={ theme }>
      <GlobalStyles />
      <SingUp />
    </ThemeProvider>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
// import reportWebVitals from './reportWebVitals'

const theme = extendTheme({
  fonts: {
    body: 'Noto Sans',
  },
  colors: {
    black: {
      '333': '#333',
    },
    gray: {
      BDBDBD: '#BDBDBD',
      828282: '#828282',
    },
    blue: {
      '2F80ED': '#2F80ED',
      '00E': '#00E',
    },
  },
})

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()

/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import * as React from 'react';
import Stack from '@mui/material/Stack';
import MainContent from './Components/MainContent';
import { Container } from '@mui/material';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div style={{display : "flex" , justifyContent : "center" , width : "100vw" }}>
      <Container maxWidth="md">
        <MainContent/>
      </Container>
      
    </div>

   </>
  )
}

export default App

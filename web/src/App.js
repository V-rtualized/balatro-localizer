import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout'
import Menu from './Components/Menu'
import Jokers from './Components/Jokers'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Menu />} />
        <Route path="jokers" element={<Jokers />} />
      </Route>
    </Routes>
  </BrowserRouter>
)

export default App

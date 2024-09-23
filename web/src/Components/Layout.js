import React from 'react'
import { Outlet } from 'react-router-dom'
import CollectionBackground from './CollectionBackground'

const Layout = () => (
  <div
    className="App"
    style={{ width: '100vw', height: '100vh', alignContent: 'center' }}
  >
    <CollectionBackground>
      <Outlet />
    </CollectionBackground>
  </div>
)

export default Layout

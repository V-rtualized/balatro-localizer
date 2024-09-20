import React from 'react'
import CollectionMenu from './Components/CollectionMenu'
import CollectionBackground from './Components/CollectionBackground'
import CollectionCarousel from './Components/CollectionCarousel'
import { Routes, Route, Outlet, BrowserRouter } from 'react-router-dom'
import JokerItem from './Components/JokerItem'
import data from './Assets/localization.json'

const JokersData = Object.keys(data.descriptions.Joker).map((j) => ({
  key: j,
  ...data.descriptions.Joker[j],
}))

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

const Menu = () => <CollectionMenu />

const Jokers = () => (
  <CollectionCarousel
    items={JokersData}
    renderItem={(item) => <JokerItem item={item} />}
  />
)

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

import React, { useEffect, useState } from 'react'
import CollectionMenu from './Components/CollectionMenu'
import CollectionBackground from './Components/CollectionBackground'
import CollectionCarousel from './Components/CollectionCarousel'
import { Routes, Route, Outlet, BrowserRouter } from 'react-router-dom'
import JokerItem from './Components/JokerItem'
import localizationData from './Assets/localization.json'

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

const setDeepValue = (obj, path, value) => {
  const keys = path.split('.')
  const newObj = structuredClone(obj)

  let current = newObj
  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i]
    if (!current[key]) {
      current[key] = {}
    }
    current = current[key]
  }
  current[keys[keys.length - 1]] = value

  return newObj
}

const Jokers = () => {
  const [localization, setLocalization] = useState(localizationData)
  const [jokerData, setJokerData] = useState([])

  const setDeepLocalization = (key, value) => {
    setLocalization((prevLocalization) =>
      setDeepValue(prevLocalization, key, value),
    )
  }

  useEffect(() => {
    if (localization.descriptions) {
      setJokerData(
        Object.keys(localization.descriptions.Joker).map((j) => ({
          key: j,
          ...localization.descriptions.Joker[j],
        })),
      )
    }
  }, [localization])

  return (
    <CollectionCarousel
      items={jokerData}
      renderItem={(item) => (
        <JokerItem item={item} setLocalization={setDeepLocalization} />
      )}
    />
  )
}

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

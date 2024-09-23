import React, { useEffect, useState } from 'react'
import CollectionCarousel from './CollectionCarousel'
import JokerItem from './JokerItem'
import localizationData from '../Assets/localization.json'
import { setDeepValue } from '../Utils/setDeepValue'

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

export default Jokers

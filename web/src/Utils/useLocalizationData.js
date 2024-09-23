import { useState, useEffect } from 'react'
import localizationData from '../Assets/localization.json'

// Helper function to set deep value in a copy of the object
const setDeepValue = (obj, path, value) => {
  const keys = path.split('.')
  const newObj = structuredClone(obj) // Deep clone the object

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

const useLocalizationData = () => {
  const [localization, setLocalization] = useState({})

  useEffect(() => {
    setLocalization(localizationData)
  }, [])

  const setTranslation = (key, value) => {
    setLocalization((prevLocalization) =>
      setDeepValue(prevLocalization, key, value),
    )
  }

  return [localization, setTranslation]
}

export default useLocalizationData

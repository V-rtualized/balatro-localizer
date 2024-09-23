export const setDeepValue = (obj, path, value) => {
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

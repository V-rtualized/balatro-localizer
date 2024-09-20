import React, { useEffect, useState } from 'react'
import JokerCard from './JokerCard'
import FormattedText from './FormattedText/FormattedText'
import EditableText from './EditableText'

const JokerItem = ({ item }) => {
  const [name, setName] = useState(item.name)

  const handleNameChange = (newName) => {
    setName(newName)
  }

  useEffect(() => {
    setName(item.name)
  }, [item])

  return (
    <>
      <JokerCard id={item.key} />
      <div
        style={{
          backgroundColor: '#424a4c',
          border: 'solid 3px #dbe2e9',
          borderRadius: 15,
          textAlign: 'center',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
          padding: '10px',
        }}
      >
        {name && (
          <EditableText header text={name} onTextChange={handleNameChange} />
        )}
        <div
          style={{
            backgroundColor: '#fffffe',
            borderRadius: 15,
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
            padding: '10px',
            marginTop: '10px',
          }}
        >
          {item.text && (
            <FormattedText
              key={`${item.key}`}
              style={{ margin: 0 }}
              lines={item.text}
            />
          )}
        </div>
      </div>
    </>
  )
}

export default JokerItem

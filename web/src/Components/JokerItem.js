import React, { useEffect, useState } from 'react'
import JokerCard from './JokerCard'
import FormattedText from './FormattedText/FormattedText'
import EditableText from './EditableText'

const JokerItem = ({ item = {}, setLocalization }) => {
  const [name, setName] = useState(item.name)
  const [text, setText] = useState(item.text)

  // Handle name change and save to localization data
  const handleNameChange = (newName) => {
    setName(newName)
    setLocalization(`descriptions.Joker.${item.key}.name`, newName)
  }

  // Handle text change and save to localization data
  const handleTextChange = (updatedText) => {
    setText(updatedText)
    setLocalization(`descriptions.Joker.${item.key}.text`, updatedText)
  }

  useEffect(() => {
    if (!item) return
    setName(item.name)
    setText(item.text)
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
          {text && (
            <FormattedText
              key={`${item.key}`}
              style={{ margin: 0 }}
              lines={text} // Pass the text to FormattedText
              onTextChange={handleTextChange} // Handle text change
            />
          )}
        </div>
      </div>
    </>
  )
}

export default JokerItem

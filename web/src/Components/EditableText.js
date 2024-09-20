import React, { useState, useEffect } from 'react'

// Credit to dork (https://stackoverflow.com/a/58705306)
const getTextWidth = (text) => {
  const canvas = document.createElement('canvas')
  const context = canvas.getContext('2d')

  context.font = getComputedStyle(document.body).font

  return context.measureText(text).width
}

// EditableText Component for always-editable text
const EditableText = ({
  text,
  onTextChange,
  style,
  onDragStart,
  segmentType,
  header = false,
}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(text)

  // Update the local editText when the parent updates the text
  useEffect(() => {
    setEditText(text)
  }, [text])

  // Handle changes while editing
  const handleEditChange = (e) => {
    setEditText(e.target.value)
  }

  // Handle submitting the edited text
  const handleBlur = () => {
    setIsEditing(false)
    if (editText !== text) {
      onTextChange(editText) // Trigger the external onTextChange callback
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleBlur()
    }
  }

  return (
    <>
      {isEditing && segmentType !== 'description-variable' ? (
        <input
          type="text"
          value={editText}
          onChange={handleEditChange}
          onBlur={handleBlur}
          onKeyDown={handleKeyPress}
          autoFocus
          style={{
            ...style,
            border: 'none',
            background: 'transparent',
            color: header ? 'white' : 'black',
            fontSize: 'inherit',
            textAlign: 'center',
            width: getTextWidth(editText) + 10,
          }}
        />
      ) : (
        <>
          {header ? (
            <h1
              style={{
                ...style,
                margin: 0,
                color: 'white',
              }}
              onClick={() => setIsEditing(true)} // Enable editing on click
            >
              {text}
            </h1>
          ) : (
            <span
              style={{ ...style, cursor: 'grab', display: 'inline-block' }}
              draggable={!!onDragStart} // Enable dragging if onDragStart is passed
              onDragStart={onDragStart} // Handle dragging
              onClick={() => setIsEditing(true)} // Enable editing on click
            >
              {text}
            </span>
          )}
        </>
      )}
    </>
  )
}

export default EditableText

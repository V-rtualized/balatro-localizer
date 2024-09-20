import React from 'react'
import Line from './Line'
import useFormattedTextState from '../../Utils/FormattedText/useFormattedTextState'

// Main FormattedText Component
const FormattedText = ({ lines, style }) => {
  const {
    linesState,
    handleDragStart,
    handleDrop,
    handleEdit,
    editableSegment,
    handleEditChange,
    handleEditSubmit,
    handleKeyPress,
  } = useFormattedTextState(lines)

  return (
    <div style={{ ...style, fontWeight: 'bold', userSelect: 'none' }}>
      {linesState.map((line, lineIndex) => (
        <Line
          key={lineIndex}
          line={line}
          lineIndex={lineIndex}
          handleDragStart={handleDragStart}
          handleDrop={handleDrop}
          handleEdit={handleEdit}
          editableSegment={editableSegment}
          handleEditChange={handleEditChange}
          handleEditSubmit={handleEditSubmit}
          handleKeyPress={handleKeyPress}
        />
      ))}
    </div>
  )
}

export default FormattedText

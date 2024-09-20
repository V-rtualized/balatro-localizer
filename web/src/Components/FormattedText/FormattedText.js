import React from 'react'
import Line from './Line'
import useFormattedTextState from '../../Utils/FormattedText/useFormattedTextState'

const FormattedText = ({ lines, style }) => {
  const { linesState, handleDragStart, handleDrop, handleEditSubmit } =
    useFormattedTextState(lines)

  return (
    <div style={{ ...style, fontWeight: 'bold', userSelect: 'none' }}>
      {linesState.map((line, lineIndex) => (
        <Line
          key={lineIndex}
          line={line}
          lineIndex={lineIndex}
          handleDragStart={handleDragStart}
          handleDrop={handleDrop}
          handleEditSubmit={handleEditSubmit} // Submit edit changes
        />
      ))}
    </div>
  )
}

export default FormattedText

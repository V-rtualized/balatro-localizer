import React from 'react'
import EditableText from '../EditableText'

// Segment Component
const Segment = ({
  segment,
  segmentIndex,
  lineIndex,
  handleDragStart,
  handleEditSubmit,
}) => {
  return (
    <EditableText
      text={segment.text}
      onTextChange={(newText) =>
        handleEditSubmit(lineIndex, segmentIndex, newText)
      } // Handle text change when editing is done
      style={{
        ...segment.style,
        display: 'inline-block',
        padding: '5px',
        border: '1px solid transparent',
        boxShadow: '1px 1px 5px rgba(0,0,0,0.2)',
      }}
      segmentType={segment.type} // Pass segment type to control editing
      onDragStart={() => handleDragStart(lineIndex, segmentIndex)} // Handle dragging
    />
  )
}

export default Segment

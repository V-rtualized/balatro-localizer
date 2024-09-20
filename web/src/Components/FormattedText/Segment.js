import React from 'react'
import DraggableText from './DraggableText'

// Credit to dork (https://stackoverflow.com/a/58705306)
const getTextWidth = (text) => {
  const canvas = document.createElement('canvas')
  const context = canvas.getContext('2d')

  context.font = getComputedStyle(document.body).font

  return context.measureText(text).width
}

// Segment Component
const Segment = ({
  segment,
  segmentIndex,
  lineIndex,
  handleDragStart,
  handleEdit,
  editableSegment,
  handleEditChange,
  handleEditSubmit,
  handleKeyPress,
}) => {
  return editableSegment &&
    editableSegment.lineIndex === lineIndex &&
    editableSegment.segmentIndex === segmentIndex ? (
    <input
      type="text"
      value={editableSegment.text}
      onChange={handleEditChange}
      onBlur={() => handleEditSubmit(lineIndex, segmentIndex)}
      onKeyDown={(e) => handleKeyPress(e, lineIndex, segmentIndex)}
      autoFocus
      style={{
        ...segment.style,
        border: 'none',
        background: 'solid 1px black',
        outline: 'none',
        padding: '5px',
        width: getTextWidth(editableSegment.text),
      }}
    />
  ) : (
    <DraggableText
      segment={segment}
      index={segmentIndex}
      onDragStart={() => handleDragStart(lineIndex, segmentIndex)}
      onClick={() =>
        segment.type !== 'description-variable' &&
        handleEdit(lineIndex, segmentIndex, segment.text)
      }
    />
  )
}

export default Segment

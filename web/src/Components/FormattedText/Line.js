import React from 'react'
import Segment from './Segment'

// Line Component
const Line = ({
  line,
  lineIndex,
  handleDragStart,
  handleDrop,
  handleEditSubmit
}) => {
  return (
    <div style={{ marginBottom: '10px' }}>
      {line.map((segment, segmentIndex) => (
        <span
          key={segmentIndex}
          onDrop={() => handleDrop(lineIndex, segmentIndex)}
          onDragOver={(e) => e.preventDefault()}
          style={{ display: 'inline-block' }}
        >
          <Segment
            segment={segment}
            segmentIndex={segmentIndex}
            lineIndex={lineIndex}
            handleDragStart={handleDragStart}
            handleEditSubmit={handleEditSubmit}
          />
        </span>
      ))}
    </div>
  )
}

export default Line

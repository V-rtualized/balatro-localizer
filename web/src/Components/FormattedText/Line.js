import React from 'react';
import Segment from './Segment';

// Line Component
const Line = ({ line, lineIndex, handleDragStart, handleDrop, handleEdit, editableSegment, handleEditChange, handleEditSubmit, handleKeyPress }) => {
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
            handleEdit={handleEdit}
            editableSegment={editableSegment}
            handleEditChange={handleEditChange}
            handleEditSubmit={handleEditSubmit}
            handleKeyPress={handleKeyPress}
          />
        </span>
      ))}
    </div>
  );
};

export default Line;

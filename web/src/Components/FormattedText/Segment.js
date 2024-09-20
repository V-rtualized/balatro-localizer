import React from 'react';
import DraggableText from './DraggableText';

// Segment Component
const Segment = ({ segment, segmentIndex, lineIndex, handleDragStart, handleEdit, editableSegment, handleEditChange, handleEditSubmit, handleKeyPress }) => {
  return editableSegment && editableSegment.lineIndex === lineIndex && editableSegment.segmentIndex === segmentIndex ? (
    <input
      type="text"
      value={editableSegment.text}
      onChange={handleEditChange}
      onBlur={() => handleEditSubmit(lineIndex, segmentIndex)}
      onKeyPress={(e) => handleKeyPress(e, lineIndex, segmentIndex)}
      autoFocus
      style={{ ...segment.style, border: 'none', background: 'transparent', outline: 'none', padding: '0', width: 'auto' }}
    />
  ) : (
    <DraggableText
      segment={segment}
      index={segmentIndex}
      onDragStart={() => handleDragStart(lineIndex, segmentIndex)}
      onClick={() => segment.type !== 'description-variable' && handleEdit(lineIndex, segmentIndex, segment.text)}
    />
  );
};

export default Segment;

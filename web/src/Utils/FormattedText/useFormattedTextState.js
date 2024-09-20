import { useState } from 'react';
import applyStyles from './applyStyles';

const descriptionVariableRegex = /#\d+#/;

// Hook for managing formatted text state, drag/drop, and edit functionality
const useFormattedTextState = (lines) => {
  const initialLines = lines.map(line =>
    line.split(/(\{[^}]*\}|#\d+#)/).reduce((acc, segment) => {
      if (segment.startsWith('{') && segment.endsWith('}')) {
        const tags = segment.slice(1, -1).split(',');
        acc.currentStyle = applyStyles(tags);
      } else if (descriptionVariableRegex.test(segment)) {
        acc.segments.push({ text: '#', style: acc.currentStyle, type: 'description-variable' });
      } else if (segment.trim() !== "") {
        acc.segments.push({ text: segment, style: acc.currentStyle, type: 'text' });
      }
      return acc;
    }, { segments: [], currentStyle: {} }).segments
  );

  const [linesState, setLinesState] = useState(initialLines);
  const [editableSegment, setEditableSegment] = useState(null);
  const [draggedSegment, setDraggedSegment] = useState(null);

  const handleDragStart = (lineIndex, segmentIndex) => {
    setDraggedSegment({ lineIndex, segmentIndex });
  };

  const handleDrop = (targetLineIndex, targetSegmentIndex) => {
    if (draggedSegment) {
      const { lineIndex, segmentIndex } = draggedSegment;
      if (lineIndex !== targetLineIndex || segmentIndex !== targetSegmentIndex) {
        const newLines = [...linesState];
        const [movedSegment] = newLines[lineIndex].splice(segmentIndex, 1);
        newLines[targetLineIndex].splice(targetSegmentIndex, 0, movedSegment);
        setLinesState(newLines);
      }
    }
    setDraggedSegment(null);
  };

  const handleEdit = (lineIndex, segmentIndex, text) => {
    setEditableSegment({ lineIndex, segmentIndex, text });
  };

  const handleEditChange = (e) => {
    setEditableSegment(prev => ({ ...prev, text: e.target.value }));
  };

  const handleEditSubmit = (lineIndex, segmentIndex) => {
    const newLines = [...linesState];
    newLines[lineIndex][segmentIndex] = { ...newLines[lineIndex][segmentIndex], text: editableSegment.text };
    setLinesState(newLines);
    setEditableSegment(null);
  };

  const handleKeyPress = (e, lineIndex, segmentIndex) => {
    if (e.key === 'Enter') {
      handleEditSubmit(lineIndex, segmentIndex);
    }
  };

  return {
    linesState,
    handleDragStart,
    handleDrop,
    handleEdit,
    editableSegment,
    handleEditChange,
    handleEditSubmit,
    handleKeyPress
  };
};

export default useFormattedTextState;

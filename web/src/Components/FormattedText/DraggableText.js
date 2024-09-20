import React from 'react';

const DraggableText = ({ segment, index, onDragStart, onClick }) => {
  const { text, style } = segment;
  return (
    <span
      style={{ 
        ...style, 
        cursor: 'grab', 
        display: 'inline-block', 
        padding: '5px', 
        border: '1px solid transparent', 
        boxShadow: '1px 1px 5px rgba(0,0,0,0.2)' 
      }}
      draggable
      onDragStart={() => onDragStart(index)}
      onClick={onClick} // Add onClick for editing
    >
      {text}
    </span>
  );
};

export default DraggableText;

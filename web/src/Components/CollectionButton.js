import React from "react";

const CollectionButton = ({ large, text, color, altColor }) => {
  return (
    <div style={{
      height: large? '65px' : '50px',
      width: '250px',
      backgroundColor: color? color : '#E65849',
      borderRadius: 15,
      color: 'white',
      fontWeight: 'bold',
      fontSize: 24,
      textAlign: 'center',
      paddingTop: large? '36px' : '16px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      cursor: 'pointer',
    }}
    onMouseOver={(e) => {
      e.target.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)';
      e.target.style.backgroundColor = altColor? altColor : '#8f352b';
    }}
    onMouseOut={(e) => {
      e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
      e.target.style.backgroundColor = color? color : '#E65849';
    }}
    >
      {text}
    </div>
  )
}

export default CollectionButton
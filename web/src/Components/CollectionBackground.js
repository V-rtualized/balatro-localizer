import React from "react";

const CollectionBackground = ({ children }) => {
  return (
    <div style={{ 
      width: '600px', 
      height: '600px', 
      backgroundColor: '#405053', 
      border: 'solid 3px #B6BECB', 
      borderRadius: 15,
      marginLeft: 'auto',
      marginRight: 'auto',
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    }}>
      {children}
    </div>
  )
}

export default CollectionBackground;
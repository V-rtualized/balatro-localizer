import React from "react";
import { Link, useLocation } from "react-router-dom";

const CollectionBackground = ({ children }) => {
  const location = useLocation()

  return (
    <>
    <div style={{ 
      width: location.pathname === "/"? '600px' : '60%', 
      height: location.pathname === "/"? '600px' : '650px', 
      backgroundColor: '#405053', 
      border: 'solid 3px #B6BECB', 
      borderRadius: 15,
      marginLeft: 'auto',
      marginRight: 'auto',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '600px'
      }}>
        {children}
      </div>
      {location.pathname !== "/" && <Link 
        style={{
          display: 'block',
          width: '95%', 
          height: '25px',
          backgroundColor: '#ec9839',
          borderRadius: 15,
          color: 'white',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
          cursor: 'pointer',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontSize: 24,
          textAlign: 'center',
          padding: '5px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
        to='/'
      >
        <p style={{ marginTop: -5 }}>{"Back"}</p>
      </Link>}
    </div>
    </>
  )
}

export default CollectionBackground;
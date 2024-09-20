import React from "react";
import JokerCard from "./JokerCard";
import FormattedText from "./FormattedText/FormattedText";

const JokerItem = ({ item }) => {
  return (<>
  <JokerCard id={item.key} />
  <div style={{ 
      backgroundColor: '#424a4c', 
      border: 'solid 3px #dbe2e9', 
      borderRadius: 15, 
      textAlign: 'center', 
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
      padding: '10px'
    }}>
    {item.name && <h1 style={{ color: 'white', margin: 0, marginBottom: '10px' }}>{item.name}</h1>}
    <div style={{ 
        backgroundColor: '#fffffe',
        borderRadius: 15, 
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
        padding: '10px'
      }}>
      {item.text && 
        <FormattedText key={`${item.key}`} style={{ margin: 0 }} lines={item.text} />
      }
    </div>
  </div>
  </>)
}

export default JokerItem
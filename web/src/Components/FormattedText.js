import React from 'react';

const getColorFromName = (color) => {
  switch (color) {
    case "mult":
      return '#eb5e4f'
    case "chips":
      return '#428ff6'
    case 'attention':
      return '#ef9438'
    case 'inactive':
      return '#b3b2b2'
    case 'money':
      return '#eab45c'
    case 'spectral':
      return '#4371EC'
    case 'tarot':
      return '#9273C2'
    case 'planet':
      return '#4AA1C2'
    case 'diamonds':
      return '#d28832'
    case 'clubs':
      return '#3d80dd'
    case 'spades':
      return '#3c23aa'
    case 'hearts':
      return '#e34230'
    case 'dark_edition':
      return '#7c7ede'
    default:
      return color
  }
}

const applyStyles = (tags) => {
  let style = {};
  
  tags.forEach(tag => {
    const [key, value] = tag.split(':');

    switch (key) {
      case 'C': // Color
        style.color = getColorFromName(value);
        break;
      case 'X': // Background color
        style.backgroundColor = getColorFromName(value);
        break;
      case 'S': // Scale (font size)
        style.fontSize = `${parseInt(value, 10)}%`;
        break;
      // E and V are ignored for now, add cases as needed.
      default:
        break;
    }
  });

  return style;
};

const FormattedText = ({ text, style }) => {
  const parsedElements = [];
  let currentStyle = {};
  
  // Split the text by the {} brackets, keeping the brackets in the split
  const segments = text.split(/(\{[^}]*\})/);

  segments.forEach(segment => {
    if (segment.startsWith('{') && segment.endsWith('}')) {
      // It's a tag block, reset the current style
      const tags = segment.slice(1, -1).split(',');
      currentStyle = applyStyles(tags);
    } else {
      // It's regular text, apply the current style
      if (currentStyle.backgroundColor !== undefined && segment.substring(segment.length-1) === " ") {
        parsedElements.push(<span style={currentStyle} key={parsedElements.length}>{segment.substring(0,segment.length-1)}</span>)
        parsedElements.push(<span style={{}} key={`${parsedElements.length}-trailingSpace`}>{" "}</span>)
      } else {
        parsedElements.push(<span style={currentStyle} key={parsedElements.length}>{segment}</span>);
      }
    }
  });

  return (
    <div style={{ ...style, fontWeight: 'bold' }}>
      {parsedElements}
    </div>
  );
};

export default FormattedText;

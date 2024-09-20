import getColorFromName from './getColorFromName';

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
      default:
        break;
    }
  });

  return style;
};

export default applyStyles;

const getColorFromName = (color) => {
  const colors = {
    mult: '#eb5e4f',
    chips: '#428ff6',
    attention: '#ef9438',
    inactive: '#b3b2b2',
    money: '#eab45c',
    spectral: '#4371EC',
    tarot: '#9273C2',
    planet: '#4AA1C2',
    diamonds: '#d28832',
    clubs: '#3d80dd',
    spades: '#3c23aa',
    hearts: '#e34230',
    dark_edition: '#7c7ede',
  };
  return colors[color] || color;
};

export default getColorFromName;

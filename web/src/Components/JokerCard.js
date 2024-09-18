import React from 'react';
import centers from '../Assets/centers.json'

const getIndexFromKey = (id, spritesPerRow) => {
  return centers[id]?.pos?.x + (centers[id]?.pos?.y * spritesPerRow)
}

const JokerCard = ({ id }) => {
  const spriteWidth = 142;
  const spriteHeight = 190;

  const index = getIndexFromKey(id, 10)

  return (
    <div
      style={{
        width: `${spriteWidth}px`,
        height: `${spriteHeight}px`,
        backgroundSize: `${spriteWidth}px auto`,
        backgroundImage: `url(/jokers/tile${("00" + index).slice(-3)}.png)`
      }}
    />
  );
};

export default JokerCard;

import React, { useState } from 'react'
import leftArrow from '../Assets/arrow.svg' // Adjust path as necessary
import rightArrow from '../Assets/arrow.svg' // Rotate it for the right arrow

const CollectionCarousel = ({ items, renderItem }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1,
    )
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1,
    )
  }

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {currentIndex !== 0 && (
        <div
          style={{
            position: 'absolute',
            left: '10px',
            cursor: 'pointer',
            transition: '0.3s',
            filter: 'drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.3))',
          }}
          onClick={handlePrevious}
        >
          <img
            src={leftArrow}
            alt="Previous"
            style={{
              transform: 'rotate(180deg)',
              width: '50px',
              height: '50px',
              filter:
                'brightness(0) saturate(100%) invert(51%) sepia(89%) saturate(2899%) hue-rotate(338deg) brightness(93%) contrast(88%)', // Default color: #E65849
              transition: 'filter 0.3s ease',
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.filter =
                'brightness(0) saturate(100%) invert(35%) sepia(92%) saturate(1758%) hue-rotate(343deg) brightness(88%) contrast(91%)')
            } // Hover color: #8f352b
            onMouseOut={(e) =>
              (e.currentTarget.style.filter =
                'brightness(0) saturate(100%) invert(51%) sepia(89%) saturate(2899%) hue-rotate(338deg) brightness(93%) contrast(88%)')
            } // Back to default
          />
        </div>
      )}

      <div
        style={{
          width: '80%',
          height: '100%',
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}
      >
        {renderItem(items[currentIndex])}
      </div>

      {currentIndex !== items.length - 1 && (
        <div
          style={{
            position: 'absolute',
            right: '10px',
            cursor: 'pointer',
            transition: '0.3s',
            filter: 'drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.3))',
          }}
          onClick={handleNext}
        >
          <img
            src={rightArrow}
            alt="Next"
            style={{
              width: '50px',
              height: '50px',
              filter:
                'brightness(0) saturate(100%) invert(51%) sepia(89%) saturate(2899%) hue-rotate(338deg) brightness(93%) contrast(88%)', // Default color: #E65849
              transition: 'filter 0.3s ease',
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.filter =
                'brightness(0) saturate(100%) invert(35%) sepia(92%) saturate(1758%) hue-rotate(343deg) brightness(88%) contrast(91%)')
            } // Hover color: #8f352b
            onMouseOut={(e) =>
              (e.currentTarget.style.filter =
                'brightness(0) saturate(100%) invert(51%) sepia(89%) saturate(2899%) hue-rotate(338deg) brightness(93%) contrast(88%)')
            } // Back to default
          />
        </div>
      )}
    </div>
  )
}

export default CollectionCarousel

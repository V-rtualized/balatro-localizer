import React, { useState, useEffect } from 'react'
import Line from './Line'
import applyStyles from '../../Utils/FormattedText/applyStyles'

const descriptionVariableRegex = /#\d+#/

const FormattedText = ({ lines, style, onTextChange }) => {
  const parseLines = (lines) => {
    return lines.map(
      (line) =>
        line.split(/(\{[^}]*\}|#\d+#)/).reduce(
          (acc, segment) => {
            if (segment.startsWith('{') && segment.endsWith('}')) {
              const tags = segment.slice(1, -1).split(',')
              acc.currentStyle = applyStyles(tags)
              acc.currentRawStyle = tags
            } else if (descriptionVariableRegex.test(segment)) {
              acc.segments.push({
                text: segment,
                style: acc.currentStyle,
                rawStyle: acc.currentRawStyle || [''],
                type: 'description-variable',
              })
            } else if (segment.trim() !== '') {
              acc.segments.push({
                text: segment,
                style: acc.currentStyle,
                rawStyle: acc.currentRawStyle || [''],
                type: 'text',
              })
            }
            return acc
          },
          { segments: [], currentStyle: {} },
        ).segments,
    )
  }

  const [linesState, setLinesState] = useState(parseLines(lines))
  const [draggedSegment, setDraggedSegment] = useState(null)

  useEffect(() => {
    setLinesState(parseLines(lines))
  }, [lines])

  const handleDragStart = (lineIndex, segmentIndex) => {
    setDraggedSegment({ lineIndex, segmentIndex })
  }

  const handleDrop = (targetLineIndex, targetSegmentIndex) => {
    if (draggedSegment) {
      const { lineIndex, segmentIndex } = draggedSegment
      if (
        lineIndex !== targetLineIndex ||
        segmentIndex !== targetSegmentIndex
      ) {
        const newLines = [...linesState]
        const [movedSegment] = newLines[lineIndex].splice(segmentIndex, 1)
        newLines[targetLineIndex].splice(targetSegmentIndex, 0, movedSegment)
        setLinesState(newLines)
      }
    }
    setDraggedSegment(null)
  }

  const reconstructLines = (newLines) => {
    let currentRawStyle = '{}'

    return newLines.map((line) => {
      currentRawStyle = '{}'

      return line
        .map((segment) => {
          const segmentStyle = `{${segment.rawStyle.join(',')}}`

          const stylePrefix =
            currentRawStyle === segmentStyle ? '' : segmentStyle
          currentRawStyle = segmentStyle

          return `${stylePrefix}${segment.text}`
        })
        .join('')
    })
  }

  const handleEditSubmit = (lineIndex, segmentIndex, newText) => {
    const newLines = [...linesState]
    newLines[lineIndex][segmentIndex].text = newText
    //setLinesState(newLines)

    onTextChange(reconstructLines(newLines))
  }

  return (
    <div style={{ ...style, fontWeight: 'bold', userSelect: 'none' }}>
      {linesState.map((line, lineIndex) => (
        <Line
          key={lineIndex}
          line={line}
          lineIndex={lineIndex}
          handleDragStart={handleDragStart}
          handleDrop={handleDrop}
          handleEditSubmit={handleEditSubmit}
        />
      ))}
    </div>
  )
}

export default FormattedText

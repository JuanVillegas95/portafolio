import './index.scss'

import React from 'react'
export const AnimatedLetters = ({ letterClass, text, idx }) => {
  return (
    <span>
      {text.map((char, i) => (
        <span
          key={char.charCodeAt('0') + i}
          className={`${letterClass} _${idx + i}`}
        >
          {char}
        </span>
      ))}
    </span>
  )
}

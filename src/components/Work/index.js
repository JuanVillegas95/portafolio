import { useEffect, useRef, useState } from 'react'

import './index.scss'
import React from 'react'
import { AnimatedLetters } from '../AnimatedLetters'

export const Work = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 5200)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          {/* <img
            onClick={handleIsMonkeAnimate}
            className={`imgs home-monke ${isMonkeAnimate ? 'animate' : ''}`}
            src={homeMonke}
            alt="monke"
          /> */}
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              text={['W', 'o', 'r', 'k']}
              idx={15}
            />
          </h1>
          <div></div>
        </div>

        <div className="stage-cube-cont"></div>
      </div>
      {/* <Loader type="pacman" /> */}
    </>
  )
}

export default Work

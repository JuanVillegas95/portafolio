import { useEffect, useRef, useState } from 'react'

// import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import React from 'react'
import { AnimatedLetters } from '../AnimatedLetters'
import banana1 from '../../assets/images/babana1.png'
import banana2 from '../../assets/images/babana2.png'
import banana3 from '../../assets/images/babana3.png'
import banana4 from '../../assets/images/babana4.png'
import banana5 from '../../assets/images/babana5.png'
import monke from '../../assets/images/monke.png'
import me from '../../assets/images/photos/me.png'
import pulga from '../../assets/images/photos/pulga.png'
import roki from '../../assets/images/photos/roki.png'
import holland from '../../assets/images/photos/holland.png'
import korea from '../../assets/images/photos/korea.png'

export const About = () => {
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
              text={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a software engineer who enjoys figuring out how to bring ideas
            to life—especially when it comes to building the full experience of
            a product.
          </p>
          <p>
            Outside of coding, I'm into learning languages, playing rhythm games
            and exploring new cultures—something I’ve kept doing since meeting
            my partner during an exchange in South Korea. I’m a curious person
            at heart. I genuinely enjoy learning and digging deep into topics
            that catch my interest, especially in areas like computational
            graphics, which I'd love to study more seriously someday.
          </p>
        </div>

        <div className="stage-cube-cont">
          <img
            src={korea}
            className="imgs card"
            loading="eager"
            style={{
              '--rotate': '-10deg',
              '--translateX': '100px',
              '--translateY': '-150px',
            }}
          />
          <img
            src={holland}
            className="imgs card"
            loading="eager"
            style={{
              '--rotate': '5deg',
              '--translateX': '380px',
              '--translateY': '-200px',
            }}
          />
          <img
            src={me}
            className="imgs contour"
            loading="eager"
            style={{
              '--rotate': '0deg',
              '--translateX': '70px',
              '--translateY': '-225px',
            }}
          />
          <img
            src={pulga}
            className="imgs contour"
            loading="eager"
            style={{
              '--translateY': '250px',
              '--translateX': '300px',
            }}
          />
          <img
            src={roki}
            className="imgs contour"
            loading="eager"
            style={{
              '--rotate': '-5deg',
              '--translateY': '150px',
              '--translateX': '100px',
            }}
          />
        </div>
      </div>
      {/* <Loader type="pacman" /> */}
    </>
  )
}

export default About

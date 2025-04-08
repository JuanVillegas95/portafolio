import { useEffect, useRef, useState } from "react"

// import Loader from 'react-loaders'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./index.scss"
import React from "react"
import { AnimatedLetters } from "../AnimatedLetters"
import me from "../../assets/images/photos/me.png"
import pulga from "../../assets/images/photos/pulga.png"
import roki from "../../assets/images/photos/roki.png"
import holland from "../../assets/images/photos/holland.png"
import korea from "../../assets/images/photos/korea.png"

export const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate")

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover")
    }, 5200)
  }, [])

  return (
    <>
      <div className="home-page">
        <div className="text-zone">
          {/* <img
            onClick={handleIsMonkeAnimate}
            className={`imgs home-monke ${isMonkeAnimate ? 'animate' : ''}`}
            src={homeMonke}
            alt="monke"
          /> */}
          <h1 style={{ marginBottom: 0 }}>
            <AnimatedLetters
              letterClass={letterClass}
              text={["A", "b", "o", "u", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <p>
            I'm a software engineer who thrives on hands-on
            problem-solving—whether I'm building circuits, writing clean code,
            or prototyping new ideas.
          </p>
          <p>
            I live for those 'aha!' moments when stubborn problems finally
            crack—where failed prototypes become stepping stones and
            coffee-fueled debugging sessions turn into elegant solutions
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
        <div className="visual-zone">
          <div className="about-cont">
            <img
              src={korea}
              className="imgs card"
              loading="eager"
              style={{
                "--rotate": "-8deg",
                "--translateX": "135px",
                "--translateY": "40px",
              }}
            />
            <img
              src={holland}
              className="imgs card"
              loading="eager"
              style={{
                "--rotate": "8deg",
                "--translateX": "65px",
                "--translateY": "180px",
              }}
            />
            <img
              src={me}
              className="imgs contour"
              loading="eager"
              style={{
                "--rotate": "8deg",
                "--translateX": "20px",
                "--translateY": "-80px",
              }}
            />
            <img
              src={pulga}
              className="imgs contour"
              loading="eager"
              style={{
                "--translateX": "200px",
                "--translateY": "400px",
              }}
            />
            <img
              src={roki}
              className="imgs contour"
              loading="eager"
              style={{
                "--rotate": "-5deg",
                "--translateX": "80px",
                "--translateY": "280px",
              }}
            />
          </div>
        </div>
      </div>
      {/* <Loader type="pacman" /> */}
    </>
  )
}

export default About

import { Link } from "react-router-dom"
import React, { useEffect, useRef, useState } from "react"
import "./index.scss"
import homeMonke from "../../assets/images/layout-monke1.png"
import bananaJ from "../../assets/images/babana5.png"
import { AnimatedLetters } from "../AnimatedLetters"
import { Logo } from "./Logo"

const hiText = ["H", "i", "!"]
const nameText = [
  "I",
  "’",
  "m",
  "\u00A0",
  "\u00A0",
  "\u00A0",
  "\u00A0",
  "u",
  "a",
  "n",
  "\u00A0",
  "V",
  "i",
  "l",
  "l",
  "e",
  "g",
  "a",
  "s",
]
const roleText = [
  "F",
  "u",
  "l",
  "l",
  "-",
  "s",
  "t",
  "a",
  "c",
  "k",
  " ",
  "D",
  "e",
  "v",
]

export const Home = () => {
  const [isMonkeAnimate, setIsMonkeAnimate] = useState(false)
  const [letterClass, setLetterClass] = useState("text-animate")
  const timeoutRef = useRef(null)

  const handleIsMonkeAnimate = () => {
    setIsMonkeAnimate(true)

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => {
      setIsMonkeAnimate(false)
    }, 4000)
  }

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover")
    }, 5200)
  }, [])

  return (
    <div className="home-page">
      <div className="text-zone">
        <div>
          <h1 style={{ position: "relative" }}>
            <AnimatedLetters text={hiText} letterClass={letterClass} idx={12} />
            <div className="monke-wrapper">
              <h2>Click Me!</h2>
              <img
                onClick={handleIsMonkeAnimate}
                className={`${isMonkeAnimate ? "animate" : ""}`}
                src={homeMonke}
                alt="monke"
              />
              <img
                onClick={handleIsMonkeAnimate}
                src={bananaJ}
                alt="monke"
                className={`${isMonkeAnimate ? "animate" : ""}`}
              />
            </div>
          </h1>
        </div>

        <h1>
          <AnimatedLetters text={nameText} letterClass={letterClass} idx={15} />
        </h1>
        <h1>
          <AnimatedLetters text={roleText} letterClass={letterClass} idx={34} />
        </h1>
      </div>
      <div className="visual-zone">
        <Logo />
      </div>
    </div>
  )
}

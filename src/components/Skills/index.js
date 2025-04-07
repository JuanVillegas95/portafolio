import { useEffect, useRef, useState } from "react"

import "./index.scss"
import React from "react"
import { AnimatedLetters } from "../AnimatedLetters"
import { categories } from "../../utils/constants.ts"

import aws from "../../assets/images/skills/aws.svg"
import bash from "../../assets/images/skills/bash.svg"
import docker from "../../assets/images/skills/docker.svg"
import firebase from "../../assets/images/skills/fire.svg"
import git from "../../assets/images/skills/git.svg"
import java from "../../assets/images/skills/java.svg"
import nginx from "../../assets/images/skills/nginx.svg"
import postgresql from "../../assets/images/skills/postgresql.svg"
import react from "../../assets/images/skills/react.svg"
import spring from "../../assets/images/skills/spring.png"
import stripe from "../../assets/images/skills/stripe.svg"
import ts from "../../assets/images/skills/typescript-icon.svg"

const skills_1 = [
  aws,
  bash,
  docker,
  firebase,
  git,
  java,
  nginx,
  postgresql,
  react,
  spring,
  stripe,
  ts,
]

export const Skills = () => {
  const [letterClass, setLetterClass] = useState("text-animate")

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover")
    }, 5200)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              text={[
                "S",
                "k",
                "i",
                "l",
                "l",
                "s",
                " ",
                "a",
                "n",
                "d",
                "",
                "t",
                "o",
                "o",
                "l",
                "s",
              ]}
              idx={15}
            />
          </h1>
          <div className="categories">
            {categories.map((category, index) => (
              <span key={index}>
                <h3> {category}</h3>
              </span>
            ))}
          </div>
        </div>
        <div className="skills-cont">
          {skills_1.map((icon, index) => (
            <span className="skill">
              <img key={index} src={icon} alt="img" />
            </span>
          ))}
        </div>
      </div>
      {/* <Loader type="pacman" /> */}
    </>
  )
}

export default Skills

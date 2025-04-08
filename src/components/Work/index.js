import { useEffect, useRef, useState } from "react"

import "./index.scss"
import React from "react"
import { AnimatedLetters } from "../AnimatedLetters"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faFolder } from "@fortawesome/free-solid-svg-icons"

export const work = [
  {
    title: "Software Developer – CLI",
    description:
      "Contributed to a CLI tool developed with Oracle to automate setup for front-end frameworks (React, Vue, Angular), including database integration and environment configuration. Gained hands-on experience in scripting, virtual machine management, and deployment automation.",
    tags: [
      "CLI",
      "Batch Scripting",
      "Virtual Machines",
      "Deployment",
      "Tooling",
    ],
  },
  {
    title: "My Little pulga",
    description:
      "Built a full-stack e-commerce platform for a family dog clothing business using Next.js 15 and Sanity CMS. Integrated Stripe for payments and Clerk for auth. Focused on custom product workflows and managing orders efficiently with a user-friendly UI.",
    tags: ["Sanity", "Clerk", "Tailwind CSS", "CMS", "Payments"],
  },
  {
    title: "My Little PSS",
    description:
      "Developed a point-of-sale desktop interface using React, powered by a Spring Boot API with PostgreSQL. Manages and displays real-time transaction data across cash and card payments, including inventory and reports through integrated tables.",
    tags: ["Spring Boot", "PostgreSQL", "React", "REST API", "Data Management"],
  },
  {
    title: "Purrfect Timing",
    description:
      "Built a collaborative calendar app with Next.js and Firebase, supporting real-time updates, recurring events, and timezone-based scheduling. Integrated drag-and-drop UI, Dockerized CI/CD with GitHub Actions, and HTTPS with Certbot.",
    tags: ["Next.js", "Firebase", "GitHub Actions", "Nginx", "Certbot"],
  },
  {
    title: "龍 (Programming language)",
    description:
      "Created a compiler for a custom programming language using Python and PLY, with syntax inspired by Japanese. Focused on parsing, tokenization, and basic language rules for educational purposes.",
    tags: ["Python", "PLY", "Compilers", "Lex/Yacc", "Parsing"],
  },
]
export const Work = () => {
  const [letterClass, setLetterClass] = useState("text-animate")
  const [selected, setSelected] = useState(-1)
  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover")
    }, 5200)
  }, [])

  return (
    <div className="home-page">
      <div className="all-zone">
        <div className="board">
          <div className="divider">
            <div className="first">
              <h1 style={{ marginBottom: 0, marginLeft: 20 }}>
                <AnimatedLetters
                  letterClass={letterClass}
                  text={["W", "o", "r", "k"]}
                  idx={15}
                />
              </h1>
              <div className="list">
                {work.map(({ title, description, tags }, index) => (
                  <div
                    key={index}
                    onMouseEnter={() => setSelected(index)}
                    onMouseLeave={() => setSelected(-1)}
                    className={`${selected === index ? "selected" : ""}`}
                  >
                    <span>
                      <img
                        src="https://img.icons8.com/?size=100&id=JHFYPQIPcXti&format=png&color=000000"
                        alt=""
                      />
                      <h3>{title}</h3>
                    </span>
                    {index === selected && (
                      <div>
                        <p>{description}</p>
                        <div className="tag-container">
                          {tags.map((tag) => (
                            <span className="tag" key={tag}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="second">hi</div>
          </div>
        </div>
      </div>
    </div>
  )
}

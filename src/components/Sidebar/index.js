import React from "react"
import "./index.scss"
import { Link, NavLink } from "react-router-dom"
import monke from "../../assets/images/monke.png"
import villegas from "../../assets/images/villegas.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCode,
  faEnvelope,
  faHome,
  faSuitcase,
  faUser,
  faWrench,
} from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import layoutMonke2 from "../../assets/images/layout-monke2.png"

export const Sidebar = () => {
  return (
    <div className="nav-bar">
      <img className="hanged-monke" src={layoutMonke2} alt="bananaOpen" />
      <Link className="logo" to="/">
        <img src={monke} className="monke" alt="Monke" />
      </Link>
      <nav>
        <NavLink
          to="./"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <FontAwesomeIcon
            icon={faUser}
            color="#4d4d4e"
            className="user-link"
          />
        </NavLink>
        <NavLink
          to="/skills"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <FontAwesomeIcon
            icon={faCode}
            color="#4d4d4e"
            className="user-link"
          />
        </NavLink>
        <NavLink
          to="/work"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <FontAwesomeIcon
            icon={faSuitcase}
            color="#4d4d4e"
            className="user-link"
          />
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            color="#4d4d4e"
            className="contact-link"
          />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/juan-villegas97/"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://github.com/JuanVillegas95"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  )
}

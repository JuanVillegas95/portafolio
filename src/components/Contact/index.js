import React, { useEffect, useRef, useState } from 'react'
import './index.scss'
import { AnimatedLetters } from '../AnimatedLetters'
import emailjs from '@emailjs/browser'
export const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef(null)
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 5200)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('gmail', 'template_YeJhZkgb', form.current, 'your-token')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload()
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }
  return (
    <div className="container contact-page">
      <div className="text-zone">
        <h1>
          {' '}
          <AnimatedLetters
            letterClass={letterClass}
            text={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e', '!']}
            idx={16}
          />
        </h1>
        <p>Have a project or just want to say hi?</p>
        <p>Fill out the form below, and I'll get back to you ASAP!</p>
        <div className="contact-form">
          <form ref={form} onSubmit={sendEmail}>
            <ul>
              <li className="half">
                <input placeholder="Name" type="text" name="name" required />
              </li>
              <li className="half">
                <input placeholder="Email" type="email" name="email" required />
              </li>
              <li>
                <input
                  placeholder="Subject"
                  type="text"
                  name="subject"
                  required
                />
              </li>
              <li>
                <textarea
                  placeholder="Message"
                  name="message"
                  required
                ></textarea>
              </li>
              <li>
                <input type="submit" className="flat-button" value="SEND" />
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  )
}

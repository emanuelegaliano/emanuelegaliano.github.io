import React from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Resume from './components/Resume'
import Work from './components/Work'
import PersonalityHobbies from './components/PersonalityHobbies'
import { socials } from './components/socials'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Resume />
        <Work />
        <PersonalityHobbies />
      </main>
      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <p className="footer-cta">Let's <em>talk</em>.</p>
            <a href="mailto:galianoo.emanuele@gmail.com" className="footer-mail">galianoo.emanuele@gmail.com</a>
          </div>
          <ul className="footer-socials">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a href={href} target={href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer" aria-label={label}>
                  <Icon size={18} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="container footer-bottom">
          <p>© {new Date().getFullYear()} Emanuele Galiano. All rights reserved.</p>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </>
  )
}

export default App

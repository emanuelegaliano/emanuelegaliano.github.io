import React from 'react'
import { ArrowUpRight } from 'lucide-react'

const traits = [
  { label: 'Extroverted', value: 71 },
  { label: 'Intuitive', value: 73 },
  { label: 'Thinking', value: 60 },
  { label: 'Judging', value: 58 },
  { label: 'Turbulent', value: 51 },
]

const hobbies = [
  { icon: '🎸', title: 'Slapping tha bass', desc: 'Grooving and keeping the rhythm' },
  { icon: '♟️', title: 'Strategy Games', desc: 'Planning and executing complex moves' },
  { icon: '🧠', title: 'Studying new things', desc: 'Always curious and learning' },
]

// Same anatomy as the project cards (meta row, title, headline, body,
// action), in the dark theme of the footer.
const PersonalityHobbies = () => {
  return (
    <section className="section section-dark" id="personality">
      <div className="container">
        <p className="section-label"><span>03</span> Beyond Code</p>
        <h2 className="sr-only">Beyond Code</h2>

        <div className="ph-grid">

          <article className="ph-card">
            <div className="project-meta">
              <span className="project-index">01</span>
              <span className="project-version">16Personalities</span>
            </div>
            <h3 className="project-title">Commander</h3>
            <p className="project-headline">ENTJ-T</p>
            <p className="project-desc">
              Commanders are bold, imaginative, and strong-willed, always finding a way – or making one. These decisive types love momentum and accomplishment, often acting on their creative visions.
            </p>

            <ul className="trait-list">
              {traits.map(trait => (
                <li key={trait.label} className="trait">
                  <span className="trait-label">{trait.label}</span>
                  <span className="trait-bar"><span style={{ width: `${trait.value}%` }}></span></span>
                  <span className="trait-pct">{trait.value}%</span>
                </li>
              ))}
            </ul>

            <div className="project-actions">
              <a href="https://www.16personalities.com/entj-personality" target="_blank" rel="noopener noreferrer" className="project-btn">
                <span>Read more on 16personalities</span>
                <ArrowUpRight size={15} />
              </a>
            </div>
          </article>

          <article className="ph-card">
            <div className="project-meta">
              <span className="project-index">02</span>
            </div>
            <h3 className="project-title">Hobbies</h3>
            <p className="project-headline">&amp; Interests</p>
            <p className="project-desc">
              When I'm not writing code or analyzing data, you can find me exploring other passions.
            </p>
            <ul className="hobby-list">
              {hobbies.map(hobby => (
                <li key={hobby.title} className="hobby">
                  <span className="hobby-icon" aria-hidden="true">{hobby.icon}</span>
                  <div>
                    <h4>{hobby.title}</h4>
                    <p>{hobby.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </article>

        </div>
      </div>
    </section>
  )
}

export default PersonalityHobbies

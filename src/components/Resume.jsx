import React from 'react'
import { GraduationCap, Briefcase, MapPin, Mail } from 'lucide-react'

const ExtLink = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="inline-link">{children}</a>
)

// Education and experience on one line, most recent first: the arrow on
// the timeline points up to the top item.
const journey = [
  {
    type: 'Education',
    years: '2027 ─ Curr.',
    title: 'Upcoming MSc in AI',
    body: 'Focusing on Causal Analysis and Advanced Machine Learning',
  },
  {
    type: 'Experience',
    years: '2026 ─ Curr.',
    title: 'Research Group Member',
    body: <><ExtLink href="https://coai-iplab.github.io/">Co-AI IPLAB</ExtLink> — Causal Object-centric AI</>,
  },
  {
    type: 'Education',
    years: '2023 ─ 2026',
    title: 'BSc in Computer Science',
    body: <>Università di Catania (UNICT) - <ExtLink href="https://web.dmi.unict.it/en">Department of Mathematics and Computer Science</ExtLink> — Grade: 110/110 Cum Laude</>,
  },
  {
    type: 'Experience',
    years: '2025 ─ 2026',
    title: 'Academic Internship',
    body: <>Reconstruction of Latent Orders. Supervised by <ExtLink href="https://antoninofurnari.github.io/">Antonino Furnari</ExtLink>.</>,
  },
  {
    type: 'Education',
    years: '2018 ─ 2022',
    title: 'High School Diploma',
    body: <><ExtLink href="https://www.majoranascordia.edu.it/">Liceo Scientifico Ettore Majorana</ExtLink> — Grade: 100/100</>,
  },
]

const focus = [
  {
    heading: 'Specializations',
    items: [
      { title: 'Data Science', desc: 'Extracting value from complex datasets' },
      { title: 'Machine Learning', desc: 'Predictive modeling & robust algorithms' },
    ],
  },
  {
    heading: 'Interests',
    items: [
      { title: 'Causal Inference', desc: 'Discovering underlying causal structures' },
      { title: 'Artificial Intelligence', desc: 'Advanced modeling and problem solving' },
    ],
  },
]

const Resume = () => {
  return (
    <section className="section section-alt" id="resume">
      <div className="container">
        <p className="section-label"><span>01</span> Resume</p>

        <div className="resume-header">
          <h2 className="section-title">Education <em>&amp;</em> Experience</h2>
          <div className="journey-legend">
            <span className="legend-item"><GraduationCap size={15} /> Education</span>
            <span className="legend-item legend-exp"><Briefcase size={15} /> Experience</span>
          </div>
        </div>

        <div className="resume-grid">
          <div className="journey">
            <div className="journey-arrow" aria-hidden="true"></div>
            <ol className="journey-list">
              {journey.map((item, index) => {
                const Icon = item.type === 'Education' ? GraduationCap : Briefcase
                return (
                  <li key={item.title} className={`journey-item ${item.type === 'Experience' ? 'is-exp' : 'is-edu'}`} style={{ '--row': index + 1 }}>
                    <article className="journey-card">
                      <div className="journey-meta">
                        <span className="journey-type"><Icon size={14} /> {item.type}</span>
                        <span className="journey-years">{item.years}</span>
                      </div>
                      <h3>{item.title}</h3>
                      <p>{item.body}</p>
                    </article>
                  </li>
                )
              })}
            </ol>
          </div>

          <aside className="resume-details">
            <div className="side-card side-card-dark" id="contact">
              <h3>Contacts</h3>
              <ul className="contact-list">
                <li><MapPin size={16} /> Catania, Italy</li>
                <li><Mail size={16} /> <a href="mailto:galianoo.emanuele@gmail.com">galianoo.emanuele@gmail.com</a></li>
                <li><GraduationCap size={16} /> <a href="mailto:emanuele.galiano@studium.unict.it">emanuele.galiano@studium.unict.it</a></li>
              </ul>
            </div>

            <div className="side-card">
              <h3>Languages</h3>
              <dl className="lang-list">
                <div><dt>🇮🇹 Italian</dt><dd>Native</dd></div>
                <div><dt>🇬🇧 English</dt><dd>Upcoming Cambridge B2</dd></div>
              </dl>
            </div>

            {focus.map(group => (
              <div key={group.heading} className="side-card">
                <h3>{group.heading}</h3>
                <ul className="focus-list">
                  {group.items.map(item => (
                    <li key={item.title}>
                      <strong>{item.title}</strong>
                      <span>{item.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </aside>
        </div>
      </div>
    </section>
  )
}

export default Resume

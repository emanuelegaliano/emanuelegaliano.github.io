import React from 'react'
import heroImg from '../assets/hero-portrait.webp'
import { socials } from './socials'

// Each PORTFOLIO line is SVG text stretched to the full viewBox width
// (textLength), so it fills the column exactly whatever serif the device
// falls back to, and can never overflow on narrow screens.
const VIEW_W = 1000
const FONT_SIZE = 182
const CAP = 128 // approx. cap height of Palatino at FONT_SIZE
const GAP = 30
const STROKE = 3
const lineY = i => STROKE + CAP + i * (CAP + GAP)
const VIEW_H = lineY(2) + STROKE

const Marquee = ({ lines, className }) => (
  <svg className={className} viewBox={`0 0 ${VIEW_W} ${VIEW_H}`} fontSize={FONT_SIZE} aria-hidden="true" focusable="false">
    {lines.map(({ index, variant }) => (
      <text
        key={index}
        x="0"
        y={lineY(index)}
        textLength={VIEW_W}
        lengthAdjust="spacingAndGlyphs"
        className={variant === 'solid' ? 'marquee-solid' : 'marquee-outline'}
      >
        PORTFOLIO
      </text>
    ))}
  </svg>
)

const Hero = () => {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">

        <div className="hero-text">
          <p className="eyebrow">Causal AI · Machine Learning · Catania</p>
          <h1 className="hero-title">
            Emanuele<br />
            <em>Galiano</em>
          </h1>
          <p className="hero-lede">
            Computer Science graduate (110/110 cum laude, UNICT) and research group member at Co-AI IPLAB.
            I explore how causal inference can move machine learning beyond correlation, toward reasoning and explainability.
          </p>

          <div className="hero-actions">
            <a href="#work" className="btn">Selected work</a>
            <a href="#resume" className="btn btn-ghost-light">Resume</a>
          </div>

          <ul className="hero-socials">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a href={href} target={href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer" aria-label={label}>
                  <Icon size={19} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* PORTFOLIO x3 behind the cut-out photo, last outline line again in front */}
        <div className="hero-stage">
          <div className="hero-stage-text">
            <Marquee
              className="marquee"
              lines={[
                { index: 0, variant: 'solid' },
                { index: 1, variant: 'outline' },
                { index: 2, variant: 'outline' },
              ]}
            />
          </div>
          <img src={heroImg} alt="Emanuele Galiano presenting a research talk" className="hero-person" width="775" height="1057" fetchPriority="high" />
          <div className="hero-stage-text hero-stage-front">
            <Marquee className="marquee" lines={[{ index: 2, variant: 'outline' }]} />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero

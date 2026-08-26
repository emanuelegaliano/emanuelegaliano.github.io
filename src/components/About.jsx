import React from 'react'
import { 
  Terminal as TerminalIcon, 
  CheckCircle2 
} from 'lucide-react'

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container about-grid">
        
        {/* Left Column: Hello & Bio */}
        <div className="about-content">
          <h2 className="about-title">
            Hello,<br/>
            I'm Emanuele !
          </h2>
          <p className="about-bio">
            I am a Computer Science graduate specializing in Data Science and Machine Learning. Driven by academic curiosity, I have a strong interest in Causal AI, exploring how Causal Inference can move machine learning beyond statistical correlation toward genuine reasoning and explainability.
          </p>
          
          <a href="https://www.linkedin.com/in/emanuele-galiano-5806083b0/" target="_blank" rel="noopener noreferrer" className="btn-pill-large">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            linkedin.com/in/emanuele-galiano
          </a>
        </div>

        {/* Right Column: macOS Terminal Widget */}
        <div className="about-widget-column">
          <div className="macos-window-card">
            
            {/* macOS Window Titlebar */}
            <div className="macos-titlebar">
              <div className="macos-traffic-lights">
                <span className="traffic-dot dot-red"></span>
                <span className="traffic-dot dot-yellow"></span>
                <span className="traffic-dot dot-green"></span>
              </div>
              <div className="macos-window-title">
                <TerminalIcon size={13} className="inline mr-1" />
                <span>emanuele@portfolio: ~</span>
              </div>
              <div className="macos-mode-badge">
                <span>zsh</span>
              </div>
            </div>

            {/* Terminal Body */}
            <div className="macos-tab-content terminal-tab-body">
              <div className="term-prompt-row">
                <span className="term-user">manu@unict</span>
                <span className="term-colon">:</span>
                <span className="term-path">~/profile</span>
                <span className="term-symbol">$</span>
                <span className="term-cmd">manu --whoami</span>
                <span className="term-cursor"></span>
              </div>

              {/* Terminal Output */}
              <div className="term-output-box">
                <div className="terminal-response">
                  <p className="term-line">
                    <span className="term-key">Name:</span>
                    <span className="term-val-highlight">Emanuele Galiano</span>
                  </p>
                  <p className="term-line">
                    <span className="term-key">Role:</span>
                    <span className="term-val">Computer Science Graduate</span>
                  </p>
                  <p className="term-line">
                    <span className="term-key">Degree:</span>
                    <span className="term-val-gold">BSc in CS — 110/110 Cum Laude (UNICT)</span>
                  </p>
                  <p className="term-line">
                    <span className="term-key">Next:</span>
                    <span className="term-val">Upcoming MSc in Artificial Intelligence</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Footer info strip */}
            <div className="macos-window-footer">
              <span className="sys-status">
                <CheckCircle2 size={13} color="#06A77D" />
                <span>Status: Active</span>
              </span>
              <span className="sys-arch">Python · PyTorch · C/C++</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default About

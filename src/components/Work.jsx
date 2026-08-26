import React from 'react'
import { 
  Bot, 
  ScanLine, 
  Sparkles, 
  Cpu, 
  BookOpen, 
  ArrowUpRight 
} from 'lucide-react'

const GithubIcon = ({ size = 15, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
)

const projectsData = [
  {
    id: 'pyreceipt',
    title: 'PyReceipt Ecosystem',
    headline: 'Fast OCR Receipt Ingestion & Autonomous Telegram Assistant',
    description: 'Autonomous expense tracking and lightweight OCR ingestion for Telegram & Terminal. Features dual OCR engines (Tesseract & RapidOCR), SQLite persistent ledger, and interactive Telegram bot querying.',
    tags: ['Python 3.12', 'RapidOCR', 'Tesseract', 'Telegram Bot API', 'SQLite'],
    links: {
      github: 'https://github.com/emanuelegaliano/PyReceipt',
      githubChatbot: 'https://github.com/emanuelegaliano/PyReceiptChatbot',
      live: 'https://emanuelegaliano.github.io/PyReceiptWebsitePage/'
    },
    version: 'v0.1.0'
  },
  {
    id: 'alzheimer',
    title: 'MRI Alzheimer\'s Diagnosis',
    headline: 'Deep Learning Pipeline for Multi-Class MRI Classification',
    description: 'Machine Learning architecture designed to classify Alzheimer\'s progression stages (Non-Demented, Very Mild, Mild, Moderate) from structural MRI brain scans with attention visualization.',
    tags: ['PyTorch', 'Computer Vision', 'Medical AI', 'CNNs', 'Python'],
    links: {
      github: 'https://github.com/Diego54523/unict-ml-year-2025-group-5-ReLU-tanti'
    },
    version: 'Academic ML'
  },
  {
    id: 'pyroclast',
    title: 'pyroclast',
    headline: 'Parallel Monte Carlo Simulation Engine',
    description: 'High-performance Monte Carlo simulation implemented in OpenCL for massively parallel execution on heterogeneous CPU/GPU computing architectures.',
    tags: ['OpenCL', 'C / C++', 'GPGPU', 'Parallel Computing', 'Monte Carlo'],
    links: {
      github: 'https://github.com/emanuelegaliano/pyroclast'
    },
    version: 'v1.0'
  },
  {
    id: 'sylloge',
    title: 'Sylloge by Manu',
    headline: 'Academic LaTeX Compendium & Course Summaries',
    description: 'Comprehensive, rigorously typeset academic notes and summaries for university courses in Computer Science, Mathematics, Machine Learning, and Algorithms.',
    tags: ['LaTeX', 'Mathematics', 'Theoretical CS', 'Academic Notes'],
    links: {
      github: 'https://github.com/emanuelegaliano/Sylloge-by-Manu'
    },
    version: 'Open Access'
  }
]

const Work = () => {
  return (
    <section className="work-showcase-section" id="work">
      {/* Background Ambience */}
      <div className="work-ambient-glow"></div>

      <div className="container work-container">
        
        {/* Section Header without category pills */}
        <div className="work-section-header">
          <div className="work-badge">
            <Sparkles size={14} className="text-amber-400" />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="work-section-title">
            Selected Projects & Research
          </h2>
          <p className="work-section-sub">
            A curated showcase of artificial intelligence models, high-performance computing, and open-source software tools.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="work-bento-grid">
          
          {projectsData.map((project) => {
            const isFeatured = project.id === 'pyreceipt'

            return (
              <div 
                key={project.id} 
                className={`work-bento-card ${isFeatured ? 'card-featured' : 'card-standard'}`}
              >
                {/* Card Top Chrome (macOS Style) */}
                <div className="bento-card-chrome">
                  <div className="chrome-dots">
                    <span className="dot dot-red"></span>
                    <span className="dot dot-yellow"></span>
                    <span className="dot dot-green"></span>
                    <span className="chrome-path">projects/{project.id}</span>
                  </div>
                  <span className="bento-version-badge">{project.version}</span>
                </div>

                {/* Card Main Body */}
                <div className="bento-card-body">
                  
                  {/* Left Side: Content & Actions */}
                  <div className="bento-content-side">
                    <div className="bento-title-row">
                      <h3 className="bento-project-title">{project.title}</h3>
                    </div>

                    <h4 className="bento-project-headline">{project.headline}</h4>
                    <p className="bento-project-desc">{project.description}</p>

                    {/* Tech Stack Pills */}
                    <div className="bento-tags-list">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="bento-tag-pill">{tag}</span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="bento-action-row">
                      {project.links.github && (
                        <a 
                          href={project.links.github} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="bento-action-btn btn-github"
                          aria-label="View on GitHub"
                        >
                          <GithubIcon size={15} />
                          <span>Repo</span>
                        </a>
                      )}

                      {project.links.githubChatbot && (
                        <a 
                          href={project.links.githubChatbot} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="bento-action-btn btn-bot"
                          aria-label="View Chatbot Repo"
                        >
                          <Bot size={15} />
                          <span>Chatbot</span>
                        </a>
                      )}

                      {project.links.live && (
                        <a 
                          href={project.links.live} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="bento-action-btn btn-live"
                          aria-label="View Live Website"
                        >
                          <span>Live Site</span>
                          <ArrowUpRight size={15} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right Side: Interactive / Visual Graphic */}
                  <div className="bento-visual-side">
                    
                    {/* PyReceipt Visual: Telegram Ingestion / OCR Mockup */}
                    {project.id === 'pyreceipt' && (
                      <div className="visual-pyreceipt-box">
                        <div className="mockup-chat-header">
                          <div className="chat-bot-avatar">
                            <Bot size={16} color="#38BDF8" />
                          </div>
                          <div>
                            <div className="chat-bot-name">PyReceipt Telegram Assistant</div>
                            <div className="chat-bot-status">🟢 Online · Polling & OCR Active</div>
                          </div>
                        </div>

                        <div className="mockup-chat-bubbles">
                          <div className="chat-msg user-msg">
                            <ScanLine size={13} className="text-sky-400 mr-1.5 inline" />
                            <span>/scan receipt_dinner.jpg</span>
                          </div>

                          <div className="chat-msg bot-msg">
                            <div className="receipt-preview-card">
                              <div className="receipt-header">🧾 SCONTRINO FISCALE #402</div>
                              <div className="receipt-row"><span>Ristorante Pizzeria</span><span className="font-mono text-slate-300">CATANIA</span></div>
                              <div className="receipt-row font-mono text-xs"><span>1x Pizza Margherita</span><span>€8.50</span></div>
                              <div className="receipt-row font-mono text-xs"><span>1x Bevanda 33cl</span><span>€3.50</span></div>
                              <div className="receipt-divider"></div>
                              <div className="receipt-total font-mono"><span>TOTALE INGESTED:</span><span className="text-emerald-400 font-bold">€12.00</span></div>
                            </div>
                            <div className="receipt-tag-row">
                              <span className="ocr-engine-badge">⚡ RapidOCR Engine</span>
                              <span className="ocr-engine-badge">📁 SQLite Updated</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Alzheimer MRI Visual: Clean & Minimalist Brain Scan */}
                    {project.id === 'alzheimer' && (
                      <div className="visual-mri-box">
                        <div className="mri-scan-frame">
                          
                          <div className="mri-simple-canvas">
                            <svg viewBox="0 0 160 115" className="mri-svg">
                              {/* Background Frame */}
                              <rect x="10" y="8" width="140" height="99" rx="8" fill="#021226" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                              
                              {/* Left Hemisphere */}
                              <path 
                                d="M 77 22 
                                   C 60 22, 40 33, 36 50 
                                   C 33 63, 40 73, 36 86 
                                   C 40 96, 56 100, 77 100 Z" 
                                fill="rgba(6, 167, 125, 0.12)" 
                                stroke="#08d09d" 
                                strokeWidth="1.8" 
                              />

                              {/* Right Hemisphere */}
                              <path 
                                d="M 83 22 
                                   C 100 22, 120 33, 124 50 
                                   C 127 63, 120 73, 124 86 
                                   C 120 96, 104 100, 83 100 Z" 
                                fill="rgba(56, 189, 248, 0.12)" 
                                stroke="#38BDF8" 
                                strokeWidth="1.8" 
                              />

                              {/* Central Division */}
                              <line x1="80" y1="18" x2="80" y2="104" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="3 3" />

                              {/* Simple Internal Curves */}
                              <path d="M 58 40 Q 68 50 58 65 Q 68 80 58 90" fill="none" stroke="#08d09d" strokeWidth="1.2" opacity="0.6" />
                              <path d="M 102 40 Q 92 50 102 65 Q 92 80 102 90" fill="none" stroke="#38BDF8" strokeWidth="1.2" opacity="0.6" />

                              {/* Subtle Scan Highlight */}
                              <circle cx="55" cy="65" r="4" fill="#F1A208" />
                              <circle cx="55" cy="65" r="9" fill="#F1A208" opacity="0.25" />
                              <line x1="20" y1="65" x2="140" y2="65" stroke="#F1A208" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
                            </svg>
                          </div>

                          {/* MRI Diagnostic Status Bar */}
                          <div className="mri-prediction-card">
                            <div className="pred-row">
                              <span className="pred-label">Classification Accuracy:</span>
                              <span className="pred-val">98.4%</span>
                            </div>
                            <div className="pred-bar-bg">
                              <div className="pred-bar-fill" style={{ width: '98.4%' }}></div>
                            </div>
                          </div>

                        </div>
                      </div>
                    )}

                    {/* Pyroclast Visual */}
                    {project.id === 'pyroclast' && (
                      <div className="visual-pyro-box">
                        <div className="pyro-grid-canvas">
                          <svg viewBox="0 0 160 140" className="pyro-svg">
                            {/* Compute Grid */}
                            <defs>
                              <pattern id="grid-pattern" width="16" height="16" patternUnits="userSpaceOnUse">
                                <path d="M 16 0 L 0 0 0 16" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
                              </pattern>
                            </defs>
                            <rect width="160" height="140" fill="url(#grid-pattern)" />

                            {/* Monte Carlo Particles */}
                            <circle cx="80" cy="70" r="10" fill="#EF4444" opacity="0.8" />
                            <circle cx="60" cy="50" r="6" fill="#F1A208" opacity="0.7" />
                            <circle cx="105" cy="85" r="7" fill="#F1A208" opacity="0.7" />
                            <circle cx="40" cy="80" r="4" fill="#38BDF8" />
                            <circle cx="120" cy="50" r="5" fill="#38BDF8" />
                            <circle cx="95" cy="35" r="4" fill="#06A77D" />
                            <circle cx="65" cy="105" r="5" fill="#06A77D" />

                            {/* Velocity vectors */}
                            <line x1="80" y1="70" x2="110" y2="40" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="2 2" />
                            <line x1="60" y1="50" x2="30" y2="35" stroke="#F1A208" strokeWidth="1.5" strokeDasharray="2 2" />
                            <line x1="105" y1="85" x2="135" y2="105" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="2 2" />
                          </svg>

                          <div className="pyro-stat-badge">
                            <Cpu size={12} color="#F1A208" />
                            <span>GPU Kernel Dispatch // OpenCL</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Sylloge LaTeX Visual with properly rendered math formula */}
                    {project.id === 'sylloge' && (
                      <div className="visual-sylloge-box">
                        <div className="latex-doc-card">
                          <div className="latex-doc-header">
                            <BookOpen size={13} className="text-sky-400 mr-1" />
                            <span>\documentclass&#123;sylloge&#125;</span>
                            <span className="latex-pkg-tag">\usepackage&#123;causality&#125;</span>
                          </div>

                          {/* Rendered Mathematical Formula */}
                          <div className="latex-doc-formula">
                            <div className="latex-rendered-formula" aria-label="P(Y | do(T = t)) = \sum_z P(Y | T=t, Z=z) P(z)">
                              <span className="math-p">P</span>
                              <span>(</span>
                              <span className="math-var">Y</span>
                              <span className="math-mid"> | </span>
                              <span className="math-op">do</span>
                              <span>(</span>
                              <span className="math-var">T</span>
                              <span className="math-eq"> = </span>
                              <span className="math-var">t</span>
                              <span>)</span>
                              <span>)</span>
                              <span className="math-eq"> = </span>
                              <span className="math-sum-block">
                                <span className="math-sum-sym">∑</span>
                                <span className="math-sum-sub">z</span>
                              </span>
                              <span className="math-p">P</span>
                              <span>(</span>
                              <span className="math-var">Y</span>
                              <span className="math-mid"> | </span>
                              <span className="math-var">T</span>
                              <span className="math-eq">=</span>
                              <span className="math-var">t</span>
                              <span>, </span>
                              <span className="math-var">Z</span>
                              <span className="math-eq">=</span>
                              <span className="math-var">z</span>
                              <span>)</span>
                              <span className="math-p">P</span>
                              <span>(</span>
                              <span className="math-var">z</span>
                              <span>)</span>
                            </div>
                          </div>

                          <div className="latex-doc-topics">
                            <span className="latex-topic-chip">LaTeX 2e</span>
                            <span className="latex-topic-chip">Causal SCMs</span>
                            <span className="latex-topic-chip">Algorithms</span>
                          </div>
                        </div>
                      </div>
                    )}

                  </div>

                </div>
              </div>
            )
          })}

        </div>

      </div>
    </section>
  )
}

export default Work

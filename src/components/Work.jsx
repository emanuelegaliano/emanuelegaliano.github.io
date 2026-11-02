import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import { GithubIcon } from './icons'
import receiptIcon from '../assets/projects/receipt-icon.webp'
import receiptDashboard from '../assets/projects/receipt-dashboard.webp'
import receiptScan from '../assets/projects/receipt-scan.webp'
import mriImg from '../assets/projects/alzheimer-mri.webp'
import etnaImg from '../assets/projects/pyroclast-etna.webp'

// Covers. Receipt borrows the look of its own website (forest green, gold,
// Inter); the others use the portfolio palette.
const ReceiptCover = () => (
  <div className="cover cover-receipt">
    <div className="receipt-brand">
      <img src={receiptIcon} alt="" width="36" height="36" />
      <span>Receipt</span>
    </div>
    <div className="receipt-phones">
      <img src={receiptScan} alt="Receipt app: scanning a receipt" className="phone phone-back" loading="lazy" />
      <img src={receiptDashboard} alt="Receipt app: monthly summary" className="phone phone-front" loading="lazy" />
    </div>
  </div>
)

const ImageCover = ({ src, alt, className }) => (
  <div className={`cover ${className}`}>
    <img src={src} alt={alt} loading="lazy" />
  </div>
)

const SyllogeCover = () => (
  <div className="cover cover-sylloge">
    <div className="tex-page">
      <p className="tex-kicker">Course notes</p>
      <p className="tex-title">Sylloge</p>
      <p className="tex-author">by Manu</p>
      <hr />
      <div className="tex-formula" aria-label="P(Y | do(T = t)) = sum over z of P(Y | T = t, Z = z) P(z)">
        <i>P</i>(<i>Y</i> | do(<i>T</i> = <i>t</i>)) = <span className="tex-sum">∑<sub><i>z</i></sub></span> <i>P</i>(<i>Y</i> | <i>T</i> = <i>t</i>, <i>Z</i> = <i>z</i>) <i>P</i>(<i>z</i>)
      </div>
      <span className="tex-line" />
      <span className="tex-line" />
      <span className="tex-line short" />
    </div>
  </div>
)

const projectsData = [
  {
    id: 'receipt',
    theme: 'theme-receipt',
    title: 'Receipt',
    headline: 'On-Device Receipt Scanner & Expense Tracker for Android',
    description: 'Reads totals, dates and shops with RapidOCR running entirely on the phone, sorts every expense into categories and tracks card and cash spending month by month. No account, no cloud, no internet. It grew out of PyReceipt, ported to Flutter.',
    tags: ['Flutter', 'Dart', 'RapidOCR', 'ONNX Runtime', 'SQLite'],
    links: [
      { label: 'Website', href: 'https://emanuelegaliano.github.io/Receipt/', primary: true },
      { label: 'Repo', href: 'https://github.com/emanuelegaliano/Receipt', github: true },
    ],
    origin: { label: 'From the original PyReceipt', href: 'https://emanuelegaliano.github.io/PyReceiptWebsitePage/' },
    version: 'v0.1.0',
    cover: <ReceiptCover />,
  },
  {
    id: 'alzheimer',
    title: 'MRI Alzheimer\'s Diagnosis',
    headline: 'Deep Learning Pipeline for Multi-Class MRI Classification',
    description: 'Machine Learning architecture designed to classify Alzheimer\'s progression stages (Non-Demented, Very Mild, Mild, Moderate) from structural MRI brain scans with attention visualization.',
    tags: ['PyTorch', 'Computer Vision', 'Medical AI', 'CNNs', 'Python'],
    links: [
      { label: 'Repo', href: 'https://github.com/Diego54523/unict-ml-year-2025-group-5-ReLU-tanti', github: true },
    ],
    version: 'Academic ML',
    cover: <ImageCover src={mriImg} alt="Axial 7 Tesla MRI slice of a human brain" className="cover-mri" />,
    credit: {
      title: '7 Tesla MRI of the ex vivo human brain at 100 micron resolution',
      author: 'B. L. Edlow et al., Massachusetts General Hospital · CC0',
      href: 'https://commons.wikimedia.org/wiki/File:7_Tesla_MRI_of_the_ex_vivo_human_brain_at_100_micron_resolution_(100_micron_MRI_acquired_FA25_axial).webm',
    },
  },
  {
    id: 'pyroclast',
    title: 'pyroclast',
    headline: 'Parallel Monte Carlo Simulation Engine',
    description: 'High-performance Monte Carlo simulation implemented in OpenCL for massively parallel execution on heterogeneous CPU/GPU computing architectures.',
    tags: ['OpenCL', 'C / C++', 'GPGPU', 'Parallel Computing', 'Monte Carlo'],
    links: [
      { label: 'Repo', href: 'https://github.com/emanuelegaliano/pyroclast', github: true },
    ],
    version: 'v1.0',
    cover: <ImageCover src={etnaImg} alt="Etna erupting at night, colour lithograph" className="cover-etna" />,
    credit: {
      title: 'Gezicht op de Etna tijdens een uitbarsting (Souvenirs de Sicile)',
      author: 'Victor J. B. Petit, c. 1828–1863 · Rijksmuseum, CC0',
      href: 'https://commons.wikimedia.org/wiki/File:Gezicht_op_de_Etna_tijdens_een_uitbarsting,_RP-P-2018-3414.jpg',
    },
  },
  {
    id: 'sylloge',
    title: 'Sylloge by Manu',
    headline: 'Academic LaTeX Compendium & Course Summaries',
    description: 'Comprehensive, rigorously typeset academic notes and summaries for university courses in Computer Science, Mathematics, Machine Learning, and Algorithms.',
    tags: ['LaTeX', 'Mathematics', 'Theoretical CS', 'Academic Notes'],
    links: [
      { label: 'Repo', href: 'https://github.com/emanuelegaliano/Sylloge-by-Manu', github: true },
    ],
    version: 'Open Access',
    cover: <SyllogeCover />,
  },
]

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container">
        <p className="section-label"><span>02</span> Work</p>

        <div className="work-header">
          <h2 className="section-title">
            Selected Projects <em>&amp;</em> Research
          </h2>
          <p className="work-sub">
            A curated showcase of artificial intelligence models, high-performance computing, and open-source software tools.
          </p>
        </div>

        <div className="project-list">
          {projectsData.map((project, index) => (
            <article key={project.id} className={`project-card ${project.theme ?? ''}`}>

              <figure className="project-cover">
                {project.cover}
                {project.credit && (
                  <figcaption>
                    Image from: <a href={project.credit.href} target="_blank" rel="noopener noreferrer"><cite>{project.credit.title}</cite></a>
                    <span className="credit-author"> — {project.credit.author}</span>
                  </figcaption>
                )}
              </figure>

              <div className="project-content">
                <div className="project-meta">
                  <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
                  <span className="project-version">{project.version}</span>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-headline">{project.headline}</p>
                <p className="project-desc">{project.description}</p>

                <ul className="tag-list">
                  {project.tags.map(tag => (
                    <li key={tag} className="tag">{tag}</li>
                  ))}
                </ul>

                <div className="project-actions">
                  {project.links.map(link => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`project-btn ${link.primary ? 'project-btn-primary' : ''}`}
                    >
                      {link.github && <GithubIcon size={15} />}
                      <span>{link.label}</span>
                      {link.primary && <ArrowUpRight size={15} />}
                    </a>
                  ))}
                </div>

                {project.origin && (
                  <a href={project.origin.href} target="_blank" rel="noopener noreferrer" className="project-origin">
                    {project.origin.label} <ArrowUpRight size={13} />
                  </a>
                )}
              </div>

            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work

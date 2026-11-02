import React, { useState, useEffect } from 'react'

const links = [
  { href: '#resume', label: 'Resume' },
  { href: '#work', label: 'Work' },
  { href: '#personality', label: 'Beyond Code' },
]

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Close the mobile menu with Escape, or when the viewport grows past the breakpoint
  useEffect(() => {
    if (!isMenuOpen) return
    const close = () => {
      setIsMenuOpen(false)
      document.body.style.overflow = ''
    }
    const onKey = e => { if (e.key === 'Escape') close() }
    const wide = window.matchMedia('(min-width: 821px)')
    const onWide = e => { if (e.matches) close() }
    window.addEventListener('keydown', onKey)
    wide.addEventListener('change', onWide)
    return () => {
      window.removeEventListener('keydown', onKey)
      wide.removeEventListener('change', onWide)
    }
  }, [isMenuOpen])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(prev => {
      document.body.style.overflow = !prev ? 'hidden' : ''
      return !prev
    })
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    document.body.style.overflow = ''
  }

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="container header-inner">
        <a href="#top" className="logo" onClick={closeMenu}>
          <span className="logo-mark">EG</span>
          <span className="logo-name">Emanuele Galiano</span>
        </a>

        <button
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          {links.map((link, i) => (
            <a key={link.href} href={link.href} className="nav-link" onClick={closeMenu}>
              <span className="nav-index">0{i + 1}</span>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-small" onClick={closeMenu}>Get in touch</a>
        </nav>
      </div>
    </header>
  )
}

export default Header

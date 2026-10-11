import { useEffect, useState } from 'react'
import { Menu, X, Download } from 'lucide-react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Teaching', href: '#teaching' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Community', href: '#community' },
  { label: 'Football', href: '#football' },
  { label: 'Learning', href: '#learning' },
  { label: 'Fellowships', href: '#fellowships' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState(
    window.location.hash || '#home'
  )

  useEffect(() => {
    const updateActiveLink = () => {
      if (window.scrollY < 100) {
        setActiveLink('#home')
        return
      }

      let current = '#home'

      links.forEach((link) => {
        const section = document.getElementById(
          link.href.substring(1)
        )

        if (
          section &&
          section.getBoundingClientRect().top <= 160
        ) {
          current = link.href
        }
      })

      setActiveLink(current)
    }

    window.addEventListener('scroll', updateActiveLink, {
      passive: true,
    })

    window.addEventListener('hashchange', updateActiveLink)
    updateActiveLink()

    return () => {
      window.removeEventListener('scroll', updateActiveLink)
      window.removeEventListener('hashchange', updateActiveLink)
    }
  }, [])

  const handleLinkClick = (href) => {
    setActiveLink(href)
    setMenuOpen(false)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#062337]/95 text-white backdrop-blur-md">
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between gap-5 px-5 py-3 lg:px-10">
        {/* Brand */}
        <a
          href="#home"
          onClick={() => handleLinkClick('#home')}
          className="shrink-0 font-serif text-2xl text-[#C9A227]"
          aria-label="Home"
        >
          MAN
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-4 xl:flex">
          {links.map((link) => {
            const active = activeLink === link.href

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                aria-current={active ? 'location' : undefined}
                className={`whitespace-nowrap border-b-2 pb-2 pt-1 text-[12px] transition-colors duration-200 ${
                  active
                    ? 'border-[#C9A227] font-semibold text-white'
                    : 'border-transparent text-white/75 hover:text-[#D9AE43]'
                }`}
              >
                {link.label}
              </a>
            )
          })}
        </div>

        {/* Desktop CV download */}
        <a
          href="/resume.pdf"
          download="Resume.pdf"
          className="hidden shrink-0 items-center gap-2 rounded-full bg-[#D9AE43] px-4 py-2.5 text-xs font-semibold text-[#082337] transition-colors hover:bg-white xl:flex"
        >
          Download Resume
          <Download size={15} />
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          className="cursor-pointer rounded-md p-2 hover:bg-white/10 xl:hidden"
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </nav>

      {/* Mobile navigation */}
      {menuOpen && (
        <div className="max-h-[75vh] overflow-y-auto border-t border-white/10 bg-[#062337] px-6 py-4 xl:hidden">
          {links.map((link) => {
            const active = activeLink === link.href

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                aria-current={active ? 'location' : undefined}
                className={`block border-b py-3 text-sm transition-colors ${
                  active
                    ? 'border-[#C9A227] font-semibold text-[#D9AE43]'
                    : 'border-white/10 text-white/80 hover:text-[#D9AE43]'
                }`}
              >
                {link.label}
              </a>
            )
          })}

          {/* Mobile CV download */}
          <a
            href="/resume.pdf"
            download="Resume.pdf"
            onClick={() => setMenuOpen(false)}
            className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#D9AE43] px-5 py-3 text-sm font-semibold text-[#082337] hover:bg-white"
          >
            Download Resume
            <Download size={16} />
          </a>
        </div>
      )}
    </header>
  )
}

import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const LOGO = 'https://rushcafebd.com/wp-content/uploads/2020/12/Rush-Cafe-Logo-header.png'
const LOGO_W = 'https://rushcafebd.com/wp-content/uploads/2020/12/Rush-Cafe-Logo-header-w.png'

const links = [
  { to: '/', label: 'Home' },
  { to: '/menus', label: 'Menus' },
  { to: '/about', label: 'About Us' },
  { to: '/find-us', label: 'Find Us' },
  { to: '/blog', label: 'Blog' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const loc = useLocation()
  const darkHero = ['/', '/menus', '/about', '/find-us', '/blog', '/reservation'].includes(loc.pathname)

  useEffect(() => { setOpen(false) }, [loc.pathname])
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const solid = scrolled || open
  const lightText = darkHero && !solid

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${solid ? 'bg-white/95 shadow-soft' : 'bg-transparent'}`}>
      <div className="max-w-content mx-auto px-4 md:px-6 h-[80px] flex items-center justify-between">
        <Link to="/">
          <img src={lightText ? LOGO_W : LOGO} alt="Rush Cafe" className="h-12 md:h-14 w-auto object-contain" />
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `font-lato text-[12px] font-bold uppercase tracking-[2px] transition-colors duration-200 ${
                  isActive
                    ? lightText ? 'text-gold' : 'text-teal'
                    : lightText ? 'text-white/80 hover:text-white' : 'text-ink hover:text-teal'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/reservation"
            className={lightText ? 'btn-outline-light text-[12px] py-2.5 px-5' : 'btn-outline-dark text-[12px] py-2.5 px-5'}
          >
            Reservation
          </Link>
        </nav>
        <button className={`lg:hidden p-2 ${lightText ? 'text-white' : 'text-ink'}`} onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-white border-t border-black/5 px-4 py-5 space-y-1">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} className="block py-3 font-lato text-[13px] font-bold uppercase tracking-wider text-ink">
              {l.label}
            </NavLink>
          ))}
          <Link to="/reservation" className="btn-outline-dark w-full text-center mt-2">Reservation</Link>
        </div>
      )}
    </header>
  )
}

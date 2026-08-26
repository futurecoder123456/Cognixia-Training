import { NavLink } from 'react-router-dom'

const navigation = [
  { label: 'Overview', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
]

export function Header() {
  return (
    <header className="site-header">
      <NavLink className="brand" to="/" aria-label="Cognixia Bank home">
        <span className="brand-mark" aria-hidden="true">C</span>
        <span>Cognixia Bank</span>
      </NavLink>
      <nav aria-label="Main navigation">
        {navigation.map(({ label, to }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            {label}
          </NavLink>
        ))}
      </nav>
      <button className="profile-button" type="button" aria-label="Open profile menu">
        <span aria-hidden="true">AL</span>
      </button>
    </header>
  )
}
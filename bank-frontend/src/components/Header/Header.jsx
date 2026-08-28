import { Link, NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('jwt_token');
  const username = localStorage.getItem('username');

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  const navLinkClassName = ({ isActive }) => (isActive ? 'active' : undefined);

  return (
    <header className="app-header">
      <Link to="/" className="app-header-brand">
        Bank
      </Link>

      <nav className="app-header-nav">
        <NavLink to="/" end className={navLinkClassName}>
          Home
        </NavLink>
        <NavLink to="/about" className={navLinkClassName}>
          About
        </NavLink>
        <NavLink to="/services" className={navLinkClassName}>
          Services
        </NavLink>
        <NavLink to="/contact" className={navLinkClassName}>
          Contact
        </NavLink>

        {token ? (
          <>
            <NavLink to="/dashboard" className={navLinkClassName}>
              Dashboard
            </NavLink>
            <span>{username}</span>
            <button type="button" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink to="/login" className={navLinkClassName}>
              Login
            </NavLink>
            <NavLink to="/register" className={navLinkClassName}>
              Register
            </NavLink>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;

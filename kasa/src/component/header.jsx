import { NavLink } from 'react-router-dom';
import logo from "../assets/LOGO.svg";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="logo KASA" className="header_logo" />
      <nav className="header_nav">
        <p>
        <NavLink className="header_nav_link" to={`/`}>Accueil</NavLink>
        </p>
        <p>
        <NavLink className="header_nav_link" to={`/apropos`}>A propos </NavLink></p>
      </nav>
    </div>
  );
}

export default Header;

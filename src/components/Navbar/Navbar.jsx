import "./Navbar.scss";
import NavbarLogo from "../../assets/NavbarLogo.png";

export default function Navbar(props) {
  return (
    <nav className={props.darkMode ? "dark" : ""}>
      <img className="nav__logo_icon" src={NavbarLogo} />
      <h3 className="nav__logo_text">ReactFacts</h3>
    </nav>
  );
}

import Strawberry from "../icons/strawberry";
import AuthButton from "../../../pages/auth/auth-button.tsx";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <div className="header-logo">
          <Strawberry />
        </div>
      </Link>
      <nav className="header-nav">
        <Link to="/adverts/new">New Advert</Link>
        <AuthButton />
      </nav>
    </header>
  );
}

export default Header;

import Strawberry from "../icons/strawberry";
import AuthButton from "../../../pages/auth/auth-button.tsx";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <Strawberry />
      </div>
      <nav className="header-nav">
        <AuthButton />
      </nav>
    </header>
  );
}

export default Header;

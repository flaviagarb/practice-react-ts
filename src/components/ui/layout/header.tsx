import { useAuth } from "../../../pages/auth/context";
import { logout } from "../../../pages/auth/service";
import Button from "../button";
import Strawberry from "../icons/strawberry";

function Header() {
  const { isLogged, onLogout } = useAuth();

  const handleLogoutClick = async () => {
    await logout();
    onLogout();
  };

  return (
    <header>
      <Strawberry />
      <nav>
        {isLogged ? (
          <Button variant="secondary" onClick={handleLogoutClick}>
            Logout
          </Button>
        ) : (
          <Button variant="primary">Login</Button>
        )}
      </nav>
    </header>
  );
}

export default Header;

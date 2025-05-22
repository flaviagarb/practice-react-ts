import { useAuth } from "../../../pages/auth/context";
import { logout } from "../../../pages/auth/service";
import Button from "../button";

function Header() {
  const { isLogged, onLogout } = useAuth();

  const handleLogoutClick = async () => {
    await logout();
    onLogout();
  };

  return (
    <header>
      <div></div>
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

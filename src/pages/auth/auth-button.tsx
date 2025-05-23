import { Link } from "react-router-dom";
import Button from "../../components/ui/button";
import { useAuth } from "../../pages/auth/context";
import { logout } from "../../pages/auth/service";

export default function AuthButton() {
  const { isLogged, onLogout } = useAuth();

  const handleLogoutClick = async () => {
    await logout();
    onLogout();
  };

  return isLogged ? (
    <Button variant="secondary" onClick={handleLogoutClick}>
      Logout
    </Button>
  ) : (
    <Link to="/login">
      <Button variant="primary">Login</Button>
    </Link>
  );
}

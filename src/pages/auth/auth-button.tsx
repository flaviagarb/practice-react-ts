import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "../../components/ui/button";
import { useAuth } from "../../pages/auth/context";
import { logout } from "../../pages/auth/service";
import ConfirmDialog from "../../components/confirm-dialog";

export default function AuthButton() {
  const { isLogged, onLogout } = useAuth();
  const [showConfirm, setShowConfirm] = useState(false);
  return isLogged ? (
    <>
      <Button variant="secondary" onClick={() => setShowConfirm(true)}>
        Logout
      </Button>

      {showConfirm && (
        <ConfirmDialog
          message="Are you sure you want to log out?"
          onConfirm={async () => {
            await logout();
            onLogout();
            setShowConfirm(false);
          }}
          onCancel={() => setShowConfirm(false)}
        />
      )}
    </>
  ) : (
    <Link to="/login">
      <Button variant="primary">Login</Button>
    </Link>
  );
}

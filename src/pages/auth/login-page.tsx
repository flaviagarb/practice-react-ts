import { useState, type ChangeEvent, type FormEvent } from "react";
import { login } from "./service";
import Button from "../../components/ui/button";
import { useAuth } from "./context";
import FormField from "../../components/ui/form-field";
import Page from "../../components/ui/layout/page";
import "./login-page.css";
import { useLocation, useNavigate } from "react-router";
import { AxiosError } from "axios";

function LoginPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { onLogin } = useAuth();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState<{ message: string } | null>(null);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const { email, password } = credentials;
  const disabled = !email || !password || isFetching;

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [event.target.name]: event.target.value,
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      setIsFetching(true);
      await login(credentials);
      onLogin();

      // Navigate to the page in state.from
      const to = location.state?.from ?? "/";
      navigate(to, { replace: true });
    } catch (error) {
      if (error instanceof AxiosError) {
        setError({
          message: error.response?.data?.message ?? error.message ?? "",
        });
      }
    } finally {
      setIsFetching(false);
    }
  }

  return (
    <Page title="Log in to NodePop">
      <div className="login-page-wrapper">
        <div className="login-page-box">
          <form onSubmit={handleSubmit}>
            <FormField
              type="text"
              name="email"
              label="email"
              value={email}
              onChange={handleChange}
            />

            <FormField
              type="password"
              name="password"
              label="password"
              value={password}
              onChange={handleChange}
            />
            <Button type="submit" variant="primary" disabled={disabled}>
              Log in
            </Button>
          </form>
          {error && (
            <div
              className="login-page-error"
              role="alert"
              onClick={() => {
                setError(null);
              }}
            >
              {error.message}
            </div>
          )}
        </div>
      </div>
    </Page>
  );
}

export default LoginPage;

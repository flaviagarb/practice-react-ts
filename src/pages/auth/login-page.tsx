import { useState, type ChangeEvent, type FormEvent } from "react";
import { login } from "./service";
import Button from "../../components/ui/button";
import { useAuth } from "./context";
import FormField from "../../components/ui/form-field";
import "./login-page.css";

function LoginPage() {
  const { onLogin } = useAuth();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const { email, password } = credentials;
  const disabled = !email || !password;

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [event.target.name]: event.target.value,
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      await login(credentials);
      onLogin();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h1> Log in to Nodepop 2.0 </h1>
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
    </div>
  );
}

export default LoginPage;

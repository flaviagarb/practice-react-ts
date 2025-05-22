import { useState, type ChangeEvent, type FormEvent } from "react";
import { login } from "./service";
import Button from "../../components/ui/button";
import { useAuth } from "./context";

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
        <label>Email</label>
        <input type="text" name="email" value={email} onChange={handleChange} />
        <label>Password</label>
        <input
          type="password"
          name="password"
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

import type { FormEvent } from "react";
import { login } from "./service";
import Button from "../../components/ui/button";

function LoginPage() {
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      await login({
        email: event.target.email.value,
        password: event.target.password.value,
      });
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      <h1> Log in to Nodepop 2.0 </h1>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="text" name="email" />
        <label>Password</label>
        <input type="password" name="password" />
        <Button type="submit" variant="primary">
          Login
        </Button>
      </form>
    </div>
  );
}

export default LoginPage;

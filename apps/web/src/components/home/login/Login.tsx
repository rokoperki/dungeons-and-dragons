import login from "@/queries/login";
import { useState } from "react";
import Cookies from "js-cookie";

interface LoginPageProps {
  setAuthorizePage: React.Dispatch<
    React.SetStateAction<"main" | "login" | "register">
  >;
}

const Login: React.FC<LoginPageProps> = ({ setAuthorizePage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }

    const loginData = { email, password };

    try {
      const result = await login(loginData);
      Cookies.set("accessToken", result.accessToken);
    } catch (error) {
      console.error("Login failed:", error);
      setError("Login failed");
    }
  };

  return (
    <div className="flex flex-col gap-[20px] relative">
      <button
        className="absolute top-0 right-0"
        onClick={() => setAuthorizePage("main")}
      >
        x
      </button>
      <p>Login</p>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
      />
      <button
        className="bg-amber-950 text-amber-100 rounded-lg p-[5px]"
        onClick={handleLogin}
      >
        Login
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default Login;

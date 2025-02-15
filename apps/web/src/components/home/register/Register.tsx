import { SignupData, signup } from "@/queries/signup";
import { useState } from "react";
import Cookies from "js-cookie";

interface RegisterPageProps {
  setAuthorizePage: React.Dispatch<
    React.SetStateAction<"main" | "login" | "register">
  >;
}

const Register: React.FC<RegisterPageProps> = ({ setAuthorizePage }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleRegister = async (event: React.FormEvent) => {
    if (!username || !email || !password) {
      setError("Please fill all fields");
      return;
    }

    event.preventDefault();

    const signupData: SignupData = { email, password, name: username };

    try {
      const result = await signup(signupData);
      Cookies.set("accessToken", result.accessToken);
    } catch (error) {
      console.error("Signup failed:", error);
      setError("Signup failed");
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
      <p>Register</p>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={handleUsernameChange}
      />
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
        type="submit"
        className="bg-amber-950 text-amber-100 rounded-lg p-[5px]"
        onClick={handleRegister}
      >
        Register
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default Register;

export interface LoginData {
  email: string;
  password: string;
}

const login = async (loginData: LoginData): Promise<any> => {
  const response = await fetch("http://localhost:8000/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginData),
  });

  if (!response.ok) {
    throw new Error("Failed to login");
  }

  return response.json();
};

export default login;

export interface SignupData {
    email: string;
    password: string;
    name?: string;
  }
  
  export async function signup(signupData: SignupData): Promise<any> {
    const response = await fetch('http://localhost:8000/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(signupData),
    });
  
    if (!response.ok) {
      throw new Error('Failed to sign up');
    }
  
    return response.json();
  }
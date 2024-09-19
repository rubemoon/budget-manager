interface AuthResponse {
  email: string;
  token: string;
}

// Simulate a server call to log in a user
export const login = async (email: string, password: string): Promise<AuthResponse> => {
  // In a real application, you'd make an API call here
  if (email === 'rubens@gmail.com' && password === 'testebala') {
    const userData: AuthResponse = {
      email,
      token: 'fake-jwt-token'
    };
    localStorage.setItem('authToken', userData.token);
    localStorage.setItem('userEmail', userData.email);
    return userData;
  } else {
    throw new Error('Invalid email or password');
  }
};

// Logout function to clear the session
export const logout = (): void => {
  localStorage.removeItem('authToken');
  localStorage.removeItem('userEmail');
};

// Check if a user is authenticated
export const isAuthenticated = (): boolean => {
  return !!localStorage.getItem('authToken');
};

// Get current authenticated user's email
export const getCurrentUser = (): string | null => {
  return localStorage.getItem('userEmail');
};
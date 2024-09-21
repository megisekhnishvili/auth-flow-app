let isAuthenticatedUser = false;

export const login = (callback) => {
  isAuthenticatedUser = true;
  setTimeout(callback, 100); // mimic async login
};

export const logout = (callback) => {
  isAuthenticatedUser = false;
  setTimeout(callback, 100);
};

export const isAuthenticated = () => isAuthenticatedUser;

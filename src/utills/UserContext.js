import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: 'Mohit Jain',
  role: 'User'
});

export const themeContext = createContext('light');

export default UserContext;
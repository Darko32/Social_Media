import { createContext } from "react";

const INITIAL_STATE = {
  _id: "60b38b79b933ce1cac91fc8d",
  username: "Darko",
  email: "darko@darko.com",
  profilePicture: "avatar.jpg",
  coverPicture: "instagram.jpg",
  isAdmin: false
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => (
  <AuthContext.Provider value={{ user: INITIAL_STATE }}>
    {children}
  </AuthContext.Provider>
);
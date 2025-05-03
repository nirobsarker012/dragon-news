import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase/auth_firebase";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(user);
  const createAuth = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //   getting onAuthStateChange
  useEffect(() => {
    const unSubcribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unSubcribe();
    };
  }, []);
  const authData = {
    user,
    setUser,
    createAuth,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;

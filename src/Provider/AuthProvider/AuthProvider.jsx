import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../Config/Firebase/firebase";
export const AuthContext = createContext(null);

const google = new GoogleAuthProvider();
const github = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const googleUser = () => {
    setIsLoading(true);
    return signInWithPopup(auth, google);
  };

  const githubUser = () => {
    setIsLoading(true);
    return signInWithPopup(auth, github);
  };

  const createUser = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    setIsLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const AuthInfo = {
    user,
    isLoading,
    createUser,
    login,
    logout,
    googleUser,
    githubUser,
  };

  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

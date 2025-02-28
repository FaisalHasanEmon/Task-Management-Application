import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  // Use States
  const [loading, setLoading] = useState(true); //loading state
  const [user, setUser] = useState(); //user state
  // auth
  const auth = getAuth(app);
  // Google provider
  const googleProvider = new GoogleAuthProvider();

  // Login with google
  const googleLogin = () => {
    setLoading(false);
    return signInWithPopup(auth, googleProvider);
  };
  // logout user
  const logout = () => {
    setLoading(false);
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    logout,
    user,
    loading,
    setLoading,
    googleLogin,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;

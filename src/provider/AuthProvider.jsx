/* eslint-disable react/prop-types */
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { AuthContext } from "../context";
import { app } from "../Firebase/firebase.init";
import useAxiosOpen from "../hooks/useAxiosOpen";

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosOpen = useAxiosOpen();
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const createUser = async (email, password) => {
    setLoading(true);
    const result = await createUserWithEmailAndPassword(auth, email, password);
    setLoading(false);
    return result;
  };

  const googleLogin = async () => {
    setLoading(true);
    const result = await signInWithPopup(auth, googleProvider);
    return result;
  };

  const signInUser = async (email, password) => {
    setLoading(true);
    const result = await signInWithEmailAndPassword(auth, email, password);
    setLoading(false);
    return result;
  };

  const logOut = async () => {
    setLoading(true);
    await signOut(auth);
    setLoading(false);
  };

  const updateUser = async (name, photo) => {
    const result = await updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
    return result;
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      const tokenUser = async () => {
        if (currentUser) {
          const userInfo = { email: currentUser.email };
          const response = await axiosOpen.post("/jwt", userInfo);
          const result = response.data.token;
          if (result) {
            localStorage.setItem("access-token", result);
          }
        } else {
          localStorage.removeItem("access-token");
        }
      };

      tokenUser();
      setLoading(false);
    });
    return unsubscribe;
  }, [auth, axiosOpen]);

  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    logOut,
    updateUser,
    googleLogin,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

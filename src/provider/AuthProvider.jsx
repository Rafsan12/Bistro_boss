/* eslint-disable react/prop-types */
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { AuthContext } from "../context";
import { app } from "../Firebase/firebase.init";

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);

  const createUser = async (email, password) => {
    setLoading(true);
    const result = await createUserWithEmailAndPassword(auth, email, password);
    setLoading(false);
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
      setLoading(false);
    });
    return unsubscribe;
  }, [auth]);

  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    logOut,
    updateUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

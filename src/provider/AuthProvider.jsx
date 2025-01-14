/* eslint-disable react/prop-types */
import { getAuth } from "firebase/auth";
import { useState } from "react";
import { AuthContext } from "../context";
import { app } from "../Firebase/firebase.config";

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);
  const authInfo = {
    user,
    loading,
  };
  return (
    <>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </>
  );
}

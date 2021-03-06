import React, { useContext, useState, useEffect } from "react";
import { fire } from "./Fire";
import { create_user_in_db } from "./userProfiles";
const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(username, email, password) {
    return fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        let user = userCredential.user;
        create_user_in_db(user, username);
        console.log("Successfully created user account with uid:", user.uid);
      });
  }

  function login(email, password) {
    return fire.auth().signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return fire.auth().signOut();
  }

  useEffect(() => {
    const unsubscribe = fire.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

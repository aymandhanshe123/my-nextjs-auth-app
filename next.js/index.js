// pages/index.js

import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebaseConfig";
import { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState(null);

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        console.log("Logged in:", result.user);
      })
      .catch((error) => {
        console.error("Login error:", error);
      });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Firebase Google Login</h1>
      {user ? (
        <div>
          <p>Welcome, {user.displayName}</p>
          <img src={user.photoURL} alt="Profile" width={100} />
        </div>
      ) : (
        <button onClick={handleLogin}>Sign in with Google</button>
      )}
    </div>
  );
}

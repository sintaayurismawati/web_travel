// src/hooks/useAuth.js
import { useState } from "react";
import { supabase } from "../services/supabaseClient";

const useAuth = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      alert("Signup successful! Please check your email for confirmation.");
    }
    setLoading(false);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      alert("Login successful!");
    }
    setLoading(false);
  };

  return {
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    error,
    loading,
    showSignup,
    setShowSignup,
    handleSignUp,
    handleLogin,
  };
};

export default useAuth;

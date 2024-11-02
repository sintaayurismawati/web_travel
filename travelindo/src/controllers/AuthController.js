// src/controllers/AuthController.js
import { AuthModel } from "../models/AuthModel";

export const AuthController = {
  async handleSignUp(email, password, setLoading, setError) {
    setLoading(true);
    setError("");
    const { data, error } = await AuthModel.signUp(email, password);
    setLoading(false);
    return error
      ? error.message
      : "Signup successful! Please check your email for confirmation.";
  },

  async handleLogin(email, password, setLoading, setError) {
    setLoading(true);
    setError("");
    const { data, error } = await AuthModel.login(email, password);
    setLoading(false);
    return error ? error.message : "Login successful!";
  },
};

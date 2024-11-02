// src/models/AuthModel.js
import { supabase } from "../services/supabaseClient";

export const AuthModel = {
  async signUp(email, password) {
    const { data, error } = await supabase.auth.signUp({ email, password });
    return { data, error };
  },

  async login(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    return { data, error };
  },
};

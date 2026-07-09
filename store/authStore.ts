import { create } from "zustand";

interface AuthState {
  user: any;
  token: string | null;

  setUser: (user: any) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,

  setUser: (user) =>
    set({
      user,
    }),

  logout: () =>
    set({
      user: null,
      token: null,
    }),
}));
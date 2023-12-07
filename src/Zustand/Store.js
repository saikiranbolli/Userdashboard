import {create} from "zustand";
import User from "../components/User";

export const UserStore = create((set) => ({
  user: User.reverse(),
  setUser: (newUser) => set((state) => ({ user: newUser })),
}));

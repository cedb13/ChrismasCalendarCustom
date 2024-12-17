import create from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  name: string;
  email: string;
  isAdmin?: boolean;
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<{ success: boolean; message: string }>;
  logout: () => void;
}

const SUPER_ADMIN = {
  email: 'cedric.freeweb@gmail.com',
  password: '#TestAppi13#',
  name: 'Super Admin',
  isAdmin: true,
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,
      login: async (email: string, password: string) => {
        if (email === SUPER_ADMIN.email && password === SUPER_ADMIN.password) {
          set({ 
            isAuthenticated: true, 
            user: {
              email: SUPER_ADMIN.email,
              name: SUPER_ADMIN.name,
              isAdmin: true,
            }
          });
          return { success: true, message: 'Connexion réussie' };
        }
        
        // TODO: Implement regular user authentication
        return { success: false, message: 'Identifiants invalides' };
      },
      logout: () => set({ isAuthenticated: false, user: null }),
    }),
    {
      name: 'auth-storage',
    }
  )
);
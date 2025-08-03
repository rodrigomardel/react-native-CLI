import { create } from "zustand";

/**
 * Interfaz para el estado del auth
 */
interface AuthState {
    status: 'checking' | 'authenticated' | 'not-authenticated';
    token?: string;
    user?: {
        name: string;
        email: string;
    };
}

/**
 * Zustand es un store (mantiene datos centralizados que puedes usar en múltiples componentes) de estado para React.
 * Es una librería de estado que nos permite crear un store de estado para React.
 */
export const useAuthStore = create<AuthState>((set) => ({
    status: 'checking',
    token: undefined,
    user: undefined,
}));
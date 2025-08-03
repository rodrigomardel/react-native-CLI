import { create } from "zustand";

/**
 * Interfaz que define la estructura del estado de autenticación
 * 
 * @interface AuthState
 * @property {'checking' | 'authenticated' | 'not-authenticated'} status - Estado actual de la autenticación
 * @property {string} [token] - Token de autenticación (opcional)
 * @property {Object} [user] - Información del usuario autenticado (opcional)
 * @property {string} user.name - Nombre del usuario
 * @property {string} user.email - Email del usuario
 * @property {Function} login - Función para iniciar sesión
 * @property {Function} logout - Función para cerrar sesión
 */
interface AuthState {
    /** Estado actual de la autenticación */
    status: 'checking' | 'authenticated' | 'not-authenticated';
    /** Token de autenticación (opcional) */
    token?: string;
    /** Información del usuario autenticado (opcional) */
    user?: {
        name: string;
        email: string;
    };

    /**
     * Función para iniciar sesión
     * @param {string} email - Email del usuario
     * @param {string} password - Contraseña del usuario
     */
    login: (email: string, password: string) => void;
    
    /**
     * Función para cerrar sesión
     * Limpia el estado de autenticación
     */
    logout: () => void;
}

/**
 * Store de autenticación creado con Zustand
 * 
 * Este store maneja el estado global de autenticación de la aplicación,
 * incluyendo el estado del usuario, token de autenticación y las funciones
 * para iniciar y cerrar sesión.
 * 
 * @example
 * ```typescript
 * // Usar el store en un componente
 * const { status, user, login, logout } = useAuthStore();
 * 
 * // Iniciar sesión
 * login('usuario@email.com', 'password123');
 * 
 * // Verificar si está autenticado
 * if (status === 'authenticated') {
 *   console.log('Usuario autenticado:', user?.name);
 * }
 * 
 * // Cerrar sesión
 * logout();
 * ```
 */
export const useAuthStore = create<AuthState>((set) => ({
    // Estado inicial: verificando autenticación
    status: 'checking',
    token: undefined,
    user: undefined,

    /**
     * Función para iniciar sesión
     * 
     * @param {string} email - Email del usuario
     * @param {string} password - Contraseña del usuario
     * 
     * @example
     * ```typescript
     * const { login } = useAuthStore();
     * login('usuario@email.com', 'password123');
     * ```
     */
    login: (email: string, password: string) => {
        // TODO: Implementar lógica real de autenticación con API
        // Por ahora simula un login exitoso
        set({ 
            status: 'authenticated', 
            token: '1234567890', 
            user: { 
                name: 'John Doe', 
                email: email 
            } 
        });
    },

    /**
     * Función para cerrar sesión
     * 
     * Limpia el estado de autenticación, estableciendo el status como
     * 'not-authenticated' y removiendo el token y datos del usuario.
     * 
     * @example
     * ```typescript
     * const { logout } = useAuthStore();
     * logout();
     * ```
     */
    logout: () => {
        set({ 
            status: 'not-authenticated', 
            token: undefined, 
            user: undefined 
        });
    }
}));
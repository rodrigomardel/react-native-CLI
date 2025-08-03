import { useAuthStore } from "../store/auth.store";

/**
 * Componente que muestra la página de login
 * @returns Componente que muestra la página de login
 */
export const LoginPage = () => {

    const authStatus = useAuthStore (state => state.status);

    return (
        <div className="login-page">
            <h3>Login</h3>
            <p>Status: {authStatus}</p>
        </div>
    )
}
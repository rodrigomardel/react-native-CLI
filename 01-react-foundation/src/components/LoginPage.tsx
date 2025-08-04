import { useAuthStore } from "../store/auth.store";
import { useEffect } from "react";

/**
 * Componente de página de login que maneja la autenticación de usuarios
 * 
 * Este componente demuestra el uso del store de autenticación (useAuthStore)
 * y proporciona una interfaz para que los usuarios puedan iniciar y cerrar sesión.
 */
export const LoginPage = () => {
    // Extraer estado y funciones del store de autenticación
    const authStatus = useAuthStore(state => state.status);
    const login = useAuthStore(state => state.login);
    const logout = useAuthStore(state => state.logout);
    const user = useAuthStore(state => state.user);
    
    /**
     * Efecto que automáticamente cierra sesión después de 1.5 segundos
     * 
     * Este efecto se ejecuta solo una vez al montar el componente.
     * Es útil para demostración y testing, pero en una aplicación real
     * probablemente se eliminaría o se modificaría según los requerimientos.
     */
    useEffect(() => {
        const timer = setTimeout(() => {
            logout();
        }, 1500);

        // Cleanup: limpiar el timer si el componente se desmonta
        return () => clearTimeout(timer);
    }, [logout]);

    // Renderiza el estado de carga mientras se verifica la autenticación
    if (authStatus === 'checking') {
        return (
            <div className="login-page">
                <h3>Loading...</h3>
            </div>
        );
    }

    return (
        <div className="login-page">
            <h3>Login Page</h3>
            
            {authStatus === 'authenticated' ? (
                <div>
                    <h4>✅ Usuario Autenticado</h4>
                    <pre>{JSON.stringify(user, null, 2)}</pre>
                </div>
            ) : (
                <div>
                    <h4>❌ No autenticado</h4>
                    <p>Haz clic en el botón de login para iniciar sesión</p>
                </div>
            )}

            {authStatus === 'authenticated' ? (
                <button 
                    onClick={logout}
                    style={{
                        backgroundColor: '#dc3545',
                        color: 'white',
                        padding: '10px 20px',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}
                >
                    🚪 Cerrar Sesión
                </button>
            ) : (
                <button 
                    onClick={() => login('test@test.com', '123456')}
                    style={{
                        backgroundColor: '#28a745',
                        color: 'white',
                        padding: '10px 20px',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}
                >
                    🔑 Iniciar Sesión
                </button>
            )}
        </div>
    );
};
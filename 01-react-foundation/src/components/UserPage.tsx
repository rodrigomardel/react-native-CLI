import axios from "axios"
import { useEffect, useRef, useState } from "react"
import type { ReqResUserResponse, User } from "../interfaces"

/**
 * Carga usuarios desde la API de ReqRes
 * @param {number} page - Número de página a cargar (por defecto: 1)
 * @returns Promise<User[]> - Array de usuarios o array vacío si hay error
 */
const loadUsers = async (page: number = 1): Promise<User[]> => {
  try {
    // Realiza petición GET a la API de ReqRes para obtener usuarios
    const {data} = await axios.get<ReqResUserResponse>('https://reqres.in/api/users', {
      params: {
        page: page
      },
      headers: {
        'x-api-key': 'reqres-free-v1'
      }
    });
    return data.data;

  } catch (error) {
    console.log(error);
    return [];
  }

}

/**
 * Componente que muestra una tabla de usuarios obtenidos desde la API con paginación
 * 
 * @description
 * Este componente:
 * - Carga usuarios al montarse usando useEffect (página 1 por defecto)
 * - Muestra una tabla con avatar, nombre y email de cada usuario
 * - Implementa paginación con botones "Previous" y "Next"
 * - Utiliza useRef para mantener el estado de la página actual
 * - Maneja la navegación entre páginas con validaciones básicas
 * - Utiliza la API de ReqRes para obtener los datos
 * 
 * @features
 * - Paginación: Navegación entre páginas de usuarios
 * - Validación: Previene navegación a páginas inexistentes
 * - Estado persistente: Mantiene la página actual durante re-renders
 * 
 * @returns JSX.Element - Tabla de usuarios con controles de paginación
 */
export const UserPage = () => {

  const [users, setUsers] = useState<User[]>([]);
  const currentPageRef = useRef(1);

  useEffect(() => {
    // Carga usuarios al montar el componente
    loadUsers(currentPageRef.current)
      .then(users => setUsers(users)); //setUsers(users) -> sintaxis reducida para actualizar el estado
  }, [])

  /**
   * Navega a la siguiente página de usuarios
   * @description
   * - Incrementa el contador de página
   * - Carga los usuarios de la nueva página
   * - Si no hay usuarios, revierte el contador
   */
  const nextPage = async() => {
    currentPageRef.current++;
    const users = await loadUsers(currentPageRef.current);
    if (users.length > 0) {
      setUsers(users);
    } else {
      currentPageRef.current--;
    }
  }

  /**
   * Navega a la página anterior de usuarios
   * @description
   * - Valida que no estemos en la página 1 o menor
   * - Decrementa el contador de página
   * - Carga los usuarios de la página anterior
   */
  const previousPage = async () => {
    if (currentPageRef.current < 1) return;
    currentPageRef.current--;
    const users = await loadUsers(currentPageRef.current);
    setUsers(users);
  }

    return (
        <div>
            <h3>Usuarios:</h3>
            <table>
              <thead>
                <tr>
                  <th>Avatar</th>
                  <th>Nombre</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {
                users.map((user: User) => (
                  <UserRow key={user.id} user={user} />
                ))
                }
              </tbody>
            </table>
            <div className="buttons-user-page">
              <button onClick={previousPage}>Previous</button>
              <button onClick={nextPage}>Next</button>
            </div>
        </div>
    )
}

/**
 * Interfaz para las propiedades del componente UserRow
 * @interface UserRowProps
 * @property {User} user - Usuario a mostrar
 */
interface UserRowProps {
  user: User;
}

/**
 * Componente que muestra una fila de usuario en la tabla
 * @param {UserRowProps} props - Propiedades del componente
 * @returns {JSX.Element} - Fila de usuario
 */
export const UserRow = ({user}: UserRowProps) => {

  const {id, avatar, first_name, last_name, email} = user;

  return (
    <tr key={id}>
      <td><img style={{width: 50, borderRadius: 100}} src={avatar} alt="User Avatar" /></td>
      <td>{first_name} {last_name}</td>
      <td>{email}</td>
    </tr>
  )
}
import axios from "axios"
import { useEffect, useState } from "react"
import type { ReqResUserResponse, User } from "../interfaces"

/**
 * Carga usuarios desde la API de ReqRes
 * @returns Promise<Array> - Array de usuarios o array vacío si hay error
 */
const loadUsers = async (): Promise<User[]> => {
  try {
    // Realiza petición GET a la API de ReqRes para obtener usuarios
    const {data} = await axios.get<ReqResUserResponse>('https://reqres.in/api/users', {
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
 * Componente que muestra una tabla de usuarios obtenidos desde la API
 * 
 * @description
 * Este componente:
 * - Carga usuarios al montarse usando useEffect
 * - Muestra una tabla con avatar, nombre y email de cada usuario
 * - Utiliza la API de ReqRes para obtener los datos
 * 
 * @returns JSX.Element - Tabla de usuarios
 */
export const UserPage = () => {

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // Carga usuarios al montar el componente
    loadUsers()
      .then(users => setUsers(users)); //setUsers(users) -> sintaxis reducida para actualizar el estado
  }, [])

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
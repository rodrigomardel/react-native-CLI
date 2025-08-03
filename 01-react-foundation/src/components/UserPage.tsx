import axios from "axios"
import { useEffect } from "react"
import type { ReqResUserResponse } from "../interfaces"

/**
 * Carga usuarios desde la API de ReqRes
 * @returns Promise<Array> - Array de usuarios o array vacío si hay error
 */
const loadUsers = async () => {
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

  useEffect(() => {
    // Código comentado: ejemplo de petición con parámetros de página
    // axios.get<ReqResUserResponse>('https://reqres.in/api/users?page=2', {
    //   headers: {
    //     'x-api-key': 'reqres-free-v1'
    //   }
    // })
    //   .then(resp => console.log(resp.data.data[0]));
    
    // Carga usuarios al montar el componente
    loadUsers().then(users => console.log(users));
  }, [])

    return (
        <div>
            <h3>Usuarios:</h3>
            {/* Tabla para mostrar información de usuarios */}
            <table>
              <thead>
                <tr>
                  <th>Avatar</th>
                  <th>Nombre</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {/* TODO: Renderizar usuarios dinámicamente desde el estado */}
                <tr>
                  <td>avatar</td>
                  <td>nombre</td>
                  <td>email</td>
                </tr>
              </tbody>
            </table>
        </div>
    )
}
import { useUsers } from "../hooks/useUsers";
import type { User } from "../interfaces";
import { UserRow } from "./UserRow";

/**
 * Muestra una lista paginada de usuarios en formato de tabla.
 * Utiliza el hook useUsers para obtener y gestionar los datos de usuarios.
 */
export const UserPage = () => {
  const {users, nextPage, previousPage} = useUsers();
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


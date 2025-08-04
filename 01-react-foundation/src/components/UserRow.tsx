import type { User } from "../interfaces";

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
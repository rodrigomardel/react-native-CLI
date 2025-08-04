import axios from "axios";
import type { ReqResUserResponse, User } from "../interfaces";
import { useEffect, useRef, useState } from "react";

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

export const useUsers = () => {

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

  return {
    //Propiedades
    users,
    //Métodos
    nextPage,
    previousPage
  }

}


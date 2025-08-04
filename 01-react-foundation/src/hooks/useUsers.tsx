import axios from "axios";
import type { ReqResUserResponse, User } from "../interfaces";
import { useEffect, useRef, useState } from "react";

/**
 * Obtiene usuarios de la API de ReqRes
 * @param page - Número de página (default: 1)
 * @returns Array de usuarios o array vacío si hay error
 */
const loadUsers = async (page: number = 1): Promise<User[]> => {
  try {
    const {data} = await axios.get<ReqResUserResponse>('https://reqres.in/api/users', {
      params: { page },
      headers: { 'x-api-key': 'reqres-free-v1' }
    });
    return data.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

/**
 * Hook personalizado para gestionar usuarios con paginación
 * 
 * @returns {Object} Objeto con:
 * - users: Array de usuarios actuales
 * - nextPage: Función para ir a la siguiente página
 * - previousPage: Función para ir a la página anterior
 */
export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const currentPageRef = useRef(1);

  useEffect(() => {
    // Carga usuarios al montar el componente
    loadUsers(currentPageRef.current)
      .then(users => setUsers(users)); //setUsers(users) -> sintaxis reducida para actualizar el estado
  }, [])

  /**
   * Avanza a la siguiente página
   * Revierte si no hay usuarios en la nueva página
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
   * Retrocede a la página anterior
   * No permite ir a página 0 o menor
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


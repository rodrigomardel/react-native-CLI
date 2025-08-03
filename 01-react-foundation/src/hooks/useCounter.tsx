import { useState } from "react";

/**
 * Interfaz para las opciones del hook
 */
interface Options {
    initialValue?: number;
}

/**
 * Hook para el contador
 * @param initialValue Valor inicial del contador
 * @returns Objeto con las propiedades y funciones del contador
 */
export const useCounter = ({initialValue = 0}: Options) => {
    
    const [count, setCount] = useState<number>(initialValue);

    const increaseBy = (value: number): void => {
      if (count + value < 0) return;
      setCount(count + value);
    }

    return {
        // Retornamos un objeto con las propiedades que queremos exponer
        count,
        // Retornamos la función que queremos exponer
        increaseBy
    }
}
    


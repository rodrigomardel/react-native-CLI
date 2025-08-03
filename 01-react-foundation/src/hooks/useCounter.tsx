import { useState } from "react";

interface Options {
    initialValue?: number;
}

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
    


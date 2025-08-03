import { useState } from "react"

/**
 * Componente que muestra un contador con useState
 * @returns Componente que muestra un contador con useState
 */
export const Counter = () => {

  const [count, setCount] = useState<number>(10);

  const increaseBy = (value: number): void => {
    setCount(count + value);
  }

  return (
    <>
      <h2>Hook useState</h2>
      <h3>Counter: <small>{count}</small></h3>
      <div>
      <button onClick={() => increaseBy(1)}>+1</button>
      &nbsp;
      <button onClick={() => increaseBy(-1)}>-1</button>
      </div>
    </>
  )
}
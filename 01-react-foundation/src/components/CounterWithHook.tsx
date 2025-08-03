import { useCounter } from "../hooks/useCounter";

export const CounterWithHook = () => {

  const { count, increaseBy } = useCounter({});

  return (
    <>
      <h2>CustomHook useState</h2>
      <h3>Counter: <small>{count}</small></h3>
      <div>
      <button onClick={() => increaseBy(1)}>+1</button>
      &nbsp;
      <button onClick={() => increaseBy(-1)}>-1</button>
      </div>
    </>
  )
}
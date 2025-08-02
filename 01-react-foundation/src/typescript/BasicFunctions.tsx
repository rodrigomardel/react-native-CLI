
export const BasicFunctions = () => {

  const addTwoNumbers = (a: number, b: number): number => {
    return a + b;
  }


  const addTwoStringNumbers = (a: string, b: string): string => {
    return `${a + b}`;
  }

  return (
    <>
      <h2>Funciones</h2>
      <span>El resultado de tipo number es: {addTwoNumbers(1, 8)}</span>
      <span>El resultado de tipo string es: {addTwoStringNumbers('1', '8')}</span>
    </>
  )
}
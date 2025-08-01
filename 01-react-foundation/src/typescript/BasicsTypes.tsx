
export const BasicsTypes = () => {
  
  const name: string = "Juan";
  const age: number = 20;
  const isActive: boolean = true;

  const powers: string[]= ['React', 'Angular', 'Vue', 'Node', 'MongoDB'];

  // powers.push('Next.js');

  return (
    <>
      <h2>Tipos Básico</h2>
      {name} {age} {isActive ? 'Activo' : 'Inactivo'}
      <br />
      {powers.join(', ')}
    </>
  )
}

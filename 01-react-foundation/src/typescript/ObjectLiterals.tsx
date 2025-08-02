interface Person {
  firstName: string;
  lastName: string;
  age: number;
  address: Address;
  // ?: opcional
  isAlive?: boolean;
}

interface Address {
  country: string;
  houseNumber: number;
}




export const ObjectLiterals = () => {
  
  const person: Person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    address: {
      country: 'USA',
      houseNumber: 123
    },
    isAlive: true,
  };
  
  // destructuring
  const { firstName, lastName, age, address, isAlive } = person;

  return (
    <>
      <h2>Objetos Literales</h2>
      <pre>
        {JSON.stringify(person, null, 2)}
      </pre>
      <h2>Desestructuración de objetos</h2>
      <p><strong>{firstName} {lastName}</strong> de <strong>{age}</strong> años, vive en <strong>{address.country}</strong> en la casa <strong>{address.houseNumber}</strong></p>
      <p>Está vivo: <strong>{isAlive ? 'Sí' : 'No'}</strong></p>
    </>
  );
};


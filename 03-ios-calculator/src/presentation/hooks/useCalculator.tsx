import { useRef, useState } from "react";

enum Operations {
  add,
  subtract,
  multiply,
  divide,
}

export const useCalculator = () => {

  const [number, setNumber] = useState('0');
  const [ prevNumber, setPrevNumber ] = useState( '0' );

  const lastOperation = useRef<Operations>();



  const clean = () => {
    setNumber('0');
    setPrevNumber('0');
    lastOperation.current = undefined;
  };

  const deleteLastNumber = () => {
    let currentSign = '';
    let temporalNumber = number;

    if ( number.includes( '-' ) ) {
      currentSign = '-';
      temporalNumber = number.substring( 1 ); // 88
    }

    if ( temporalNumber.length > 1 ) {
      return setNumber( currentSign + temporalNumber.slice( 0, -1 ) ); // 
    }

    setNumber( '0' );
  };

  const toggleSign = () => {
    if ( number.includes( '-' ) ) {
      return setNumber( number.replace( '-', '' ) );
    }

    setNumber( '-' + number );
  };

  const buildNumber = ( numberString: string ) => {
    // Si hay una operación pendiente y el número actual es 0, limpiar para nueva entrada
    if (lastOperation.current !== undefined && number === '0') {
      setNumber('');
    }

    if ( number.includes( '.' ) && numberString === '.' ) return;

    if ( number.startsWith( '0' ) || number.startsWith( '-0' ) ) {

      // Punto decimal
      if ( numberString === '.' ) {
        return setNumber( number + numberString );
      }

      // Evaluar si es otro cero y no hay punto
      if ( numberString === '0' && number.includes( '.' ) ) {
        return setNumber( number + numberString );
      }

      // Evaluar si es diferente de cero, no hay punto, y es el primer numero
      if ( numberString !== '0' && !number.includes( '.' ) ) {
        return setNumber( numberString );
      }

      // Evitar 000000.00
      if ( numberString === '0' && !number.includes( '.' ) ) {
        return;
      }

      return setNumber( number + numberString );
    }

    setNumber( number + numberString );
  };

  const setLastNumber = () => {
    
    if ( number.endsWith( '.' ) ) {
      setPrevNumber( number.slice( 0, -1 ) );
    } else {
      setPrevNumber( number );
    }

    setNumber( '0' );
  };

  const divideOperation = () => {
    setLastNumber();
    lastOperation.current = Operations.divide;
  };

  const multiplyOperation = () => {
    setLastNumber();
    lastOperation.current = Operations.multiply;
  };

  const subtractOperation = () => {
    setLastNumber();
    lastOperation.current = Operations.subtract;
  };

  const addOperation = () => {
    setLastNumber();
    lastOperation.current = Operations.add;
  };

  const calculateResult = () => {
    const num1 = Number(prevNumber);
    const num2 = Number(number);

    switch (lastOperation.current) {
      case Operations.add:
        setNumber(String(num1 + num2));
        break;
      case Operations.subtract:
        setNumber(String(num1 - num2));
        break;
      case Operations.multiply:
        setNumber(String(num1 * num2));
        break;
      case Operations.divide:
        if (num2 === 0) {
          setNumber('Error');
          return;
        }
        setNumber(String(num1 / num2));
        break;
    }

    setPrevNumber('0');
    lastOperation.current = undefined;
  };

  return {
    // Properties
    number,
    prevNumber,
    // Methods
    buildNumber,
    clean,
    deleteLastNumber,
    toggleSign,
    divideOperation,
    multiplyOperation,
    subtractOperation,
    addOperation,
    calculateResult,
  };
}